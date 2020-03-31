import { Component, OnInit } from '@angular/core';
import { InputSetting } from './models/input-setting.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  inputSettings: InputSetting[] = [
    {
      type: 'select',
      values: ['0-17', '18-64', '65+'],
      isRequired: true,
      controlName: 'age',
      title: 'Your age',
      placeholder: 'Select your age'
    },
    {
      type: 'select',
      values: ['0', '1-12000', '12001-40000', '40001+'],
      isRequired: true,
      controlName: 'income',
      title: 'Your income',
      placeholder: 'Select your income'
    },
    {
      type: 'radio',
      values: ['Yes', 'No'],
      isRequired: true,
      title: 'Are you a student?',
      controlName: 'student'
    }
  ];

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({});

    this.inputSettings.forEach(s => {
      if (s && s.controlName) {
        this.form.addControl(
          s.controlName, new FormControl(null, Validators.required)
        );
      }
    });
  }
}
