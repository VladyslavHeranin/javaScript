let usedUp = [ 'food','oil','apartment','restoran'];
food = 1300 ;
oil = 250 ;
apartment = 400 ;
restoran = 211.5 ;

let  amountUsedUp = food + oil +  apartment + restoran ;

// console.log( " Вытрати за місяц " +  amountUsedUp +" шекелей") ; 

let income = ['work','freelance',]

work = 1000 ;
freelance = 500 ;

let  amountIncome = work + freelance ;

// console.log(" Дохід за місяц " +  amountIncome +" шекелей")

let amountDifference = amountIncome - amountUsedUp ;
 
// console.log(amountDifference);
if (amountIncome > amountUsedUp)
{console.log('Вітаю ваш баланс плюсовий і дорівноє  '+ amountDifference + ' шекелей');

} else {console.log('Нажаль ваш баланс нижче нуля і дорівноє '+ amountDifference + ' шекелей' );
};
