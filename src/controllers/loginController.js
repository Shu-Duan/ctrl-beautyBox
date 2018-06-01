import Express from 'express';
import loginService from '../services/loginService.js';
import ajaxRes from '../object/ajaxResponse.js';
import crypto from 'crypto';

const loginRoutes = Express.Router();

loginRoutes.get('/login/:account', async function(req, res) {
	let ajaxres = new ajaxRes();
	if(req.session.sid) {
		ajaxres.statusOK();
		ajaxres.authOK();
		res.json(ajaxres);
	} else {
		const result = await loginService.queryUserById(req.params.account);
		if(result.status) {
			let md5 = crypto.createHash('md5');
			let digest = md5.update(req.query.password, 'utf8').digest('hex');
			if(result.data.userLogin.hash_pw == digest){
				req.session.regenerate(function(err) {
					req.session.sid = result.data.uuid;
					result.data = {};
					ajaxres = result;
					ajaxres.authOK();
					res.json(ajaxres);
				});
			} else {
				ajaxres.statusFail('密碼錯誤，請重新輸入。');
				res.json(ajaxres);
			}
		}
	}
});

loginRoutes.get('/logout', async function(req, res) {
	req.session.destroy(function(err) {
		let ajaxres=new ajaxRes();
		ajaxres.authFail('登出成功。');
		res.clearCookie('sid');
		res.json(ajaxres);
	});
});

export default loginRoutes;