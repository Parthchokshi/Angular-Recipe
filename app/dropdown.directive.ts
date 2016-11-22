/**
 * Created by Parthchokshi on 7/20/2016.
 */
import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[rbDropdown]',
})

export class DropdownDirective{

  private isOpen = false;

  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }

  @HostListener('click') open(){
    this.isOpen = true;
  }
  @HostListener('mouseleave') close(){
    this.isOpen = false;
  }

}
