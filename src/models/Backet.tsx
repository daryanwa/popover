import { title } from "process"
// import { IItem } from "../components/Main/MenuItemList"

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


class DataMenuItems extends MenuItems {



}


