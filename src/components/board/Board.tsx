import { Flex, Box } from '@chakra-ui/react'
import { SquareFrame } from './SquareFrame'
import { SquareCenter } from './SquareCenter'
import { useStore } from '../../provider/store/StoreProvider'
import { useParams } from 'react-router-dom'
import { useConnectFourGame } from '../../hooks/connectFour/useConnectFourGame'
import { useDetectWinningPieces } from '../../hooks/connectFour/useDetectWinningPieces'
import { useMemo } from 'react'

export function Board() {
  const {
    currentSeason: { currentGame },
  } = useStore()

  const { gameId } = useParams()
  useConnectFourGame({ gameId })

  const { connectedPieces } = useDetectWinningPieces()

  const currentBoard = useMemo(() => {
    if (!currentGame) {
      return []
    }
    const { board } = currentGame
    if (!connectedPieces.length) {
      return board
    }

    const updatedBoard = board.map((row) =>
      row.map((square) => {
        if (connectedPieces.includes(square.location)) {
          return { ...square, connected: true }
        }
        return square
      }),
    )
    return updatedBoard
  }, [currentGame, connectedPieces])
  if (!currentGame) {
    return null
  }

  return (
    <Flex alignItems='flex-start' h='full' justifyContent='center' pt={{ min0: 8, min1920: 36 }}>
      <Box
        h='fit-content'
        rounded='lg'
        border='8px solid'
        borderColor="gold.500"
      >
        {currentBoard.map((row, rowIndex) => {
          return (
            <Flex key={rowIndex}>
              {row.map((square) => {
                return (
                  <SquareFrame key={square.location} square={square}>
                    <SquareCenter square={square} rowIndex={rowIndex} />
                  </SquareFrame>
                )
              })}
            </Flex>
          )
        })}
      </Box>
    </Flex>
  )
}
