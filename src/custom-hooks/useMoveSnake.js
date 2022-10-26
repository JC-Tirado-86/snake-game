import { useEffect, useState } from "react";
import getRandomInt from "../utils/getRandomInt";
import useEventListener from "./useEventListener";

const useMoveSnake = (snakeInitialValue = 0, foodInitialValue = 399) => {
  const [snakePosition, setSnakePosition] = useState(snakeInitialValue);
  const [foodPosition, setFoodPosition] = useState(foodInitialValue);  

  useEffect(() => {
    if (snakePosition === foodPosition) {
      setFoodPosition(getRandomInt(400));
    }
  }, [snakePosition, foodPosition]);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowRight":
        setSnakePosition((prevPosition) => {
          const remainder = (prevPosition + 1) % 20;
          if (remainder !== 0) return prevPosition + 1;

          return prevPosition;
        });
        break;
      case "ArrowLeft":
        setSnakePosition((prevPosition) => {
          const remainder = prevPosition % 20;
          if (remainder !== 0) return prevPosition - 1;

          return prevPosition;
        });
        break;
      case "ArrowDown":
        setSnakePosition((prevPosition) => {
          const newPosition = prevPosition + 20;
          if (newPosition <= 399) return newPosition;

          return prevPosition;
        });
        break;
      case "ArrowUp":
        setSnakePosition((prevPosition) => {
          const newPosition = prevPosition - 20;
          if (newPosition >= 0) return prevPosition - 20;

          return prevPosition;
        });
        break;
      default:
        break;
    }
  };

  useEventListener(window, 'keydown', handleKeyDown);

  return [snakePosition, foodPosition];
};

export default useMoveSnake;
