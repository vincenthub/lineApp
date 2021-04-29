import * as React from 'react'
import { ValidationRules, FieldError } from 'react-hook-form/dist/types'

export type ValidationMap = {
  [key: string]: ValidationRules;
}

export type ErrorMap = {
  [key: string]: FieldError;
}

export type FormFieldOptions = {
  name: string;
}

export type RegisterFormFieldType = (
  fieldOptions: FormFieldOptions,
  validation?: ValidationRules
) => void

export type FormFieldProps = {
  control: any;
  name: string;
  rules: any[];
  label?: string;
  error?: FieldError;
  onPressInfo: any;
}

export type FormVerifyFieldProps = {
  codeLength: number;
  autoFocus: boolean;
}

export type FormProps = {
  children: React.ReactElement | React.ReactElement[];
  register: RegisterFormFieldType;
  errors: ErrorMap;
  validation: ValidationMap;
  control: any;
}

export type FormError = {
  type: string;
  message: string;
}

export type FormErrors<T> = {
  [string]: FormError;
}
