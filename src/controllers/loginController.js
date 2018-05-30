import Express from 'express';
import loginService from '../services/loginService.js';

const loginRoutes = Express.Router();

loginRoutes.get('/login', async function(req, res) {
	if(req.session.sid){
		res.json({
			result: true
		});
	} else {
	const result=await loginService.queryUserById(req.query.account);
	if(result.result){
		console.log(result);
		if(result.data.userLogin.hash_pw==req.query.password){
			req.session.regenerate(function(err) {
				req.session.sid =result.data.uuid;
				result.data={};
				res.json(result);
			});
		}else{
			res.json({
			result: false
		});
		}
	}
	}
});

loginRoutes.get('/logout', async function(req, res) {
	req.session.destroy(function(err) {
        res.clearCookie('sid');
        res.json({
			result: true
		});
    });
});

export default loginRoutes;