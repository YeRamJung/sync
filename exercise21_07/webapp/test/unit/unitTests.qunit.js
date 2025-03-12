/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sync6/exercise21_07/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
