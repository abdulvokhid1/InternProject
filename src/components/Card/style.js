import styled from "styled-components";
import bed from "../../assets/icons/bed.svg";
import bath from "../../assets/icons/bath.svg";
import garage from "../../assets/icons/garage.svg";
import resize from "../../assets/icons/resize.svg";
import ruler from "../../assets/icons/ruler.svg";
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
const Icons = styled.div``;
const Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)`
  cursor: pointer;
`;
export { Container, Img, InfoWrapper, Info, Icons, Bed };
