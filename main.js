const squareWidth = 10;
const heightWidth = 10;


function showCalculatedPerimeter(algoritm, width, height, square) {
    console.log("Довжина квадрата = " + width);
    console.log("Ширина квадрата = " + height);
    console.log("Периметер квадрата = " +  square(width, height));
    console.log("Площадь квадрата = " + algoritm(width, height));
  
};
showCalculatedPerimeter(dataСhange, squareWidth, heightWidth,changeSqare);
//пистаи можна код після цього коментарю

function dataСhange(squareWidth, heightWidth) {
    return (squareWidth * heightWidth);
};

function changeSqare(squareWidth, heightWidth) {
    return 2*(squareWidth + heightWidth);
};
