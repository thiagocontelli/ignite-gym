import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
	title: string;
};

export function Button({ title, ...props }: Props) {
	return (
		<NativeBaseButton
			bg='green.700'
			w='full'
			h={14}
			rounded='sm'
			_pressed={{
				bg: 'green.500',
			}}
			{...props}
		>
			<Text
				fontFamily='heading'
				color='white'
				fontSize='sm'
			>
				{title}
			</Text>
		</NativeBaseButton>
	);
}
