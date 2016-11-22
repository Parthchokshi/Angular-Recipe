/**
 * Created by Parthchokshi on 7/16/2016.
 */
import {Component, OnInit} from "@angular/core";
import {RecipeListComponent} from "./recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail.component";
import {Recipe} from "./recipe";
import {RecipesService} from "./recipes.service";

@Component({
    selector:"my-recipes",
    templateUrl: 'app/recipes.component.html',
    directives:[RecipeListComponent, RecipeDetailComponent],
    providers:[RecipesService]
})


export class RecipesComponent implements OnInit{

    selectedRecipes:Recipe;

    constructor(){}

    ngOnInit(){}
}
