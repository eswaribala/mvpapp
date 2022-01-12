import {Injectable} from "@angular/core";
import {menuData} from "../models/menudata";


@Injectable()
export class MenuService
{

      getMenuData()
      {
        return menuData;
      }


}
