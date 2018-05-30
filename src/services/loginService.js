import db from '../models/index.js';

const loginService ={};

loginService.queryUserById=function queryUserById(account){
		const data=db.userInfo.findOne({ where: {account: account} });
		if (data.length === 0) {
				return {
					result:false,
					data:null
				};
			}else {
				return  {
					result:false,
					data:data
				};
			}
	}

export default loginService;