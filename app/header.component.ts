/**
 * Created by Parthchokshi on 7/16/2016.
 */
import {Component, OnInit} from "@angular/core";
import {DropdownDirective} from "./dropdown.directive";

@Component({
    selector:"rb-header",
    templateUrl: 'app/header.component.html',
    directives:[DropdownDirective]
})

export class HeaderComponent implements OnInit{

    constructor(){}

    ngOnInit() {}

}
