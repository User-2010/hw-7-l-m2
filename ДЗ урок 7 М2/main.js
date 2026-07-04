
// обратный отсчет

// let num = Number(prompt("Введите число"));

// while (num >= 1) {
//     console.log(num);
//     num--;
// }

// console.log("Поехали!");



//табл умножения

for (let i = 1; i <= 10; i++) {
    console.log("5 * " + i + " = " + (5 * i));
}



// угадай число

// let secret = 7;
// let guess;

// do {
//     guess = prompt("Угадайте число");

//     if (guess === null) {
//         break;
//     }

//     guess = Number(guess);

// } while (guess !== secret);

// if (guess === secret) {
//     alert("Вы угадали!");
// }



// фильтрация четных строк

// let num = Number(prompt("Введите число"));

// if (num % 2 === 0) {
//     document.write("<h1>Привет, мир!</h1>");
// } else {
//     document.write("<h1>Пока, мир!</h1>");
// }



// калькулятор копилки

let sum = 0;
let num;

while (true) {
    num = prompt("Введите число");

    if (num === null || num === "") {
        break;
    }

    sum += Number(num);
}

alert("Сумма = " + sum);