document
  .querySelector(".menu-icon")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.history.back();
  });
