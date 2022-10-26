const getSquareColor = (currentIndex, snakePosition, foodPosition) => {
    if (currentIndex === snakePosition) return "black";
    else if (currentIndex === foodPosition) return "red";
    else return "white";
}; 

export default getSquareColor;