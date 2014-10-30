window.com_porotype_webnotifications_WebNotification = function() {
	
	this.requestPermission = function() {
		Notify.requestPermission();
	}
	
	this.show = function(title, message) {
		var n = new Notify(title, {
			body : message
		});
		n.show();
	}
}
