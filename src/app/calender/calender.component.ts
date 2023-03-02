import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorFn, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      myDate: new FormControl('', [Validators.required, this.futureDateValidator()])
    });
  }
  futureDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const currentDate = new Date();
      const inputDate = new Date(control.value);
  
      if (inputDate > currentDate) {
        return { 'futureDate': true };
      }
      
      return null;
    };
   
}
onSubmit() {
  // handle form submission
}
}
