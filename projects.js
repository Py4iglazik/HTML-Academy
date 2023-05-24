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

//Четвёртая программа.
let initialWeight = 6000; // Исходный вес в граммах
let targetWeight = 5000; // Желанный вес в граммах
let days = 0;

while (initialWeight > targetWeight) {
  let oneDayLose = initialWeight/100*5;
  initialWeight -= oneDayLose;
  days++;
};

console.log(days);

//Пятая программа.
// Алфавит
let symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 
               'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 
               'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// Закодированное сообщение
let encodedSymbols = [18, 38, 46, 62, 66, 50, 33, 41, 66, 49, 48, 38, 58, 62, 68, 66, 48, 37, 42, 47, 66, 50, 33, 41, 66, 49, 48, 51, 49, 42, 67];

// Раскодированное сообщение
let array = [];

for (let i = 0; i < encodedSymbols.length; i++) {
  array[i] = symbols[encodedSymbols[i]];
}

let decodedMessage = array.join("");

console.log(decodedMessage);

//Шестая программа.
let qualificationDistance = 200;
let attempts = [120, 150, 160, 201, 203, 180, 202];
let qualified = false;
let averageBest = 0;

//Сортируем массив.
for (let i = 0; i < attempts.length; i++) {
  let minValue = attempts[i];
  for (let j = i + 1; j < attempts.length; j++) {
    if (minValue > attempts[j]) {
      minValue = attempts[j];
      let swap = attempts[i];
      attempts[i] = minValue;
      attempts[j] = swap;
    }
  }
}
console.log(attempts);

//Находим среднее значение из 3-х лучших.
let sumBest = 0;
for (let k = attempts.length - 3; k < attempts.length; k++) {
  sumBest += attempts[k];
}
averageBest = sumBest/3;
console.log(averageBest);

//Сравниваем 
if (averageBest > qualificationDistance) {
  qualified = true;
} else {
  qualified = false;
}
console.log(qualified);

//Седьмая программа.
let percent;
let calculateSalary = function (dirtySalary) {
  if (dirtySalary >= 100000) {
    percent = 0.45;
  } else {
    percent = 0.35;
  }
  return dirtySalary - (dirtySalary*percent);
};