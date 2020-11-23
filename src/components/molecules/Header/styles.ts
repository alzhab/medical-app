import {ColorsIN} from '@styles/base';
import {StyleProp, StyleSheet} from 'react-native';
import {boxShadow, scaleSize} from '@styles/mixins';
import {CONTAINER_HOR_PADDING, CONTAINER_VER_PADDING} from '@styles/spacing';

export const getStyles = (colors: ColorsIN): StyleProp<any> => {
  return StyleSheet.create({
    header: {
      paddingTop: CONTAINER_VER_PADDING,
      paddingHorizontal: CONTAINER_HOR_PADDING,
      ...boxShadow()
    },
    notContainer: {
      position: 'relative'
    },
    notNum: {
      position: 'absolute',
      zIndex: 2,
      top: 0,
      left: 0,
      width: scaleSize(22),
      height: scaleSize(22),
      transform: [{translateX: -scaleSize(22) / 2}, {translateY: -scaleSize(22) / 2}],
      backgroundColor: colors.PRIMARY,
      borderRadius: scaleSize(22)
    }
  });
};
