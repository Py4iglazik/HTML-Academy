// Курс «Погружение в программирование на JavaScript»

//Первая программа.
let timeInMinutes = 180;
let jumps = (timeInMinutes/10)*3;
let message = "За "  + timeInMinutes + " минут в соцсетях полагается " + jumps + " прыжков.";
console.log(message);

//Вторая программа.
let temperature = 20;
let isRaining = true;
let minutes = 0;

if (isRaining) {
  minutes = 0;
} else if  (temperature >= 10 && temperature < 15) {
    minutes = 30;
  } else if (temperature >= 15 && temperature < 25) {
    minutes = 40;
  } else if (temperature >= 25 && temperature <= 35) {
    minutes = 20;
  } else {
    minutes = 0;
  }
console.log(minutes);

//Третья программа.
let days = 9; // Дней в периоде
let evenDayAmount = 200; // Количество протеина в чётные дни
let oddDayAmount = 100; // Количество протеина в нечётные дни
let total = 0; // Общее количество протеина

for (let i = 1; i <= days; i++) {
  if (i % 2 == true) {
    total += oddDayAmount;
  } else if (i % 2 == false) {
    total += evenDayAmount;
  }
}
console.log(total);