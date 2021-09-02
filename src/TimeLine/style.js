import styled from "styled-components";

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColumnContainer = styled.div`
  display: grid;
  margin-top: 100px;
  margin-left: 40px;
  grid-template-columns: 5px 1250px;
  grid-gap: 40px;
  padding: 40px;
  height: 450px;
`;

const TimeLineBar = styled.div`
  background-color: #f2f3f7;
`;

const TimeLineWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 10px;
`;

const TimeLineChild = styled.div`
  text-align: left;
  font-size: 15px;
  background-color: #f2f3f7;
  position: relative;
  height: 200px;

  &::before {
    content: "";
    position: absolute;
    width: 35px;
    height: 35px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 50%;
    z-index: 0;
    left: -60px;
    box-shadow: 0 0 0 5px #f2f3f7;
  }

  &::after {
    content: "";
    height: 0;
    position: absolute;
    top: 12px;
    width: 0;
    z-index: 1;
    left: -10px;
    border: medium solid #f2f3f7;
    border-width: 10px 10px 10px 0;
    border-color: transparent #f2f3f7 transparent transparent;
  }
`;

export {
  TimeLineWrapper,
  ColumnWrapper,
  ColumnContainer,
  TimeLineBar,
  TimeLineChild
};
