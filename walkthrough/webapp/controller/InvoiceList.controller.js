sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
      onInit() {
        // 뷰 모델 생성 (currecny 정보 담고 있음)
        const oViewModel = new JSONModel({
          currency: "EUR",
        });

        this.getView().setModel(oViewModel, "view");
      },

      // search field의 돋보기를 눌렀을 때 발생하는 이벤트 : 필터링 기준대로 데이터 바인딩함
      onFilterInvoices(oEvent) {
        // step 1. 필터링된 애들을 배열에 담기 - 꼭 배열 객체에다가 기준 담을 것
        const aFilter = [];
        const sQuery = oEvent.getParameter("query"); // 입력된 값임. 이거를 배열에 담는다
        if (sQuery) {
          aFilter.push(
            new Filter("ProductName", FilterOperator.Contains, sQuery)
          );
        }

        // step2 .필터링된 기준대로 이제 데이터 바인딩해오자
        const oList = this.byId("invoiceList"); //아이디를 통해 대상 list 가져오기 (여기에 있는 데이터를 필터링할거야)
        const oBinding = oList.getBinding("items"); // 가져온 list에 있는 item 항목들 불러오기 (각 아이템에 바인딩)
        oBinding.filter(aFilter); // 배열에 담긴 필터링된 "ProductName"을 가지고, 불러온 item 항목들 걸러주기
      },
    });
  }
);
