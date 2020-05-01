"use strict";

(function () {
	var pin = document.querySelector(".map__pin--main");

	var renderAddress = function () {
		var HALF_PIN_WIDTH = 32;
		var PIN_HEIGHT = 84;

		var fieldAddress = document.querySelector("#address");
		fieldAddress.value = `${pin.offsetLeft + HALF_PIN_WIDTH}, ${
			pin.offsetTop + PIN_HEIGHT
		}`;
	};

	pin.addEventListener("mouseup", renderAddress);
})();
