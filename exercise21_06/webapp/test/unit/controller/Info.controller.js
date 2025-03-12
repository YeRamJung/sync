/*global QUnit*/

sap.ui.define([
	"syncd21/exercise21_06/controller/Info.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Info Controller");

	QUnit.test("I should test the Info controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
