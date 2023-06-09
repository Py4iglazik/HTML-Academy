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

//Восьмая программа.
let getPrice = function(time, isProjectStrict) {
  
  let rate = 1500;
  
    if (isProjectStrict) {
    time /= 2;
    rate *= 2.5;
    }
    if (time > 150) {
    rate -= 250;
    }
  
  let price = time * rate;
  
  return price;
};

//Девятая программа.
let playerOne = {
  name: "Ilia",
  goals: 10,
  passes: 10
};

let playerTwo = {
  name: "Bob", 
  goals: 40, 
  passes: 5
};

let listOfPlayers = [playerOne, playerTwo];

let getStatistics = function (players) {

  let goals = 0;
  for (let i = 0; i < players.length; i++) {
      goals += players[i].goals;
  }

  for (let j = 0; j < players.length; j++) {
      let percent = Math.round((players[j].goals/goals)*100);
      let coefficient = players[j].goals * 2 + players[j].passes;

      listOfPlayers[j].coefficient = coefficient;
      listOfPlayers[j].percent = percent;

  }

  return players;

};

console.log(getStatistics(listOfPlayers));

//Десятая программа.
let materialPrice = {
  'wood': 1000,
  'stone': 1500,
  'brick': 2000
};

  let house = {

    rooms: 10,
    floors: 5,
    material: 'wood',
    coefficient: 10.5,

    calculateSquare: function() {
    let square = this.rooms * this.coefficient * this.floors;
    return square
    },
  
    calculatePrice: function() {
    let price = this.calculateSquare() * materialPrice[this.material];
    return price
    }
  }

//Одиннадцатая программа.
var assortmentData = [
  {
    inStock: true,
    isHit: false
  },
  {
    inStock: false,
    isHit: false
  },
  {
    inStock: true,
    isHit: true
  },
  {
    inStock: true,
    isHit: false
  },
  {
    inStock: false,
    isHit: false
  }
];

var updateCards = function(iceCreams) {

    var creams = document.querySelectorAll('.good');

    for (var i = 0; i < creams.length; i++) {

    var cream = creams[i];
    var iceCream = iceCreams[i];
    var notInStock = 'good--available';

    if (!iceCream.inStock) {
       notInStock = 'good--unavailable';
    }

    cream.classList.add(notInStock);
    if (iceCream.isHit) {
      cream.classList.add('good--hit');
    }
    
  }
}
updateCards(assortmentData);