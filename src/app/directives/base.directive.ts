import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBase]',
})
export class BaseDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('click')
  handleClick() {
    console.log('Click del elemento', this.elementRef.nativeElement);
  }
}
