(function(doc, tools) {
	var Tab = function() {
		var oTab = doc.getElementsByClassName('J_tab')[0],
			oPage = doc.getElementsByClassName('page')[0];
		console.log(oTab)
		console.log(oPage);
		this.oNav = doc.getElementsByClassName('nav')[0];
		this.oNavItems = this.oNav.getElementsByClassName('nav-item');
		this.oPageItems = oPage.getElementsByClassName('page-item');
		console.log(this.oPageItems);
		this.curInx = 0;
	}
	console.log(1111)
	Tab.prototype.init = function() {
		this.bindEvent();
	}
	Tab.prototype.bindEvent = function() {
		// 改变bind指向，为了指向实例化对象,(默认指向this.oNav)
		this.oNav.addEventListener('click', this.onNavClick.bind(this), false)
	}
	Tab.prototype.onNavClick = function(ev) {
		var e = ev || window.event,
			tar = e.target || e.srcElement;
		// var tar = tools.getTarget(ev);
		className = tar.className;
		if (className === 'nav-item') {
			// this.oNavItems[this.curInx].className = 'nav-item';
			// this.oPageItems[this.curInx].className = 'page-item';
			this.setCurrent(this.curInx, 'remove');
			this.curInx = [].indexOf.call(this.oNavItems, tar);
			this.setCurrent(this.curInx, 'add');
			// this.oNavItems[this.curInx].className += ' current';
			// this.oPageItems[this.curInx].className += ' current';
		}
	}
	Tab.prototype.setCurrent = function(index, field) {
		switch (field) {
			case 'add':
				this.oNavItems[this.curInx].className += ' current';
				this.oPageItems[this.curInx].className += ' current';
				break;
			case 'remove':
				this.oNavItems[this.curInx].className = 'nav-item';
				this.oPageItems[this.curInx].className = 'page-item';
			default:
				break;
		}
	}
	window.Tab = Tab;

})(document, initToolModuls)