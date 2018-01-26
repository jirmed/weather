sap.ui.define([ "sap/ui/core/mvc/Controller" ], function (Controller) {
    "use strict";

    return Controller.extend("sap.ui.demo.basicTemplate.controller.Detail", {

        onInit : function () {
            this._oRouter = this.getOwnerComponent().getRouter();
            this._oRouter.getRoute("detail").attachPatternMatched(
                    this._onPatternMatched, this);
        },
        onNavBackPress : function () {
            this._oRouter.navTo("master");
        },
        _onPatternMatched : function (oEvent) {
            var oArguments = oEvent.getParameter("arguments");
//            this.getView().bindElement(
//                    "/list/1");
          var oModel = this.getView().getModel();
          var oList = oModel.getProperty('/list');
          if (oList != undefined ) { 
             var iIndex = oList.findIndex(x => x.id == oArguments.CityId);
//          if (oModel != undefined) console.log(oModel.getProperty('/list').filter(x => x.id === oArguments.CityId));
//          console.log("/list/" + iIndex);
          this.getView().bindElement("/list/" + iIndex);
          } 
        }
    });
});