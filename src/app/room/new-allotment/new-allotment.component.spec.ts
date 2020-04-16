import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAllotmentComponent } from './new-allotment.component';

describe('NewAllotmentComponent', () => {
  let component: NewAllotmentComponent;
  let fixture: ComponentFixture<NewAllotmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewAllotmentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
