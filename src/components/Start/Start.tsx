import { Logo } from "../../assets";
import { S } from "./style";

const Start = () => {
  return (
    <S.TotalWrapper>
      <S.Logo>
        <img src={Logo} alt="" />
      </S.Logo>
    </S.TotalWrapper>
  );
};

export default Start;
