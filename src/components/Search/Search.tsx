import { SetStateAction, SyntheticEvent, useRef, useState } from "react";
import { useAllChampMastery } from "../../hooks/useChampMastery/useAllChampMastery";
import { S } from "./style";

type Props = {
  setResult: React.Dispatch<SetStateAction<string>>;
};

const Search = ({ setResult }: Props) => {
  const [info, setInfo] = useState("이킵드");
  const inputref = useRef<HTMLInputElement>(null);
  const onSearch = () => {
  };
  const onChange = (e: any) => {
    console.log(e.target.value);
    setInfo(e.target.value);
  };
  return (
    <>
      <S.TotalWrapper>
        <S.InputBox
          ref={inputref}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </S.TotalWrapper>
      <button onClick={()=>onSearch()}>검색</button>
    </>
  );
};

export default Search;
