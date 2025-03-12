/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"sync6/metoring_01/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});