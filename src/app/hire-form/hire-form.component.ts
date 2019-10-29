import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

export interface HireData {
  hireCompany: string;
  hireCompanyEmail: string;
  hireStart: Date;
  hireEnd: Date;
  hireMessage: string;
}

@Component({
  selector: 'app-hire-form',
  templateUrl: './hire-form.component.html',
  styleUrls: ['./hire-form.component.scss']
})
export class HireFormComponent implements OnInit {

  public profileName: string;
  public hireForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.hireForm = new FormGroup({
      hireCompany: new FormControl('', Validators.required),
      hireCompanyEmail: new FormControl('', [Validators.required, Validators.email]),
      hireStart: new FormControl('', Validators.required),
      hireEnd: new FormControl('', Validators.required),
      hireMessage: new FormControl(),
    });

    this.getParamsFromUrl();
  }

  getParamsFromUrl(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params) {
        this.profileName = params.firstName + ' ' + params.lastName;
      }

    });
  }

  submitForm(): HireData {
    if (this.hireForm.valid) {
      console.log('sending request...', );
      console.log('formData:', this.hireForm.value);
      return this.hireForm.value as HireData;
    }
  }

}
