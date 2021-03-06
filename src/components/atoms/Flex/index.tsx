import React, {ReactElement, useRef} from 'react';
import {Animated, LayoutChangeEvent, StyleProp, View} from 'react-native';
import {FlexProps} from './interface';

const Index = (props: FlexProps): ReactElement => {
	const styles: StyleProp<any> = {
		flexDirection: props.dir || 'column',
		alignItems: props.ai || 'flex-start',
		justifyContent: props.jc || 'flex-start',
		flexWrap: props.wrap ? 'wrap' : 'nowrap',
	};
	const ref = useRef<any>(null);
	const Container: any = props.animated ? Animated.View : View;
 
	if (props.size) {
		styles.flex = props.size;
	}

	if (props.full) {
		styles.width = '100%';
	}

	return (
		<Container
			onLayout={(event: LayoutChangeEvent) => {
				if (props.onLayout) {
					props.onLayout(event);
				}
			}}
			ref={props.myRef ? props.myRef : ref}
			style={[props.styles, styles]}>
			{props.children}
		</Container>
	);
};

export default Index;
