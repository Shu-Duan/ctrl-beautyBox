import Express from 'express';
import ajaxRes from '../object/ajaxResponse.js';
import request from 'request';
import config from '../config/config';
import authenRoleService from '../services/authenRoleService.js';

const authRoutes = Express.Router();

authRoutes.get('/role/:account', function(req, res) {
	authenRoleService.authenRole(req, res);
	let ajaxres = new ajaxRes();
	if(! req.session.sid){
		ajaxres.authFail('您沒有此權限，請重新登入。');
		res.json(ajaxres);
	} else {
		request.get(config.authServer + "/app/auth/role/" + req.params.account, function(error, response, body) {
			if(error) {
				ajaxres.statusFail('連線失敗，請聯絡管理人員。');
				res.json(ajaxres);
			} else {
				ajaxres = JSON.parse(body);
				ajaxres.auth = true;
				res.json(ajaxres);
			}
		});
	}
});

export default authRoutes;