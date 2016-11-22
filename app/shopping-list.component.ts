/**
 * Created by Parthchokshi on 7/16/2016.
 */
import {Component, OnInit} from "@angular/core";
import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {Ingredient} from "./Ingredient";
import {ShoppingListService} from "./shopping-list.service";


@Component({
    selector:'shopping-list',
    templateUrl: 'app/shopping-list.component.html',
    directives:[ShoppingListAddComponent]
})

export class ShoppingListComponent implements OnInit{

  items: Ingredient[] = [];
  constructor(private sls: ShoppingListService){}
  ngOnInit(){
    this.items = this.sls.getItems();
  }
}
