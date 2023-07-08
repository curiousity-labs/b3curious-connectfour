import { defineStyle } from '@chakra-ui/react';

const primaryDisabled = {
  bg: 'platinum.500',
  color: 'platinum.700',
}
const primaryLoading = {} // loading === disabled

const primary = defineStyle({
  bg: 'primary-light',
  color: 'baby-powder.500',
  _hover: {
    bg: 'lumen-blue.500-hover',
    _disabled: {
      ...primaryDisabled,
      _loading: primaryLoading
    },
  },
  _disabled: {
    ...primaryDisabled,
    _loading: primaryLoading
  },
  _active: {
    bg: 'lumen-blue.500-active',
  },
  _focus: {
    bg: 'lumen-blue.500-active',
  }
})


const secondaryDisabled = {
  bg: 'transparent',
  borderColor: 'platinum.700',
  color: 'platinum.700',
}

const secondaryLoading = {
  // @todo add loading state
}

const secondary = defineStyle({
  bg: 'transparent',
  color: '#cetacean-blue.500',
  border: '1px solid',
  borderColor: 'cetacean-blue.500',
  _hover: {
    bg: 'transparent',
    borderColor: 'cetacean-blue.500-hover',
    color: 'cetacean-blue.500-hover',
    _disabled: {
      ...secondaryDisabled,
      _loading: secondaryLoading
    },
  },
  _disabled: {
    ...secondaryDisabled,
    _loading: secondaryLoading
  },
  _active: {
    borderColor: 'cetacean-blue.500-active',
    bg: 'transparent',
    color: 'cetacean-blue.500-active',
  },
  _focus: {
    borderColor: 'cetacean-blue.500-active',
    bg: 'transparent',
    color: 'cetacean-blue.500-active',
  }
})


const buttonVariants = {
  primary,
  secondary,
}

export default buttonVariants