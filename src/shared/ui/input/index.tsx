import { JSX, SVGProps, useState } from 'react';
import {
  Input as ChakraInput,
  InputGroup as ChakraInputGroup,
  InputLeftElement as ChakraInputLeftElement,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputIconProps extends ChakraInputProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  widthIcon?: string;
  heightIcon?: string;
  colorIcon?: string;
  colorIconHover?: string;
}

export const Input = ({
  color = 'blue.800',
  borderColor = 'gray.200',
  _placeholder = { color: 'gray.200' },
  _focus = {
    borderColor: 'lightblue.400',
    boxShadow: 'none',
  },
  Icon,
  widthIcon = '20px',
  heightIcon = '20px',
  colorIcon = '#A5B4CB',
  colorIconHover = '#2DB6FF',
  backgroundColor = 'white',
  ...props
}: InputIconProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <ChakraInputGroup
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <ChakraInputLeftElement
        h={'100%'}
        pointerEvents="none" 
        ml={2} 
      >
        <Icon
          stroke={isFocused ? colorIconHover : colorIcon}
          width={widthIcon}
          height={heightIcon}
        />
      </ChakraInputLeftElement>
      <ChakraInput
        backgroundColor={backgroundColor}
        color={color}
        borderColor={borderColor}
        _placeholder={_placeholder}
        _focus={{
          ..._focus,
          borderColor: isFocused ? _focus.borderColor : borderColor,
        }}
        pl={`${parseInt(widthIcon || '20px', 10) + 20}px`} 
        {...props}
      />
    </ChakraInputGroup>
  );
}