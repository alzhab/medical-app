import React, {ReactElement, useContext} from 'react';
import {Star, StarOutline} from '@icons';
import {Flex, Text} from '@atoms';
import {TextSize, ThemeContext} from '@styles/base';
import {AI} from '@components/atoms/Flex/interface';

const Rating = (props: { rating: 0 | 1 | 2 | 3 | 4 | 5, count?: number, size?: number, textSize?: TextSize}): ReactElement => {
  const {colors} = useContext(ThemeContext);
  const size = props.size || 1;
  const textSize = props.textSize ? props.textSize : TextSize.small
  
  return (
    <Flex dir={'row'} ai={AI.center}>
      {
        Array(5).fill('').map((_, index) => {
          const Icon = props.rating >= index + 1 ? Star : StarOutline;
          
          return (
            <Flex key={index} styles={{marginRight: 3}}>
              <Icon scale={size} color={colors.STAR_COLOR}/>
            </Flex>
          );
        })
      }
      
      {props.count ? <Text styles={{marginLeft: 10}} color={colors.FONT_SECOND} size={textSize}>({props.count})</Text> : null}
    </Flex>
  );
};

export default Rating;
