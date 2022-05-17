import { useEffect, useState } from "react";
import { getChampInfoById } from "../data/api/getChampInfoById";
import { getUserId } from "../data/api/getUserId";
import { useAllChampMastery } from "../hooks/useChampMastery/useAllChampMastery";
import Search from "./Search/Search";

const TestComponent = () => {
  const [search,setSearch] = useState("이킵드");
  const { data, isLoading } = useAllChampMastery(search);
  const champdata = getChampInfoById("99")
  useEffect(() => {
    console.log(data, isLoading);
    console.log(champdata)
  }, [data, isLoading,champdata]);
  return <p>
    <Search setResult={setSearch} />
  </p>;
};
export default TestComponent;
