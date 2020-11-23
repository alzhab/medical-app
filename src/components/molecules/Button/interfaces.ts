import {StyleProp} from 'react-native';
import {TextFamily, TextSize} from '@styles/base';

export enum ButtonTypes {
  PRIMARY = 'PRIMARY',
  BORDERED = 'BORDERED',
  UNPRESSED = 'UNPRESSED',
  EMPTY = 'EMPTY',
  DISABLED = 'DISABLED',
}

export interface ButtonProps {
  title?: string,
  full?: boolean,
  size?: TextSize,
  family?: TextFamily,
  type?: ButtonTypes,
  styles?: StyleProp<any>,
  click: () => void,
  children?: any,
  solid?: boolean,
  color?: string,
  empty?: boolean
}

export interface ButtonStylesInterface {
  width?: string,
  backgroundColor?: string,
  borderRadius: number,
  borderWidth?: number,
  borderColor?: string,
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
  alignItems?: 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly',
}
