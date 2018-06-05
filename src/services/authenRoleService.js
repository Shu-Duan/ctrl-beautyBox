import ajaxRes from '../object/ajaxResponse.js';

const authenRoleService = {};

authenRoleService.authenRole = function authenRole(req, res) {
	let ajaxres = new ajaxRes();
	if(! req.session.role) {
		ajaxres.statusFail('無此權限');
		res.json(ajaxres);
	}
}

export default authenRoleService;