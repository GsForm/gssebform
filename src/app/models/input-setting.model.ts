declare type InputType = 'select' | 'radio';
export declare type ControlValueObj = {
  displayVal: string,
  compareVal: number
};

export type InputSetting = {
  type: InputType;
  values: ControlValueObj[];
  controlName: string;
  title: string;
  placeholder?: string;
};
