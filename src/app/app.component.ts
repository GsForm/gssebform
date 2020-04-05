import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { InputSetting } from './models/input-setting.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  agesEnum = {};
  incomeEnum = {};

  inputSettings: InputSetting[] = [
    {
      type: 'select',
      values: [
        { displayVal: '0-17', compareVal: 17 },
        { displayVal: '18-64', compareVal: 64 },
        { displayVal: '65+', compareVal: 65 }
      ],
      controlName: 'age',
      title: 'Your age',
      placeholder: 'Select your age'
    },
    {
      type: 'select',
      values: [
        { displayVal: '0', compareVal: 0 },
        { displayVal: '1-12000', compareVal: 12000 },
        { displayVal: '12001-40000', compareVal: 40000 },
        { displayVal: '40001+', compareVal: 40001 }
      ],
      controlName: 'income',
      title: 'Your income',
      placeholder: 'Select your income'
    },
    {
      type: 'radio',
      values: [
        { displayVal: 'Yes', compareVal: 1 },
        { displayVal: 'No', compareVal: 0 }
      ],
      title: 'Are you a student?',
      controlName: 'student'
    }
  ];

  form: FormGroup = new FormGroup({});
  subscription: Subscription;

  ngOnInit(): void {

    this.makeEnum(this.agesEnum, [
      [17, '0-17'],
      [64, '18-64'],
      [65, '65+']
    ]);

    this.makeEnum(this.incomeEnum, [
      [0, '0'],
      [12000, '1-21000'],
      [40000, '12001-40000'],
      [40001, '40001+']
    ]);

    this.inputSettings.forEach(s => {
      if (s && s.controlName) {
        this.form.addControl(
          s.controlName, new FormControl(null)
        );
      }
    });

    this.subscription = this.form.valueChanges.subscribe(
      (val: {age: string, income: string, student: number}) => {
        if (val.age !== null) {
          if (this.agesEnum[val.age]) {
            this.saveToSession('age', this.agesEnum[val.age]);
          }
        }

        if (val.income !== null) {
          if (this.incomeEnum[val.income]) {
            this.saveToSession('income', this.incomeEnum[val.income]);
          }
        }

        if (val.student !== null) {
          this.saveToSession('student', val.student);
        }
      }
    );

  }

  ngAfterViewInit() {
    const age = sessionStorage.getItem('age');
    const income = sessionStorage.getItem('income');
    const student = sessionStorage.getItem('student');

    if (age !== null) {
      this.form.get('age').setValue(this.agesEnum[age], {emitEvent: false});
    }

    if (income !== null) {
      this.form.get('income').setValue(this.incomeEnum[income], {emitEvent: false});
    }

    if (student !== null && !isNaN(+student)) {
      this.form.get('student').setValue(+student, {emitEvent: false});
    }

    setTimeout(() => {
      this.form.updateValueAndValidity();
    }, 0);

  }

  ngOnDestroy() {
    this.subscription ? this.subscription.unsubscribe() : false;
  }

  saveToSession(key, val) {
    sessionStorage.setItem(key, val);
  }

  makeEnum = (obj, arr) => {
    arr.forEach(a => {
      obj[ obj[a[0]] = a[1] ] = a[0];
    });
  }

}
