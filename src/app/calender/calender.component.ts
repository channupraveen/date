import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
  dateRangeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.dateRangeForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    }, {validator: this.dateRangeValidator});
  }
  
  dateRangeValidator(formGroup: FormGroup) {
    const startDate = formGroup.get('startDate')?.value;
    const endDate = formGroup.get('endDate')?.value;
    if (startDate && endDate) {
      if (new Date(endDate) < new Date(startDate)) {
        return { dateRangeError: 'End date must not be less than start date' };
      }
      if (new Date(startDate) > new Date()) {
        return { dateRangeError: 'Start date must be a past date' };
      }
    }
    return null;
  }
  onSubmit() {
    // Handle form submission here
    console.log('Form submitted');
  }
}
