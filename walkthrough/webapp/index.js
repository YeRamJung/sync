// ui component를 사용하는 경우
sap.ui.define(["sap/ui/core/ComponentContainer"], (ComponentContainer) => {
  "use strict";

  new ComponentContainer({
    name: "ui5.walkthrough",
    settings: {
      id: "walkthrough",
    },
    async: true,
  }).placeAt("content");
});

// xml view가 주체가 되어서 content를 입력하는 방식
/* sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], (XMLView) => {
    "use strict";

    XMLView.create({
        viewName : "ui5.walkthrough.view.App"
    }).then((oView) => oView.placeAt("content"));
}); */

/* // data-sap-ui-on-init="module:ui5/walkthrough/index"  의 모듈 정의를 index.js에서 하겠다는 말
sap.ui.define(["sap/m/Text"], (Text) => {
	"use strict";
	// alert("UI5 is ready");     // bootstrapping 확인하기 위함


    // 생성자 메소드로부터 객체 생성
    new Text({
        text : "Hello world" 
    }).placeAt("content");   // 대체하고자 하는 메소드를 삽압해서, 
                             // 화면 요소 중 content라는 아이디를 가진 애가 있다면, 그것의 값을 Hello world로 바꿔줘라
}); */
