"use strict";
(function () {
	var mapPin = document
		.querySelector("template")
		.content.querySelector(".map__pin");

	var onLoad = function (data) {
		window.advertisements = data;
		var mapPins = document.querySelector(".map__pins");
		var fragment = document.createDocumentFragment();
		for (var i = 0; i < window.advertisements.length; i++) {
			fragment.append(createMark(window.advertisements[i]));
		}
		mapPins.append(fragment);
		pinMain.removeEventListener("mouseup", renderPin);
	};

	var onError = function (message) {
		console.error(message);
	};

	var createMark = function (data) {
		var mark = mapPin.cloneNode(true);
		mark.querySelector("img").src = data.author.avatar;
		mark.querySelector("img").alt = data.offer.title;
		mark.style = `left: ${data.location.x}px; top: ${data.location.y - 30}px;`;
		mark.addEventListener("click", function () {
			window.pinClickHandler(data);
		});
		return mark;
	};

	var renderPin = function () {
		window.download(
			"https://javascript.pages.academy/keksobooking/data",
			onLoad,
			onError
		);


	};

	var pinMain = document.querySelector(".map__pin--main");
	pinMain.addEventListener("mouseup", renderPin);
})();
