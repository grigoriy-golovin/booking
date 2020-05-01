"use strict";

(function () {
	window.pinClickHandler = function (data) {
		window.renderCard(data);
		var openCard = document.querySelector(".map__card");

		var closeClickHendler = function () {
			openCard.remove();
		};

		openCard.querySelector(".popup__close").addEventListener("click", closeClickHendler);
	};
})();
