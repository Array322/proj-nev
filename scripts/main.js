const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  const button = card.querySelector(".card__button");
  const reservedBlock = card.querySelector(".card__reserved");
  const reservedBackground = card.querySelector(".card__reserved-wrap");
  const contentSecond = card.querySelector(".card__content-second");
  const guaranteeBlock = card.querySelector(".card__guarantee");
  button.addEventListener("click", () => {
    card.classList.add("reserved");
  });
  card.addEventListener("mouseleave", () => {
    if (card.classList.contains("reserved")) {
      contentSecond.classList.add("hidden");
      if (contentSecond.classList.contains("hidden")) {
        guaranteeBlock.classList.add("hidden");
      }
      reservedBlock.classList.remove("hidden");
      reservedBackground.classList.remove("hidden");
    }

    reservedBackground.addEventListener("click", function () {
      if (card.classList.contains("reserved")) {
        contentSecond.classList.remove("hidden");
        if (
          !contentSecond.classList.contains("hidden") &&
          !guaranteeBlock.classList.contains("invalid")
        ) {
          guaranteeBlock.classList.remove("hidden");
        }
        reservedBlock.classList.add("hidden");
        reservedBackground.classList.add("hidden");
        card.classList.remove("reserved");
      }
    });

    reservedBlock.addEventListener("click", function () {
      reservedBlock
        .querySelector(".card__reserved-text-accent")
        .addEventListener("click", function (event) {
          event.stopPropagation();
        });
      if (card.classList.contains("reserved")) {
        contentSecond.classList.remove("hidden");
        if (
          !contentSecond.classList.contains("hidden") &&
          !guaranteeBlock.classList.contains("invalid")
        ) {
          guaranteeBlock.classList.remove("hidden");
        }
        reservedBlock.classList.add("hidden");
        reservedBackground.classList.add("hidden");
        card.classList.remove("reserved");
      }
    });
  });
});
