import { ConnectSquare } from './../../../features/ConnectFour/types';
import { useStore } from './../StoreProvider';
import { GameBase } from './../types';
import { useCallback, useLayoutEffect } from 'react';
import { useAddressLookup } from './../../../hooks/utils/useAddressLookup';
import { SeasonAction } from '../season/actions';

interface IUseConnectFourGame {
  gameId?: string;
}

export function useConnectFourGame({ gameId }: IUseConnectFourGame) {
  const { currentSeason, dispatch } = useStore()
  const { lookupAddress } = useAddressLookup()

  const getGameData = useCallback(async (_gameId: number): Promise<GameBase | undefined> => {
    if (!currentSeason.connectFourContract) {
      return;
    }
    try {
      const { teamOne, teamTwo, ...rest } = await currentSeason.connectFourContract.getGame(_gameId);
      return {
        ...rest,
        gameId: _gameId,
        teamOne: await lookupAddress(teamOne),
        teamTwo: await lookupAddress(teamTwo),
      };
    } catch (e) {
      console.error('🚀 There was a problem retreiving game', e)
    }
  }, [currentSeason, lookupAddress])

  const getBoardData = useCallback(async (_gameId: number) => {
    if (!currentSeason.connectFourContract) {
      return;
    }
    try {

      const board = await currentSeason.connectFourContract.getGameBoard(_gameId);
      const typeedBoard: (number | string)[][] = [...board]
      typeedBoard.push(new Array(6).fill('x'))
      const connectBoard: ConnectSquare[][] = typeedBoard.reverse().map((col, column) => col.map((square, row) => {
        if (square === 1 || square === 2) {
          return {
            location: `${column}:${row}`,
            team: square
          }
        }
        if (square === 'x') {
          return {
            location: `${square}:${row}`
          }
        }
        return {
          location: `${column}:${row}`
        }
      }))
      return connectBoard
    } catch (e) {
      console.error('🚀 There was a problem retreiving game', e)
    }
  }, [currentSeason])

  useLayoutEffect(() => {
    if (!currentSeason.currentGame && gameId) {
      const retrieveData = async () => {
        // get game data
        const game = await getGameData(Number(gameId))
        // get board data
        const board = await getBoardData(Number(gameId))
        // dispatch game to state
        if (!!game && !!board) {

          dispatch({
            type: SeasonAction.SET_GAME,
            payload: { ...game, board }
          })
        }
      }
      retrieveData()
    }
  }, [gameId, currentSeason.currentGame, getGameData, getBoardData, dispatch])

  return { getGameData, getBoardData };
}