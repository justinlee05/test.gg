import { useEffect, useState } from "react";
import { getUserId } from "../data/api/getUserId";
import { useAllChampMastery } from "../hooks/useChampMastery/useAllChampMastery";

const TestComponent = () => {
  const { data, isLoading } = useAllChampMastery();

  useEffect(() => {
    console.log(data, isLoading);
  }, [data, isLoading]);
  return <p>
  </p>;
};
export default TestComponent;
