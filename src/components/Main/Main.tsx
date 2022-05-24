import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { getPlayerLeague } from "../../data/api/getPlayerLeague";
import { getUserId } from "../../data/api/getUserId";
import { searchResult } from "../../data/modules/recoil/state";
import { S } from "./style";

const Main = () => {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useRecoilState(searchResult);
  const inputRef = useRef<HTMLInputElement>(null);

  const search = async (name: any) => {
    const summonerInfo = await getUserId(name);
    const leagueInfo = getPlayerLeague(summonerInfo.id);
    console.log(1, summonerInfo, leagueInfo);
    const data = {
      name: summonerInfo.name,
      id: summonerInfo.id,
      level: summonerInfo.summonerLevel,
      tier: (await leagueInfo).data[0].tier,
      rank: (await leagueInfo).data[0].rank,
      icon: summonerInfo.profileIconId,
    };
    setResult(data);
    console.log(data);
  };

  useEffect(() => {
    search("hide on bush");
  }, []);

  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      const value = inputRef.current?.value;
      search(inputRef.current?.value);
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
