"use strict";
(function () {
	var mapPin = document
		.querySelector("template")
		.content.querySelector(".map__pin");

	var createMark = function (data) {
		var mark = mapPin.cloneNode(true);
		mark.querySelector("img").src = data.author.avatar;
		mark.querySelector("img").alt = data.offer.title;
		mark.style = `left: ${data.location.x}px; top: ${
			data.location.y - 30
		}px;`;
		mark.addEventListener("click", function() {window.pinClickHandler(data)});
		return mark;
	};

	var renderPin = function () {
		var mapPins = document.querySelector(".map__pins");
		var fragment = document.createDocumentFragment();
		for (var i = 0; i < advertisements.length; i++) {
			fragment.append(createMark(advertisements[i]));
		}
		mapPins.appendChild(fragment);
	};

	var pinMain = document.querySelector(".map__pin--main");
	pinMain.addEventListener("mouseup", renderPin);
})();
