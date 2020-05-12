"use strict";
(function () {
	var mapPin = document
		.querySelector("template")
		.content.querySelector(".map__pin");

	var onLoad = function (data) {
		window.notice = data;
		window.renderPin(window.notice);
	};

	var onError = function (message) {
		console.error(message);
	};

	window.renderPin = function (arr) {
		var mapPins = document.querySelector(".map__pins");
		var fragment = document.createDocumentFragment();
		var limitLength = 5;
		if (arr.length < 5) {
			limitLength = arr.length;
		}
		for (var i = 0; i < limitLength; i++) {
			fragment.append(createMark(arr[i]));
		}
		mapPins.append(fragment);
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

	var pinMainUpHandler = function () {
		window.download(
			"https://javascript.pages.academy/keksobooking/data",
			onLoad,
			onError
		);
		pinMain.removeEventListener("mouseup", pinMainUpHandler);
	};

	var pinMain = document.querySelector(".map__pin--main");
	pinMain.addEventListener("mouseup", pinMainUpHandler);
})();
