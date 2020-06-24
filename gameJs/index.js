let words = ["кино", "рука", "гречка", "стена", "мир", "окно", "деньги", "телефон", "солнце", "патрон"];

let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;

function numDown() {
    let cum = word.length + 4;
    return function () {
        cum--;
        return cum;
    }
}

let pointShow = numDown();

let GameFinsh = numDown();

while (remainingLetters > 0) {

    alert(answerArray.join(" "));

    if (answerArray.join("") === word) {
        alert("Отлично! Было загадано слово : " + word);
        break;
    } if (GameFinsh() === 0) {
        alert('вы проиграли было загадано слово: ' + word);
        break;
    }
    let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры у тебя осталось " + pointShow() + " попыток").toLowerCase();

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                if (answerArray.join("") === answerArray.join("")) {
                    break;
                }
            }
        }
    }
}

