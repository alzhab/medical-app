import {ColorsIN} from '@styles/base';
import {StyleSheet} from 'react-native';
import {scaleSize} from '@styles/mixins';

export const getStyles = (colors: ColorsIN) => {
  return StyleSheet.create({
    detailImage: {
      width: scaleSize(110),
      height: scaleSize(110),
      borderRadius: 8,
      overflow: 'hidden',
      marginRight: scaleSize(19)
    }
  });
};
