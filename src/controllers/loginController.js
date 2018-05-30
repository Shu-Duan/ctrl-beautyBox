import Express from 'express';
import loginService from '../services/loginService.js';

const app = new Express();
const boxRoutes = Express.Router();

boxRoutes.get('/queryUserById', function(req, res) {
	
	const data=loginService.queryUserById(req.query.account);
	console.log('res:'+data);
	/*if(data.length>0){
		//auth
		req.session.loginUser = 'req.query.account';
	}*/
	res.json(data);
});

export default boxRoutes;