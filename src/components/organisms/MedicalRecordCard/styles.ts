import {ColorsIN} from '@styles/base';
import {StyleSheet} from 'react-native';
import {scaleSize} from '@styles/mixins';

export const getStyles = (colors: ColorsIN) => {
  return StyleSheet.create({
    card: {
      paddingBottom: scaleSize(14),
      borderBottomWidth: 0.5,
      borderBottomColor: colors.FONT_SECOND,
      marginBottom: scaleSize(20)
    }
  });
};
