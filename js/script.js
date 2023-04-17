"use strict";
const bYear = prompt("Какой Ваш год рождения?");
if (bYear) {
  const curCity = prompt("В каком городе Вы живете?");
  if (curCity) {
    const favSport = prompt("Какой Ваш любимый вид спорта?");
    let message = null;
    if (favSport) {
      switch (curCity) {
        case "Киев":
          message = "Ты живешь в столице Украины";
          break;
        case "Москва":
          message = "Ты живешь в столице России";
          break;
        case "Минск":
          message = "Ты живешь в столице Беларуси";
          break;
        default:
          message = "Ты живешь в городе " + curCity;
          break;
      }
      let champName;
      switch (favSport) {
        case "Футбол":
          champName = "Лионель Месси";
          break;
        case "Теннис":
          champName = "Новак Джокович";
          break;
        case "Баскетбол":
          champName = "Леброн Джеймс";
          break;
        default:
          champName = "чемпионы в " + favSport;
          break;
      }
      if (champName) {
        const newMes = `Твой год рождения: ${bYear}. ${message}. Круто! Хочешь стать как ${champName}`;
        alert(newMes);
      }
    } else {
      alert("Жаль, что Вы не захотели ввести свой вид спорта");
    }
  } else {
    alert("Жаль, что Вы не захотели ввести свой город");
  }
} else {
  alert("Жаль, что Вы не захотели ввести свой год рождения");
}
