import styled from "styled-components";

const ColoredSquare = styled.div`
    border: 1px solid gray;
    height: 15px;
    width: 15px;
    background-color: ${props => props.color};
`;

const Square = ({ color }) => {
    return (
      <ColoredSquare color={color} />
    );
  };

export default Square;
