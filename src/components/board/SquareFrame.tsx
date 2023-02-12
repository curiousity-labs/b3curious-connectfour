import { ReactNode } from 'react'
import { ConnectSquare } from '../../types'
import { Box } from '@chakra-ui/react'

export function SquareFrame({ square, children }: { square: ConnectSquare; children?: ReactNode }) {
  return (
    <Box
      id={square.location}
      key={square.location}
      position='relative'
    >
      <Box
        boxSize={{ min0: '3.25rem', min400: '5rem', min600: '6rem', min1920: '8rem' }}
        sx={{
          '&': {
            marginInlineStart: '0px',
            WebkitMarginStart: '0px !important',
          },
          '&:before': {
            border: {
              min0: '6px solid',
              min400: '8px solid',
              min600: '12px solid',
              min1920: '16px solid',
            },
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
            boxShadow: {
              min0: '0px 0px 0px 8px #fabd2eff, 0px 0px 1px 2px inset #000000',
              min400: '0px 0px 0px 12px #fabd2eff, 0px 0px 1px 2px inset #000000',
              min600: '0px 0px 0px 12px #fabd2eff, 0px 0px 1px 4px inset #000000',
              min1920: '0px 0px 0px 16px #fabd2eff, 0px 0px 1px 6px inset #000000',
            },
            borderRadius: '100%',
            boxSize: '83%',
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
