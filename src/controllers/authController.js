import Express from 'express';
import ajaxRes from '../object/ajaxResponse.js';
import request from 'request';
import config from '../config/config';

const authRoutes = Express.Router();

authRoutes.get('/role/:account', async function(req, res) {
	let ajaxres = new ajaxRes();
	if(! req.session.sid){
		ajaxres.authFail('您沒有此權限，請重新登入。');
		ajaxres.auth = false;
		res.json(ajaxres);
	}
	request.get(config.authServer + "/app/auth/role/" + req.params.account, function(error,response,body) {
		if(error) {
			ajaxres.statusFail('連線失敗，請聯絡管理人員。');
			res.json(ajaxres);
		} else {
			ajaxres = JSON.parse(body);
			ajaxres.authOK();
			res.json(ajaxres);
		}
	});
});

export default authRoutes;