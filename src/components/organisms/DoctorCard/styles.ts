import {ColorsIN} from '@styles/base';
import {StyleSheet} from 'react-native';
import {scaleSize} from '@styles/mixins';

export const getStyles = (colors: ColorsIN) => {
  return StyleSheet.create({
    card: {
      paddingBottom: scaleSize(15),
      borderBottomWidth: 0.5,
      borderBottomColor: colors.FONT_SECOND,
      marginBottom: scaleSize(15)
    },
    image: {
      width: scaleSize(70),
      height: scaleSize(70),
      borderRadius: 8,
      overflow: 'hidden',
      marginRight: scaleSize(13)
    }
  });
};
