function cutFruitPieces(fruit){
    return fruit*4;
}
function fruitProcessor(apples,oranges){
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);
    const juice=`Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges`;
    return juice;
}
console.log(fruitProcessor(2,3));
// return statement immediately exits from the function the statement wrote after return does not work