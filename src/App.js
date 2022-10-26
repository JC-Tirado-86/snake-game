import "./App.css";
import Board from "./components/Board";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <BoardContainer>
        <div>
          <h1>Snake game</h1>
          <Board />
        </div>
      </BoardContainer>
    </AppContainer>
  );
}

export default App;
