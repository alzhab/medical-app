import React, {ReactElement, useContext} from 'react';
import {TextInput} from 'react-native';
import {AI, JC} from '@components/atoms/Flex/interface';
import {boxShadow, scaleSize} from '@styles/mixins';
import {TextSize, ThemeContext} from '@styles/base';
import {Flex} from '@atoms';
import {Search} from '@icons';
import {Props} from './interfaces';

const SearchInput = (props: Props): ReactElement => {
  const {colors} = useContext(ThemeContext);
  
  return (
    <Flex
      full
      dir={'row'}
      jc={JC.spaceBetween}
      ai={AI.center}
      styles={{
        ...boxShadow(),
        borderRadius: 10,
        paddingVertical: scaleSize(10),
        paddingHorizontal: scaleSize(15),
        backgroundColor: colors.SECOND_BG
      }}>
      <TextInput
        value={props.value}
        placeholder={'Search'}
        style={{
          fontSize: TextSize.xlarge,
          width: '90%'
        }}
        onChangeText={(value: string) => props.onChange(value)}
      />
      <Search scale={1.5}/>
    </Flex>
  );
};

export default SearchInput;
