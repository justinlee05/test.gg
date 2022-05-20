import { DataApiRequest } from "./default";
import { jsonuri } from "./Jsonrui";

export const getChampData = async (champName: string) => {
/*   const res = await DataApiRequest().get(jsonuri.get_champ_data(champName));
 */
    const res = await DataApiRequest().get(jsonuri.get_champ_data(champName));
console.log(res)
};
