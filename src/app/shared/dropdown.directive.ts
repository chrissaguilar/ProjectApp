import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elemRef: ElementRef) { }
    @HostBinding('class.show') isOpen = false;
    @HostListener('click') toggleOpen() {
      this.isOpen = !this.isOpen;
      this.elemRef.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
    }
}


