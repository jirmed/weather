sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.Master", {

		onInit: function () {
//		    var oModel = new JSONModel();
//		    oModel.loadData("../weather");
//		    console.log(oModel);
//		    this.getView().setModel(oModel);
		},
		onItemPress: function(oEvent) {
            var oContext = oEvent.getSource().getBindingContext();
//            console.log(oContext);
            var sCityId = oContext.getObject().id;
//            console.log(sCityId);
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("detail", {
                CityId: sCityId
            });		}
	});
});