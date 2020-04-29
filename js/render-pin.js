"use strict";
var renderPin = function () {
	var mapPin = document
		.querySelector("template")
		.content.querySelector(".map__pin");
	var mapPins = document.querySelector(".map__pins");
	var fragment = document.createDocumentFragment();

	var createMark = function (data) {
		var mark = mapPin.cloneNode(true);
		mark.querySelector("img").src = data.author.avatar;
		mark.querySelector("img").alt = data.offer.title;
		mark.style = `left: ${data.location.x}px; top: ${data.location.y - 30}px;`;
		return mark;
	};

	for (var i = 0; i < advertisements.length; i++) {
		fragment.append(createMark(advertisements[i]));
	}
	mapPins.appendChild(fragment);
};
