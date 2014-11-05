window.com_porotype_webnotifications_WebNotification = function() {
	
	this.requestPermission = function() {
		Notify.requestPermission();
	}
	
	this.show = function(title, message, iconUrl) {
		var n = new Notify(title, {
			body : message,
			icon : iconUrl
		});
		n.show();
	}
	
}
