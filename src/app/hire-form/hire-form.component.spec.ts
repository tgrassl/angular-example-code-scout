import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireData, HireFormComponent } from './hire-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('HireFormComponent', () => {
  let component: HireFormComponent;
  let fixture: ComponentFixture<HireFormComponent>;
  let activeRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ HireFormComponent ],
      providers: [ {
        provide: ActivatedRoute,
        useValue: {
          queryParams: of({ firstName: 'Anna', lastName: 'Baldowic' }),
        },
      }],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireFormComponent);
    component = fixture.componentInstance;
    activeRoute = TestBed.get(ActivatedRoute);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', () => {
    expect(component.hireForm.valid).toBeFalsy();
  });

  it('form should be invalid if hire start date is empty', () => {
    const hireDurationControl = component.hireForm.controls['hireStart'];
    hireDurationControl.setValue('');
    expect(component.hireForm.valid).toBeFalsy();
    expect(component.hireForm.controls['hireStart'].valid).toBeFalsy();
  });

  it('form should not submit if form is empty', () => {
    expect(component.hireForm.valid).toBeFalsy();
    const request = component.submitForm();
    console.log(request);
    expect(request).toBeUndefined();
  });

  it('form should return Hire object on submit', () => {
    const mockData: HireData = {
      hireCompany: 'Interhyp',
      hireCompanyEmail: 'info@interhyp.de',
      hireStart: new Date('2019-01-12'),
      hireEnd: new Date('2019-05-05'),
      hireMessage: '',
    };
    component.hireForm.controls['hireCompany'].setValue('Interhyp');
    component.hireForm.controls['hireCompanyEmail'].setValue('info@interhyp.de');
    component.hireForm.controls['hireStart'].setValue(new Date('2019-01-12'));
    component.hireForm.controls['hireEnd'].setValue(new Date('2019-05-05'));
    component.hireForm.controls['hireMessage'].setValue('');
    expect(component.hireForm.valid).toBeTruthy();

    const requestData = component.submitForm();
    expect(mockData).toEqual(requestData);
  });

  it('should set profileName based on RouteParams', () => {
    expect(fixture.debugElement.query(By.css('b')).nativeElement.innerText).toEqual('Anna Baldowic');
  });
});
