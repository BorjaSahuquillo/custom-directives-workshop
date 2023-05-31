import { Directive, Inject, OnInit, Optional } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Directive({
  selector: '[appCardParentHandler]',
})
export class CardParentHandlerDirective implements OnInit {
  constructor(
    @Optional() @Inject(ParentComponent) private myParent: ParentComponent
  ) {}

  ngOnInit(): void {
    console.log('TESTING APP CARD PARENT HANDLER')
    this.myParent.testingTitle();

    setTimeout(() => {

      console.log('TESTING APP CARD PARENT HANDLER')
      this.myParent.testingTitle();

    }, 2000);}
}
