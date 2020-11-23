import React, {ReactElement, useState} from 'react';
import FastImage, {Source} from 'react-native-fast-image';
import {StyleSheet} from 'react-native';
import {AI, JC} from '@components/atoms/Flex/interface';
import {Flex, Spinner} from '@atoms';

const Image = (props: {
  style?: any,
  source: Source | number, resizeMode?:
    'contain' |
    'cover' |
    'stretch' |
    'center'
}): ReactElement => {
	const [loadStart, setLoadStart] = useState(false);
 
	return (
		<>
			<FastImage
				onLoadStart={() => setLoadStart(true)}
				onLoadEnd={() => setLoadStart(false)}
				style={props.style}
				source={props.source}
				resizeMode={FastImage.resizeMode[props.resizeMode || 'cover']}
			>
				<Flex ai={AI.center}
					jc={JC.center}
					styles={[StyleSheet.absoluteFill]}>
					<Spinner hide={!loadStart}/>
				</Flex>
			</FastImage>
		</>
	);
};

export default Image;
