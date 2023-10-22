let minValue = parseInt(prompt('Минимальное знание числа для игры', '-999'));
console.log(minValue)

let maxValue = parseInt(prompt('Максимальное знание числа для игры', '999'));
console.log(maxValue)

if (minValue > maxValue) {
  const temp = minValue;
  minValue = maxValue;
  maxValue = temp;
}

if (isNaN(minValue) || minValue ==="" ){
  isNaN(minValue);
  console.log(minValue)
  minValue = Number("1");
}

if (isNaN(maxValue) || maxValue ==="" ){
  console.log(maxValue)
  maxValue = Number("100");
}

if (isNaN(minValue) || minValue === "") {
  minValue = -999;
}

if (isNaN(maxValue) || maxValue === "") {
  maxValue = 999;
}

if (maxValue > 999 || minValue < -999 || maxValue < -999 || minValue > 999) {
  minValue = -999;
  maxValue = 999;
  alert(`Загадайте любое целое число от -999 до 999, а я его угадаю`);
} else {
  alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
}

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

 document.getElementById('btnRetry').addEventListener('click', function () {
       minValue = 0;
        maxValue = 100;
        orderNumber = 0;
        location.reload();
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue) {
            const phraseRandom = Math.round( Math.random());
            console.log(phraseRandom)
            /*const answerPhrase = (phraseRandom === 1) ?
                `Это явно обман!\n\u{1F914}` :
                `Как же так!?\n\u{1F914}`;*/
                switch (phraseRandom) {
                    case 0:
                        answerPhrase = `Как же так\n\u{1F605}`;
                        break;
                    case 1:
                        answerPhrase = `Это нереально\n\u{1F610}`;
                        break;
                    case 2:
                        answerPhrase = `Невероятное число\n\u{1F613}`;
                        break;
                
                }
                
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber +1;
            console.log(minValue)
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            console.log(answerNumber)
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число  ${numberToPhrase(answerNumber)}?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue -1){
            const phraseRandom = Math.round( Math.random()*2);
            console.log(phraseRandom)
            /*const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;*/
                switch (phraseRandom) {
                    case 0:
                        answerPhrase = `Как же так\n\u{1F605}`;
                        break;
                    case 1:
                        answerPhrase = `Это нереально\n\u{1F610}`;
                        break;
                    case 2:
                        answerPhrase = `Невероятное число\n\u{1F613}`;
                        break;
                
                }
            
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  -1;
            console.log(maxValue)
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            console.log(answerNumber)
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${numberToPhrase(answerNumber)}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
       // answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        
        switch (phraseRandom) {
            case 0:
                answerField.innerText = `Это было легко\n\u{1F60E}`;
                break;
            case 1:
                answerField.innerText = `Еще бы я не отгадал\n\u{1F605}`;
                break;
            case 2:
                answerField.innerText = `Можно было и посложнее\n\u{1F601}`;
                break;
        
        }
        gameRun = false;
    }
})

//массив-заготовка для отображенимя чисел прописью
const names = new Array();
names[0] = "ноль";
names[1] = "один";
names[2] = "два";
names[3] = "три";
names[4] = "четыре";
names[5] = "пять";
names[6] = "шесть";
names[7] = "семь";
names[8] = "восемь";
names[9] = "девять";
names[10] = "десять";
names[11] = "одиннадцать";
names[12] = "двенадцать";
names[13] = "тринадцать";
names[14] = "четырнадцать";
names[15] = "пятнадцать";
names[16] = "шестнадцать";
names[17] = "семнадцать";
names[18] = "восемнадцать";
names[19] = "девятнадцать";
names[20] = "двадцать";
names[30] = "тридцать";
names[40] = "сорок";
names[50] = "пятьдесят";
names[60] = "шестьдесят";
names[70] = "семьдесят";
names[80] = "восемьдесят";
names[90] = "девяносто";
names[100] = "сто";
names[200] = "двести";
names[300] = "триста";
names[400] = "четыреста";
names[500] = "пятьсот";
names[600] = "шестьсот";
names[700] = "семьсот";
names[800] = "восемьсот";
names[900] = "девятьсот";

// функция преобразовывает цифровое число в число прописью
function numberToPhrase(number) {
  let result = "";
  let residue = 0; // остаток
  let digit = 0; // разряд (10, 100)
  
  // обработка чисел от 0 до 20
  if (number >= 0 && number <= 20) {
    result = names[number];
    console.log(result)
  }
  // для отрицательных
  else if (number < 0 && number >= -20) {
    result = "минус " + names[Math.abs(number)];
  }
  // ...
  // обработка чисел от 21 до 99
  else if (number > 20 && number < 100) {
    residue = number % 10;
    if (residue === 0) {
      result = names[number];
    } else {
      digit = number - residue;
      result = names[digit] + " " + names[residue];
    }
  }
  // для отрицательных
  else if (number < -20 && number > -100) {
    residue = Math.abs(number) % 10;
    if (residue === 0) {
      result = "минус " + names[Math.abs(number)];
    } else {
      digit = Math.abs(number) - residue;
      result = "минус " + names[digit] + " " + names[residue];
      console.log(result);
    }
  }
  // ...
  // обработка числа от 100 до 999
  else if (number >= 100 && number < 1000) {
    residue = number % 100;
    digit = number - residue;
    if (residue === 0) {
      result = names[digit];
    } else if (residue % 10 === 0) {
      result = names[digit] + " " + names[residue];
    } else if (residue > 0 && residue <= 20) {
      result = names[digit] + " " + names[residue];
    } else {
      result = names[digit] + " ";
      digit = residue - (residue % 10);
      result += names[digit] + " " + names[residue % 10];
    }
  }
  // для отрицательных
  else if (number <= -100 && number > -1000) {
    residue = Math.abs(number) % 100;
    digit = Math.abs(number) - residue;
    if (residue === 0) {
      result = "минус " + names[digit];
    } else if (residue % 10 === 0) {
      result = "минус " + names[digit] + " " + names[residue];
    } else if (residue > 0 && residue <= 20) {
      result = "минус " + names[digit] + " " + names[residue];
    } else {
      result = "минус " + names[digit] + " ";
      digit = residue - (residue % 10);
      result += names[digit] + " " + names[residue % 10];
    }
  }
  // ...
  return result;
}
// ...