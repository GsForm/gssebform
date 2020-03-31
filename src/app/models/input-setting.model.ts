declare type InputType = 'select' | 'radio';

export type InputSetting = {
  type: InputType;
  values: string[];
  isRequired: boolean;
  controlName: string;
  title: string;
  placeholder?: string;
};
