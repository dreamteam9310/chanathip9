import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateRiceComponent } from './crate-rice.component';

describe('CrateRiceComponent', () => {
  let component: CrateRiceComponent;
  let fixture: ComponentFixture<CrateRiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrateRiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrateRiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
