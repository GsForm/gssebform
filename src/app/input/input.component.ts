import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputSetting } from '../models/input-setting.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() inputSetting: InputSetting;
  @Input() control: FormControl;

}
