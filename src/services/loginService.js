import db from '../models/index.js';
import ajaxRes from '../object/ajaxResponse.js';

const loginService ={};

loginService.queryUserById=async function queryUserById(account){
	const data=await db.userInfo.findOne({ where: {account: account},include: [{ model: db.userLogin, as: 'userLogin' }] });
	let ajaxres=new ajaxRes();
	if (data.length === 0) {
		ajaxres.statusFail('no result.');
		return ajaxres;
	}else {
		ajaxres.statusOK();
		ajaxres.data=data;
		return ajaxres;
	}
}

export default loginService;