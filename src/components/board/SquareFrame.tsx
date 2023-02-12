import { ReactNode } from 'react'
import { ConnectSquare } from '../../types'
import { Box } from '@chakra-ui/react'

export function SquareFrame({ square, children }: { square: ConnectSquare; children?: ReactNode }) {
  return (
    <Box
      id={square.location}
      key={square.location}
      position='relative'
      overflow="hidden"
      border="1px solid"
      borderColor="black.900"
    >
      <Box
        boxSize={{ min0: '3.25rem', min400: '5rem', min600: '6rem', min1920: '8rem' }}
        sx={{
          '&': {
            marginInlineStart: '0px',
            WebkitMarginStart: '0px !important',
          },
          '&:before': {
            border: '4px solid',
            borderColor: square.connected
              ? {
                min0: 'gold.500-active',
                min400: 'gold.500-active',
                min600: 'gold.500-active',
                min1000: 'gold.500-active',
                min1920: 'gold.500-active',
              }
              : {
                min0: 'gold.500',
                min400: 'gold.500',
                min600: 'gold.500',
                min1000: 'gold.500',
                min1920: 'gold.500',
              },
            boxSize: '100%',
            content: '""',
            position: 'absolute',
          },
          '&:after': {
            boxShadow: '0px 0px 0px 50px #fabd2eff',
            borderRadius: '75%',
            boxSize: '80%',
            content: '""',
            left: '50%',
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
