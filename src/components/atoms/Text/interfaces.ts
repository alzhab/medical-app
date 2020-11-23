import {StyleProp} from 'react-native';
import {ColorsIN, TextFamily, TextSize} from '@styles/base';

export enum TextAlign {
  left = 'left',
  center = 'center',
  right = 'right'
}

export interface TextProps {
  children: any,
  styles?: StyleProp<any>,
  size?: TextSize,
  family?: TextFamily,
  color?: string | ColorsIN,
  animated?: boolean,
  numberOfLines?: number,
  textAlign?: TextAlign,
  full?: boolean
}
