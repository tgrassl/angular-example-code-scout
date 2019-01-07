import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireFormComponent } from './hire-form.component';

describe('HireFormComponent', () => {
  let component: HireFormComponent;
  let fixture: ComponentFixture<HireFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
