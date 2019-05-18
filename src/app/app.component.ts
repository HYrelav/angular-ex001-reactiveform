import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ex001-reactiveform';

  userForm: FormGroup;
  myFirstName: string;

  constructor(private formBuilder: FormBuilder) {};

  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ''
    })
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    console.log(formValue['firstName']);
    this.myFirstName=formValue['firstName'];
  }
}



