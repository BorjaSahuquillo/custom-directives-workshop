import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  title: string = 'Parent title';

  ngOnInit(): void {}

  testingTitle() {
    console.log('Title: ', this.title);
  }
}
