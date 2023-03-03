import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyButton2Component } from './my-button2.component';

describe('MyButton2Component', () => {
  let component: MyButton2Component;
  let fixture: ComponentFixture<MyButton2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyButton2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyButton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
