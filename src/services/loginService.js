import db from '../models/index.js';
import ajaxRes from '../object/ajaxResponse.js';

const loginService = {};

loginService.queryUserById = function queryUserById(account) {
	return db.userInfo.findOne({
		where : {
			account: account
		},
		include : [
			{
				model : db.userLogin,
				as: 'userLogin'
			}
		]
	});
	
}

export default loginService;