import { DataApiRequest } from "./default";
import { jsonuri } from "./Jsonrui";

//개별 챔피언의 정보를 가져오는 함수입니다.

export const getChampData = async (champName: string) => {
/*   const res = await DataApiRequest().get(jsonuri.get_champ_data(champName));
 */
    const res = await DataApiRequest().get(jsonuri.get_champ_data(champName));
console.log(res)
};
