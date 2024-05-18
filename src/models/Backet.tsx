import { title } from "process"
// import { IItem } from "../components/Main/MenuItemList"
import { data } from "../services/data"
interface IMenuProps extends IItem{
    fetchMenu: (perPage: number, page: number, setTotalPage: (value: number) => void, setItemList: (value: IItem[]) => void, itemList: IItem[]) => void

}

export interface IItem {
    id?: string
    email?: string
    first_name?: string
    last_name?: string
    avatar?: string
    count?: number
  }


export interface ILocalData {
   
    id: number
    name: string
    category: string
    price: number
    describe: string
    image: string
}
  

interface IDataProps extends ILocalData{
    // fetchLocalData: (item: IItem) => void мой варик
    fetchLocalData: () => ILocalData[];
}

export default class MenuItems implements IMenuProps {

    id?: string ;
    email?: string;
    first_name?: string;
    last_name?: string;
    avatar?: string;
    count?: number;

    fetchMenu(perPage: number, page: number, setTotalPage: (value: number) => void, setItemList: (value: IItem[]) => void, itemList: IItem[]) {
        fetch(`https://reqres.in/api/users?per_page=${perPage}&page=${page}`)
            .then((response) => response.json())
            .then((res) => {
                console.log(res.total_page)
                setTotalPage(res.total_page)
                setItemList([...itemList, ...res.data])
            });
    }
}


export class DataMenuItems  implements IDataProps {
    id!: number
    name!: string
    category!: string
    price!: number
    describe!: string
    image!: string

    fetchLocalData() : ILocalData[]{
        return data.map((item:ILocalData) => ({
            id: item.id,
            name: item.name,
            category: item.category,
            price: item.price,
            describe: item.describe,
            image: item.image,
        }));
    }

}


