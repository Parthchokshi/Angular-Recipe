//Created by Parthchokshi on 7/16/2016.
import {OnInit, Component} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {RecipesComponent} from "./recipes.component";
import {ShoppingListComponent} from "./shopping-list.component";
import {RecipesService} from "./recipes.service";

@Component({
    selector:"recipe-book",
    templateUrl: "app/recipe-book.component.html",
    directives:[HeaderComponent, RecipesComponent, ShoppingListComponent],
    providers: [RecipesService]
})


export class RecipeBookComponent implements OnInit{

    constructor(){}

    ngOnInit(){}
}
