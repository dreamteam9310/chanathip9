import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRiceComponent } from './edit-rice.component';

describe('EditRiceComponent', () => {
  let component: EditRiceComponent;
  let fixture: ComponentFixture<EditRiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
