import {LayoutChangeEvent, StyleProp, ViewStyle} from 'react-native';
import {Refs} from 'pretty-format';
import {RefObject} from 'react';

export enum JC {
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
  center = 'center',
  spaceBetween = 'space-between',
  spaceAround = 'space-around',
  spaceEvenly = 'space-evenly',
}

export enum AI {
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
  center = 'center',
  spaceBetween = 'space-between',
  spaceAround = 'space-around',
  spaceEvenly = 'space-evenly',
  stretch = 'stretch'
}

export interface FlexProps {
  size?: number,
  children?: any,
  styles?: StyleProp<ViewStyle> | StyleProp<any> ,
  dir?: 'column' | 'row',
  wrap?: boolean
  jc?: JC,
  ai?: AI,
  full?: boolean,
  animated?: boolean,
  reanimated?: boolean,
  myRef?: RefObject<any>,
  onLayout?: (event: LayoutChangeEvent) => void
}
