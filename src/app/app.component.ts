import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ParentModifyDirective } from './directives/parent-modify.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'custom-directives';

  @ViewChild('MyDirective') myDirective!: ParentModifyDirective;

  ngAfterViewInit(): void {
    console.log(this.myDirective);
  }
}
