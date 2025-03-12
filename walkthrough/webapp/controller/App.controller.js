sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    //  "sap/ui/model/json/JSONModel",
    //  "sap/ui/model/resource/ResourceModel"
  ],
  (Controller, MessageToast, JSONModel, ResourceModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
      /*       onInit() {
         // set data model on view
         const oData = {
            recipient : {
               name : "World"
            }
         };
         const oModel = new JSONModel(oData);
         this.getView().setModel(oModel);


         // set i18n model on view
         const i18nModel = new ResourceModel({
            bundleName: "ui5.walkthrough.i18n.i18n"  // 리소스 모델의 대상 데이터에 경로 안내 (파일 로드)
         });    
         this.getView().setModel(i18nModel, "i18n");
      }, */
      /* onShowHello() {
        // show a native JavaScript alert
        // alert("Hello World");
        // MessageToast.show("hello world from message toast");   // ui5에 존재하는 모듈을 쓰는 것! 그래서 위에서 선언부 필요

        // read msg from i18n model
        // i18n 모델 가져오기
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        console.log("1차");
        // 기본 json 모델에서 /recipient/name 의 값을 가져온다
        const sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");

        // i18n 모델에서 선택된 리소스 번들의 값(텍스트 형태임)과 기본 모델에서의 name 값 조합
        const sMsg = oBundle.getText("helloMsg", [sRecipient]);

        // show message
        MessageToast.show(sMsg); // 리소스 모델에 바인딩하여 표현하기 - sMsg를 가져와서 return하기
      }, */
    });
  }
);
