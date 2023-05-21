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