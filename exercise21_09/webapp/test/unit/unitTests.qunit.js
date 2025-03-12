/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"sync6/exercise21_09/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});