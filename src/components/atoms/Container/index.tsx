import React, {ReactElement} from 'react';
import {Flex} from '@atoms';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';
import {scaleSize} from '@styles/mixins';

const Container = (props: {children: any, top?: number}):ReactElement => {
	return (
		<Flex size={1} full styles={{paddingHorizontal: CONTAINER_HOR_PADDING, marginTop: scaleSize(props.top ? props.top : 0)}}>
			{props.children}
		</Flex>
	);
};

export default Container;
