export interface ContainerProps {
  children: any,
  title: string,
  desc: string
}

export interface StepInterface {
  Form: any,
  onSubmit: (value: string) => void,
  title: string,
  desc: string,
}

export interface FormProps {
  onSubmit: (value: string) => void,
}

