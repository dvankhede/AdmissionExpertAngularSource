import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotedRoomComponent } from './alloted-room.component';

describe('AllotedRoomComponent', () => {
  let component: AllotedRoomComponent;
  let fixture: ComponentFixture<AllotedRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllotedRoomComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotedRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
