class Oauth {
	constructor({
		matches = {},
		onReject = () => null,
		defaultOauthPaths = []
	}) {
		this.matches = matches || {};
		this.onReject = onReject || function() {};
		this.defaultOauthPaths = defaultOauthPaths || [];
	}
	init(menuKeys = [], buttonResKey = []) {
		this.menuKeys = menuKeys || []; 
		this.buttonResKey = buttonResKey || [];
		this.authPaths = [].concat(this.defaultOauthPaths);
		this.menuKeys.forEach(key => {
			const path = this.matches[key];
			if (path) {
				this.authPaths = this.authPaths.concat(path);
			}
		})
		return this;
	}
	filterMenus(menus = []) {
		return menus.filter(menu => this.authPaths.some(path => path === "*" || path === menu.path || (path && path.test && path.test(menu.path))));
	}
	isOauthByPath(path = "") {
		return Array.isArray(this.authPaths) ? this.authPaths.some(p => p === "*" || path === p || (p && p.test && p.test(path))) : true;
	}
	firewall(path = "") {
		if (!path || !this.isOauthByPath(path)) {
			return this.onReject(path);
		} else {
			return true;
		}
	}
	hasButton(key) {
		return Array.isArray(this.buttonResKey) ? this.buttonResKey.some(item => item === key) : false;
	}
}

export default Oauth