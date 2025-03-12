sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("sync6.metoring01.controller.View", {
      onInit() {
        // 금액의 단위를 나타내기 위한 모델 정의
        const oViewModel = new JSONModel({
          currency: "KRW",
        });
        this.getView().setModel(oViewModel, "currencyModel");
      },

      // 필터링
      onSearch(oEvent) {
        // step 1. 필터링의 기준을 담을 배열
        const filterArray = [];
        const sQuery = oEvent.getParameter("query");
        filterArray.push(new Filter("name", FilterOperator.Contains, sQuery))  // 필터링의 기준이 되는걸 맨 앞에

        // step 2. 필터 바인딩
        const oList = this.byId("list");
        const oBinding = oList.getBinding("items");
        oBinding.filter(filterArray);
      },
    });
  }
);
