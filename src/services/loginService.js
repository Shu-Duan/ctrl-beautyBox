import db from '../models/index.js';

const loginService ={};

loginService.queryUserById=async function queryUserById(account){
		const data=await db.userInfo.findOne({ where: {account: account} });
		if (data.length === 0) {
				return {
					result:false
				};
			}else {
				return  {
					result:true,
					data:data
				};
			}
	}

export default loginService;