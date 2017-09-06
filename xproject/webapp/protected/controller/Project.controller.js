sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("xproject.controller.Project", {
		
		onInit : function () {
			// set data model on view
			var oModel = new sap.ui.model.json.JSONModel();
			// load data from URL
			oModel.loadData("/api/projects");
			this.getView().setModel(oModel);
		}		
	});
});