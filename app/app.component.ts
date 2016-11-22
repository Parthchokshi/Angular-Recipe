import { Component } from '@angular/core';
import {RecipeBookComponent} from "./recipe-book.component";

@Component({
    selector: 'my-app',
    template: '<recipe-book></recipe-book>',
    directives:[RecipeBookComponent]

})
export class AppComponent { }
