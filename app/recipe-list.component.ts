import {OnInit, Component, EventEmitter, Output} from "@angular/core";
import {Recipe} from "./recipe";
import {RecipeItemComponent} from "./recipe-item.component";
import {RecipesService} from "./recipes.service";
/**
 * Created by Parthchokshi on 7/16/2016.
 */

@Component({
    selector:'recipe-list',
    templateUrl:'app/recipe-list.component.html',
    directives:[RecipeItemComponent],
})

export class RecipeListComponent implements OnInit{

    recipes: Recipe[] = [];
    @Output() sendRecipe = new EventEmitter<Recipe>();

    constructor(private recipeService: RecipesService){

    }

    ngOnInit(){
      this.recipes = this.recipeService.getRecipes();
    }

    onSelected(recipe: Recipe){
        this.recipeService.sendRecipeDetail(recipe);
    }
}
