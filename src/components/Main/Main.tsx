import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { searchResult } from "../../data/modules/recoil/state";
import { searchUser } from "../../utils/searchUser";
import { S } from "./style";

const Main = () => {
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useRecoilState(searchResult);
  const inputRef = useRef<HTMLInputElement>(null);

  const onKeyPress = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && result.name !== inputRef.current?.value) {
      const searchresult = await searchUser(inputRef.current?.value);
      setResult(searchresult);
    }
  };

  return (
    <S.TotalWrapper>
      <S.CenterWrapper>
        <S.Title>소환사 정보 검색</S.Title>
        <S.SearchWrapper>
          <input type="text" ref={inputRef} onKeyDown={onKeyPress} />
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
            alt=""
          />
        </S.SearchWrapper>
      </S.CenterWrapper>
    </S.TotalWrapper>
  );
};

export default Main;
