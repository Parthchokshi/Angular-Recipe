import { bootstrap }    from '@angular/platform-browser-dynamic';

import {disableDeprecatedForms, provideForms} from "@angular/forms";

import { AppComponent } from './app.component';
import {ShoppingListService} from "./shopping-list.service";

bootstrap(AppComponent, [ShoppingListService, disableDeprecatedForms(), provideForms()]);
