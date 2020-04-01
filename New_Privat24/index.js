let usedUp = [ 300,250,400,211];

let amountUsedUp = 0 ;

for (let i = 0 ; i < usedUp.length; i++)  {
     amountUsedUp = amountUsedUp + (usedUp[i]);
}
// console.log (amountUsedUp)
let income = [1000,500]

let amountIncome = 0 ;

for (let i = 0 ; i < income.length; i++)  {
    amountIncome = amountIncome + (income[i]);
}
console.log (amountIncome)

let amountDifference = amountIncome - amountUsedUp ;
 
// console.log(amountDifference);
if (amountIncome > amountUsedUp)
{console.log('Вітаю ваш баланс плюсовий і дорівноє  '+ amountDifference + ' шекелей');

} else {console.log('Нажаль ваш баланс нижче нуля і дорівноє '+ amountDifference + ' шекелей' );
};
