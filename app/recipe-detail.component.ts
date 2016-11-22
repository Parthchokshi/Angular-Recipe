/**
 * Created by Parthchokshi on 7/16/2016.
 */
import {Component, OnInit, Input} from "@angular/core";
import {Recipe} from "./recipe";
import {RecipesService} from "./recipes.service";
import {ShoppingListService} from "./shopping-list.service";

@Component({
    selector:"recipe-detail",
    templateUrl: "app/recipe-detail.component.html"
})


export class RecipeDetailComponent implements OnInit {

    @Input() selectedRecipe: Recipe;

    constructor(private recipeService: RecipesService, private slsService: ShoppingListService){}

    ngOnInit(){
      this.recipeService.selectedRecipe.subscribe(
        (recipe:Recipe) => this.selectedRecipe = recipe);
    }

    addToShoppingList(){
      this.slsService.addItems(this.selectedRecipe.ingredients);
      console.log("Add to Shopping List called!");
    }
}

