import { useEffect } from "react";
import { useChampMastery } from "../hooks/useChampMastery";

const TestComponent = () => {
  const [selector, getbyid] = useChampMastery();

  useEffect(() => {
    console.log(selector, getbyid("이킵드"));
  }, []);

  return <></>;
};
export default TestComponent;
