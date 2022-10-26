import styled from "styled-components";
import useMoveSnake from "../custom-hooks/useMoveSnake";
import getSquareColor from "../utils/getSquareColor";
import Square from "./Square";

const GameBoard = styled.div`
  height: 340px;
  width: 340px;
  display: flex;
  flex-wrap: wrap;
`;

const Board = () => {
  const arraySize = 400;
  const board = Array(arraySize).fill(null);
  const [snakePosition, foodPosition] = useMoveSnake();

  return (
    <GameBoard>
      {board.map((item, index) => {
        return (
          <Square
            key={index}
            color={getSquareColor(index, snakePosition, foodPosition)}
          />
        );
      })}
    </GameBoard>
  );
};

export default Board;
