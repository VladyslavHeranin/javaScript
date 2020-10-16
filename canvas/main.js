fetch('https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01').then((res) => res.json().then(function (data) {
    console.log(data)

    var ctx = document.getElementById('myChart').getContext('2d');

    var chart = new Chart(ctx, {

        type: 'bar',

        data: {
            labels: ['SIX MOUNTH', '2018-01-02', '2018-02-02', '2018-03-02'],
            datasets: [{
                label: 'Dolar',
                backgroundColor: 'red',
                borderColor: 'green',
                data: [0, 27, 30, 35]
            }]
        },

        options: {}
    });

    console.log(data.rates['2018-08-02'].USD);

    document.querySelector("#main-heading").innerHTML = data.rates.SEK
}
)
);

// если ключ обекта начинается на букву c и b удалить этот елемента


// let car = {
//     color: 'red',
//     brend: 'nissan',
//     countri: 'UK',
//     price: 12000,
// }

// let newCar = {

// }


// console.log('----')

// let arrCar = Object.keys(car);

// let result = arrCar.filter(function (i) {
//     if (['c', 'b'].includes(i[0])) {
//         return false
//     } else
//         return true
// });

// for (key in car) {
//     if (result === car[key]) {
//          newCar.push(result)
//     }
// }

// console.log(newCar)





















