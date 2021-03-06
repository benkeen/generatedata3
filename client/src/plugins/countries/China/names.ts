import { CountryNames } from '~types/countries';

const femaleNames = [
	'Ai', 'An', 'Bao', 'Chen', 'Chun', 'Hui', 'Jia', 'Jun', 'Kai', 'Li Hua', 'Li Mei', 'Ling', 'Mei', 'Ning', 'Nuan',
	'Qing', 'Shu', 'Xue', 'Yan', 'Zhen', 'Chu', 'Cong', 'Genji', 'Hop', 'Hua', 'Lai', 'Mey', 'Qiao', 'Qing yuan',
	'Qinyang', 'Ushi', 'Wenling', 'Xin-jin', 'Yanay', 'Ching', 'Cixi', 'Fang', 'Fu', 'Jiang', 'Liang', 'Lu', 'Qiu',
	'Su', 'Tai', 'Wang Shu;', 'Wei', 'Wu', 'Yun', 'Zhi Rou', 'Diu', 'Fen', 'Hanna', 'Huan', 'Huang', 'Lian', 'Ling',
	'Ming', 'Ming Yue', 'Peng', 'Ping', 'Xiu', 'Xiulin', 'Yu-yan', 'Qiuyue', 'Ying Yue', 'Yong', 'Yue', 'Yuèhai',
	'Yuèqín', 'Liena', 'Lifen', 'Lì húa', 'Lihua', 'Lijuan', 'Liling', 'LiMei', 'Li mei', 'Li ming', 'Lin', 'Li Na',
	'Linqin', 'Li Qin', 'Liqiu', 'Li Rong', 'Li Wei', 'Mayleen', 'Méh-è', 'Méh-fùnh', 'Meifen', 'Meifeng', 'Meihui',
	'Mei Lien', 'Mei Xiang', 'Mei Xing', 'Meiyin', 'Mei Zhen', 'Mingmei', 'Rong', 'Wan', 'Xin', 'Qian'
];

const maleNames = [
	'Aiguo', 'An', 'Bai', 'Bambang', 'Bengt', 'Biming', 'Bingwen', 'Bo', 'Bojing', 'Boqin', 'Chang ', 'Changpu', 'Chao',
	'Chaun', 'Chen', 'Cheng', 'Cheung', 'Chi', 'Chuanli', 'Chun', 'Chung', 'Da', 'Deli', 'Deming', 'Dingbang', 'Dong',
	'Duyi', 'Fai', 'Feng', 'Fu', 'Gan', 'Gang', 'Gen', 'Guang', 'Gui', 'Guotin', 'Hai', 'Hao', 'He', 'Heng', 'Hong',
	'Hop', 'Hou', 'Hua', 'Huan', 'Hui', 'Jia', 'Jian', 'Jianyu', 'Jie', 'Jig', 'Jin', 'Jinhai', 'Jun', 'Kang', 'Kong',
	'Kun', 'Kuo', 'Lei', 'Li', 'Li jun', 'Li qiang', 'Li wei', 'Liang', 'Lie jie', 'Ling', 'Liu', 'Lok', 'Manchu',
	'Mingli', 'Mingyu', 'Minsheng', 'Ning', 'On', 'Park', 'Peizhi', 'Ping', 'Qi', 'Qiang', 'Qiao', 'Qing', 'Qiu', 'Qu',
	'Quon', 'Ru', 'Shan', 'Shen', 'Shilin', 'Shing', 'Shoi-ming', 'Shui', 'Song', 'Susu', 'Sying', 'Tai-hua', 'Taio',
	'Tao', 'Tengfei', 'Tu', 'Tung', 'Wang', 'Wang lei', 'Wang wei', 'Wang yong', 'Wei', 'Weiyuan', 'Weizhe', 'Wen',
	'Wenyan', 'Xiang', 'Xin', 'Xing', 'Xue', 'Yang', 'Yanlin', 'Ye', 'Yi', 'Ying', 'Yingjie', 'Yingpei', 'Yong',
	'Yongrui', 'You', 'Yuanjun', 'Zhixin', 'Zhong', 'Zhou', 'Zian', 'Zihao'
];

const lastNames = [
	'王', '李', '张', '刘', '陈', '杨', '黄', '吴', '赵', '周', '徐', '孙', '马', '朱', '胡', '林', '郭', '何', '高', '罗',
	'郑', '梁', '谢', '宋', '唐', '许', '邓', '冯', '韩', '曹', '曾', '彭', '萧', '蔡', '潘', '田', '董', '袁', '于', '余',
	'叶', '蒋', '杜', '苏', '魏', '程', '吕', '丁', '沈', '任', '姚', '卢', '傅', '钟', '姜', '崔', '谭', '廖', '范', '汪',
	'陆', '金', '石', '戴', '贾', '韦', '夏', '邱', '方', '侯', '邹', '熊', '孟', '秦', '白', '江', '阎', '薛', '尹', '段',
	'雷', '黎', '史', '龙', '陶', '贺', '顾', '毛', '郝', '龚', '邵', '万', '钱', '严', '赖', '覃', '洪', '武', '莫', '孔',
	'汤', '向', '常', '温', '康', '施', '文', '牛', '樊', '葛', '邢', '安', '齐', '易', '乔', '伍', '庞', '颜', '倪', '庄',
	'聂', '章', '鲁', '岳', '翟', '殷', '詹', '申', '欧', '耿', '关', '兰', '焦', '俞', '左', '柳', '甘', '祝', '包', '宁',
	'尚', '符', '舒', '阮', '柯', '纪', '梅', '童', '凌', '毕', '单', '季', '裴', '霍', '涂', '成', '苗', '谷', '盛', '曲',
	'翁', '冉', '骆', '蓝', '路', '游', '辛', '靳', '欧阳', '管', '柴', '蒙', '鲍', '华', '喻', '祁', '蒲', '房', '滕', '屈',
	'饶', '解', '牟', '艾', '尤', '阳', '时', '穆', '农', '司', '卓', '古', '吉', '缪', '简', '车', '项', '连', '芦', '麦',
	'褚', '娄', '窦', '戚', '岑', '景', '党', '宫', '费', '卜', '冷', '晏', '席', '卫', '米', '柏', '宗', '瞿', '桂', '全',
	'佟', '应', '臧', '闵', '苟', '邬', '边', '卞', '姬', '师', '和', '仇', '栾', '隋', '商', '刁', '沙', '荣', '巫', '寇',
	'桑', '郎', '甄', '丛', '仲', '虞', '敖', '巩', '明', '佘', '池', '查', '麻', '苑', '迟', '邝', '官', '封', '谈', '匡',
	'鞠', '惠', '荆', '乐', '冀', '郁', '胥', '南', '班', '储', '原', '栗', '燕', '楚', '鄢', '劳', '谌', '奚', '皮', '粟',
	'冼', '蔺', '楼', '盘', '满', '闻', '位', '厉', '伊', '仝', '区', '郜', '海', '阚', '花', '权', '强', '帅', '屠', '豆',
	'朴', '盖', '练', '廉', '禹', '井', '祖', '漆', '巴', '丰', '支', '卿', '国', '狄', '平', '计', '索', '宣', '晋', '相',
	'初', '门', '雲', '容', '敬', '来', '扈', '晁', '芮', '都', '普', '阙', '浦', '戈', '伏', '鹿', '薄', '邸', '雍', '辜',
	'羊', '阿', '乌', '母', '裘', '亓', '修', '邰', '赫', '杭', '况', '那', '宿', '鲜', '印', '逯', '隆', '茹', '诸', '战',
	'慕', '危', '玉', '银', '亢', '嵇', '公', '哈', '湛', '宾', '戎', '勾', '茅', '利', '於', '呼', '居', '揭', '干', '但',
	'尉', '冶', '斯', '元', '束', '檀', '衣', '信', '展', '阴', '昝', '智', '幸', '奉', '植', '衡', '富', '尧', '闭', '由'
];

const namesData: CountryNames = {
	femaleNames,
	maleNames,
	lastNames
};

export default namesData;

