import { CountryNames } from '~types/countries';

const femaleNames = [
	'Alex', 'Alissa', 'An', 'Anh', 'Annie', 'Bao Tran', 'Bella', 'Binh', 'Cara', 'Cat', 'Charollte', 'Chau Anh', 'Chi',
	'Chloe', 'Chu', 'Da Hyun', 'Diem Hang', 'Eunice', 'Fio', 'Giang', 'Ha', 'Ha Tit', 'Hai Anh', 'Hana', 'Hang', 'Hoang',
	'Hoàng Anh', 'Huong', 'Huong Lan', 'Huyen', 'Isabella', 'Jane', 'Jiyoon', 'Kaylee', 'Khaingan', 'Khanh', 'Kim',
	'Lala', 'Lam', 'Lan', 'Lien', 'Liliane', 'Linh', 'Louis', 'Maki', 'Marielle', 'Mellisa', 'Merry', 'Mia', 'Min',
	'Minh', 'Mo', 'My', 'Nabi', 'Nga', 'Ngan', 'Nghi', 'Ngoc', 'Nguyen', 'Nguyen Phuong Tra', 'Nguyen Quynh Ngan',
	'Nguyen Thi', 'Nguyet Quyen', 'Ngọc', 'Nhi', 'Nhu', 'Nhung', 'Nhân', 'Oanh', 'Phung', 'Phuong', 'Quynh', 'Quynh Anh',
	'Renesmee', 'Sal', 'Sam', 'Sara', 'Sue', 'Sunny', 'Sylvia', 'Tg', 'Thao', 'Thu', 'Thuan', 'Thuy', 'Thủy', 'Tien',
	'Tina', 'Tio', 'Tr.li', 'Tra', 'Tracy', 'Tram', 'Trang', 'Trinh', 'Uyên', 'Van', 'Vi', 'Vy', 'Xuan Thuong'
];

const maleNames = [
	'Andy', 'Anh Tuan', 'Arif', 'Bao', 'Binh', 'Bui', 'Calvin', 'Chien', 'Dang', 'Daniel', 'Dao', 'David', 'Daòt',
	'Derick', 'Dinh', 'Dong', 'Duc', 'Duc Anh', 'Duong', 'Eddy', 'Finney', 'Garrett', 'Hai', 'Hao', 'Harrison', 'Harry',
	'Henry', 'Hiep', 'Hoang', 'Hrishikesh', 'Huy', 'Huynh Chi Hai', 'Hy Khánh', 'Hyeon Gyu', 'Hyun Sik', 'Hùng',
	'Jackson', 'James ', 'Jason', 'Jason', 'Jie', 'John', 'Joontae', 'Ken', 'Khanh', 'Kiet', 'Kong', 'Kwonmin',
	'Lam Anh', 'Le', 'Lee', 'Lee Viert', 'Liam', 'Linh', 'Minh', 'Mop', 'Nabi', 'Nam', 'Nathan', 'Nghi', 'Ngoc',
	'Nguyen', 'Nhân', 'Philip', 'Phuc', 'Phung Huu', 'Quang', 'Quyen', 'Quyền', 'Redge', 'Ron', 'Sam', 'Tam', 'Tan',
	'Thai Duong', 'Thang', 'Thanh', 'Thien', 'Thomas', 'Thuan', 'Tie', 'Tien', 'Toni', 'Tony', 'Tran', 'Tran Van',
	'Tri', 'Trinh', 'Trung', 'Tsundere', 'Tuan', 'Tuan Anh', 'Tyuo(µµà±)', 'Tú', 'Van', 'Viet', 'Viet Phung', 'Vũ',
	'Wade', 'Williams'
];

const lastNames = [
	'An', 'Bao', 'Biên', 'Biện', 'Bành', 'Bạch', 'Cao', 'Chiêm', 'Chu', 'Chung', 'Chân', 'Châu', 'Cung', 'Cung', 'Cái',
	'Cát', 'Cảnh', 'Cảnh', 'Cổ', 'Củng', 'Cừu', 'Diệp', 'Doãn', 'Dung', 'Dũ', 'Dư', 'Dịch', 'Dữu', 'Gia Cát', 'Giang',
	'Giả', 'Giản', 'Hoa', 'Hoạn', 'Hoắc', 'Hy', 'Hà', 'Hàn', 'Hác', 'Hình', 'Hướng', 'Hạ', 'Hầu', 'Hậ', 'Hồng', 'Hứa',
	'Kha', 'Khuất', 'Khâu', 'Khổng', 'Kim', 'Kiều', 'Kỳ', 'Kỷ', 'La', 'Lai', 'Lam', 'Liên', 'Liêu', 'Liễu', 'Long',
	'Lâm', 'Lãnh', 'Lôi', 'Lăng', 'Lư', 'Lưu', 'Lương', 'Lạc', 'Lệ', 'Lục', 'Lữ', 'Mai', 'Mao', 'Minh', 'Miêu', 'Mã',
	'Mông', 'Mạc', 'Mạch', 'Mạnh', 'Mẫn', 'Nghiêm', 'Nghê', 'Ngân', 'Ngư', 'Ngưu', 'Nhan', 'Nhiếp', 'Nhiều', 'Nhung',
	'Nhâm', 'Nhạc', 'Ninh', 'Nông', 'Phí', 'Phòng', 'Phó', 'Phù', 'Phùng', 'Phương', 'Quan', 'Quang', 'Quyền', 'Quách',
	'Quản', 'Quảng', 'Quế', 'Sài', 'Sầm', 'Sử', 'Thai', 'Thang', 'Thanh Hóa', 'Thi', 'Thiện', 'Thiệu', 'Thành', 'Thái',
	'Thân', 'Thích', 'Thôi', 'Thư', 'Thường', 'Thạch', 'Thảo', 'Thủy', 'Tiêu', 'Tiêu', 'Tiết', 'Tiền', 'Trang', 'Triệu',
	'Trác', 'Trâu', 'Trì', 'Trương', 'Trạch', 'Trại', 'Trầm', 'Trịnh', 'Tào', 'Tân', 'Tô', 'Tôn', 'Tôn Thất', 'Tông',
	'Tăng', 'Tư Mã', 'Tưởng', 'Tạ', 'Tất', 'Tần', 'Tề', 'Tống', 'Từ', 'Vi', 'Vân', 'Văn', 'Vĩnh', 'Vũ', 'Vũ Văn',
	'Vưu', 'Vương', 'Vạn', 'Xà', 'Xầm', 'Xế', 'Yên', 'Yến', 'Ái', 'Ân', 'Ôn', 'Ông', 'Úc', 'Đinh', 'Điền', 'Đoàn',
	'Đàm', 'Đào', 'Đái', 'Đường', 'Đậu', 'Đồ', 'Đồng', 'Đổng', 'Ổn', 'Ứng'
];

// a large proportion of surnames (40%) of Vietnamese are Nguyễn. Since we can't weight them, we just repeat them
const num = Math.round((lastNames.length * 100) / 40);
const names = Array(num).fill('Nguyễn');

const namesData: CountryNames = {
	femaleNames,
	maleNames,
	lastNames: [
		...lastNames,
		...names
	]
};

export default namesData;
