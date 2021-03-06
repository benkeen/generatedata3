import React from 'react';
import { gql } from '@apollo/client';
import Cookies from 'js-cookie';
import env from '../../../../_env';
import { apolloClient } from '../../apolloClient';
import store from '../../store';
import {
	onLoginSuccess,
	setAuthenticated,
	setAuthenticationData,
	setOnloadAuthDetermined
} from '~store/main/main.actions';
import { AuthMethod } from '~types/general';
import * as mainSelectors from '~store/main/main.selectors';
import { addToast } from '~utils/generalUtils';
import * as langUtils from '~utils/langUtils';

// import { setAuthTokenRefresh } from '~utils/authUtils';

const googleBtnId = 'google-signin-button';

const init = (): void => {
	window.gapi.load('client:auth2', (): void => {
		/* eslint-disable @typescript-eslint/camelcase */
		const auth2 = window.gapi.auth2.init({ client_id: env.googleAuthClientId, scope: 'profile' });

		auth2.isSignedIn.listen((isSignedIn: any): void => {
			if (isSignedIn) {
				onAuthenticated(auth2.currentUser.get(), { onPageRender: true });
			}
		});
	});
};


export const initGoogleAuth = (): void => {
	const script = document.createElement('script');
	script.src = 'https://apis.google.com/js/platform.js?onload=initGoogleAuth';
	script.async = true;
	script.defer = true;
	document.body.appendChild(script);

	window.initGoogleAuth = init;
};

export type AuthenticatedOptions = {
	onPageRender?: boolean;
};

const onAuthenticated = async (googleUser: any, opts: AuthenticatedOptions = {}): Promise<any> => {
	const i18n = langUtils.getStrings();

	const options = {
		onPageRender: false,
		...opts
	};

	const isLoggedIn = mainSelectors.isLoggedIn(store.getState());

	if (isLoggedIn) {
		store.dispatch(setAuthenticated(true));
		store.dispatch(setOnloadAuthDetermined());
	} else {
		const googleToken = googleUser.getAuthResponse().id_token;
		const response = await apolloClient.mutate({
			mutation: gql`
                mutation LoginWithGoogle($googleToken: String!) {
                    loginWithGoogle(googleToken: $googleToken) {
                        token
                        success
                        error
                        firstName
                        lastName
                        expiryDate
                        accountType
                        dateCreated
                        email
                        numRowsGenerated
                        profileImage
                        country
                        region
                    }
                }
			`,
			variables: { googleToken }
		});

		if (response.data.loginWithGoogle.success) {
			const { tokenExpiry, refreshToken } = response.data.loginWithGoogle;

			store.dispatch(setAuthenticationData({
				...response.data.loginWithGoogle,
				authMethod: AuthMethod.google
			}));

			Cookies.set('refreshToken', refreshToken, { expires: new Date(tokenExpiry) });
			onLoginSuccess(null, options.onPageRender, store.dispatch);
		} else {
			if (response.data.loginWithGoogle.error === 'accountExpired') {
				addToast({
					type: 'error',
					message: i18n.core.accountExpiredMsg
				});
				logoutGoogle();
			} else if (response.data.loginWithGoogle.error === 'noUserAccount') {
				addToast({
					type: 'error',
					message: i18n.core.userAccountNotFound
				});
				logoutGoogle();
			}
		}
	}
};

export const onLoginPanelRender = (): void => {
	const observer = new MutationObserver((): void => {
		if (document.contains(document.getElementById(googleBtnId)) && window.gapi) {
			window.gapi.signin2.render(googleBtnId, {
				scope: 'profile email',
				width: 210,
				height: 42,
				longtitle: true,
				theme: 'dark'
			});
			observer.disconnect();
		}
	});

	observer.observe(document, {
		attributes: false,
		childList: true,
		characterData: false,
		subtree: true
	});
};

export const SignInWithGoogleButton = (): JSX.Element => <div id={googleBtnId} />;

export const logoutGoogle = (): void => {
	const auth2 = window.gapi.auth2.getAuthInstance();
	auth2.signOut();
};
