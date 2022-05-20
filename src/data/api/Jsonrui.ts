
const GetChampData = (champName: string) =>
  `/cdn/12.9.1/data/ko_KR/champion/${champName}.json`;


export const jsonuri = {
    get_champ_data : GetChampData
}