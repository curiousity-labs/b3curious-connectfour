import baseStyle from './button.base'
import variants from './button.variants'
import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    size: 'base',
    variant: 'primary',
  },
});

export default Button