import Express from 'express';
import loginService from '../services/loginService.js';
import ajaxRes from '../object/ajaxResponse.js';
import crypto from 'crypto';

const loginRoutes = Express.Router();

loginRoutes.get('/login', async function(req, res) {
	let ajaxres=new ajaxRes();
        
	if(req.session.sid){
		ajaxres.statusOK();
		res.json(ajaxres);
	} else {
	const result=await loginService.queryUserById(req.query.account);
	if(result.status){
		let md5 = crypto.createHash('md5');
		let digest = md5.update(req.query.password, 'utf8').digest('hex');
		if(result.data.userLogin.hash_pw==digest){
			req.session.regenerate(function(err) {
				req.session.sid =result.data.uuid;
				result.data={};
				res.json(result);
			});
		}else{
			ajaxres.statusFail('wrong password.');
			res.json(ajaxres);
		}
	}
	}
});

loginRoutes.get('/logout', async function(req, res) {
	req.session.destroy(function(err) {
		let ajaxres=new ajaxRes();
        ajaxres.statusOK();
        res.clearCookie('sid');
        res.json(ajaxres);
    });
});

export default loginRoutes;