import {Ingredient} from "./Ingredient";
/**
 * Created by Parthchokshi on 7/22/2016.
 */

export class ShoppingListService{

  private items: Ingredient[] = [];
  constructor(){}

  getItems(){
    return this.items;
  }

  addItems(items: Ingredient[]){
    Array.prototype.push.apply(this.items, items);
  }
}
