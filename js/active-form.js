"use strict";

(function () {
	var pinMain = document.querySelector(".map__pin--main");
	pinMain.addEventListener("mouseup", function (evt) {
		var fieldsets = document.querySelectorAll("fieldset");
		for (var i = 0; i < fieldsets.length; i++) {
			fieldsets[i].removeAttribute("disabled");
		}

		var map = document.querySelector(".map");
		map.classList.remove("map--faded");

		var form = document.querySelector(".notice__form");
		form.classList.remove("notice__form--disabled");
	});
})();
