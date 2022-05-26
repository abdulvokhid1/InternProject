import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  /* display: flex; */
  /* max-width: 1440px;
  flex-wrap: wrap;
  gap: 20px;  */
  display: grid;
  max-width: var(--width);
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  padding: 0 130px;
`;
const Total = styled.div`
  max-width: 1440px;
  margin: 70px 0 16px 0;
  width: 100%;
  text-align: start;
  padding: 0 130px;
`;
export { Container, Total, Wrapper };
