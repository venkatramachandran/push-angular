angular.module('push-angular', [])
.service('Push', function(){
	var push = {};

	push.create = function(title, options){
		return Push.create(title, options);
	};

	push.close = function(tag) {
		Push.close(tag);
	};

	push.clear = function() {
		Push.clear();
	};

	push.isSupported = Push.isSupported;

	return push;
});