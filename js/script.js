"use strict";
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const getScheme = localStorage.getItem("colorScheme");
    const moviesList = document.getElementById("movies-list");
    const favoritesList = document.getElementById("favorites-list");

    if (getScheme) {
      applyScheme(getScheme);
      setRadioChecked(getScheme);
    }

    function applyScheme(colorScheme) {
      const body = document.body;
      body.classList.remove(
        "bg-dark",
        "bg-light",
        "text-dark",
        "text-light",
        "bg-warning"
      );
      if (colorScheme === "light") {
        body.classList.add("bg-light", "text-dark");
      } else if (colorScheme === "dark") {
        body.classList.add("bg-dark", "text-light");
      } else if (colorScheme === "sunny") {
        body.classList.add("bg-warning", "text-light");
      }
    }

    const radioBut = document.querySelectorAll("input[type = radio]");
    radioBut.forEach(function (radio) {
      radio.addEventListener("change", function (event) {
        event.preventDefault();
        const selectedScheme = event.target.value;
        applyScheme(selectedScheme);

        localStorage.setItem("colorScheme", selectedScheme);
      });
    });

    function setRadioChecked(colorScheme) {
      const radioBut = document.querySelectorAll("input[type=radio]");
      radioBut.forEach(function (radio) {
        radio.checked = radio.value === colorScheme;
      });
    }

    function isFavoriteMovie(movieName) {
      const favoriteMovies =
        JSON.parse(localStorage.getItem("favoriteMovies")) || [];
      return favoriteMovies.includes(movieName);
    }

    function updateFavoriteButton(button, movieName) {
      button.textContent = isFavoriteMovie(movieName)
        ? "Удалить из избранного"
        : "Добавить в избранное";
    }

    function handleFavoriteButtonClick(event) {
      const button = event.target;
      const movieName = button.previousElementSibling.textContent;
      const favoriteMovies =
        JSON.parse(localStorage.getItem("favoriteMovies")) || [];

      if (isFavoriteMovie(movieName)) {
        const index = favoriteMovies.indexOf(movieName);
        if (index !== -1) {
          favoriteMovies.splice(index, 1);
        }
      } else {
        favoriteMovies.push(movieName);
      }

      localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
      updateFavoritesList();
    }

    function updateFavoritesList() {
      favoritesList.innerHTML = "";
      const favoriteMovies =
        JSON.parse(localStorage.getItem("favoriteMovies")) || [];

      favoriteMovies.forEach(function (movieName) {
        const listItem = document.createElement("li");
        const movieNameSpan = document.createElement("span");
        movieNameSpan.textContent = movieName;
        const favoriteButton = document.createElement("button");
        favoriteButton.classList.add("favorite-button");
        updateFavoriteButton(favoriteButton, movieName);
        favoriteButton.addEventListener("click", handleFavoriteButtonClick);

        listItem.appendChild(movieNameSpan);
        listItem.appendChild(favoriteButton);
        favoritesList.appendChild(listItem);
      });

      const movieItems = moviesList.getElementsByTagName("li");
      Array.from(movieItems).forEach(function (movieItem) {
        const movieName = movieItem.querySelector("span").textContent;
        const favoriteButton = movieItem.querySelector(".favorite-button");
        updateFavoriteButton(favoriteButton, movieName);
      });
    }

    moviesList.addEventListener("click", function (event) {
      if (event.target.matches(".favorite-button")) {
        handleFavoriteButtonClick(event);
      }
    });

    updateFavoritesList();
  });
})();
