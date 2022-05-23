import champ from '../../utils/champion.json'

//이름,스토리 등의 대략적인 정보를 가져오는 함수입니다.

export const getChampInfoById = (ChampionId:string) => {
    const list:any = champ.data;
    const keys = Object.keys(list);
    for(let i=0;i<keys.length;i++){
        const key = keys[i]
        if(list[key].key === ChampionId){
            return list[key]
        }
    }
}