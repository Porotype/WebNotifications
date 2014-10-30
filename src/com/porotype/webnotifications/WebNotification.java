package com.porotype.webnotifications;

import com.vaadin.annotations.JavaScript;
import com.vaadin.server.AbstractJavaScriptExtension;
import com.vaadin.ui.UI;

@JavaScript({"notify.js", "webnotifications-connector.js"})
public class WebNotification extends AbstractJavaScriptExtension {

	public WebNotification(UI ui) {
		extend(ui);
	}
	
	public void requestPermission() {
		callFunction("requestPermission");
	}
	
	public void show(String title, String body) {
		callFunction("show", title, body);
	}

}
