import styled from "styled-components";
const Container = styled.div`
  display: flex;
  max-width: 380px;
  flex-direction: column;
  height: 430px;
  min-width: 280px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;
const Img = styled.img`
  min-height: 220px;
  max-height: 220px;
  width: 100%;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-top: 1px solid #e6e9ec;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;
Info.Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export { Container, Img, InfoWrapper, Info };
