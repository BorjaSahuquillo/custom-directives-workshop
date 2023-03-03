import { Directive, Inject, OnInit, Optional } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Directive({
  selector: '[appCardParentHandler]',
})
export class CardParentHandlerDirective implements OnInit {
  constructor(
    @Optional() @Inject(ParentComponent) private myParent: ParentComponent
  ) {}

  ngOnInit(): void {
    this.myParent.testingTitle();
  }
}
