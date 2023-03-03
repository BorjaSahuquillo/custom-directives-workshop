import { Directive, Host, HostBinding, Input } from '@angular/core';
import { timer } from 'rxjs';
import { ParentComponent } from '../parent/parent.component';

@Directive({
  selector: '[appParentModify]',
  exportAs: 'appParentModify',
})
export class ParentModifyDirective {
  constructor(@Host() private parent: ParentComponent) {
    timer(1000).subscribe(() => {
      this.parent.title = 'appParentModify';
    });
  }

  @Input('appParentModify')
  @HostBinding('class.modify-parent-directive')
  modifyClass = false;
}
