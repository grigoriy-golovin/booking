"use strict";

(function () {
	var fieldsets = document.querySelectorAll("fieldset");

	for (var i = 0; i < fieldsets.length; i++) {
		fieldsets[i].setAttribute("disabled", true);
	}
})();
