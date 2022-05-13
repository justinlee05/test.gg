import { useEffect, useState } from "react";
import { getUserId } from "../data/api/getUserId";
import { useChampMastery } from "../hooks/useChampMastery";

const TestComponent = () => {
  const champState = useChampMastery();
  const [data, setData] = useState();

  useEffect(() => {
    console.log(champState.state);
    champState.setState.getList("이킵드");

    setTimeout(() => {
      console.log(champState.state)
    }, 3000);
  }, []);

  return <></>;
};
export default TestComponent;
