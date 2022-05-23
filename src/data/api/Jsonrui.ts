//ddragon에 요청을 보내기 위해 사용하는 uri파일입니다.
const GetChampData = (champName: string) =>
  `/cdn/12.9.1/data/ko_KR/champion/${champName}.json`;

export const jsonuri = {
  get_champ_data: GetChampData,
};
