/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"syncd21/exercise21_05/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});