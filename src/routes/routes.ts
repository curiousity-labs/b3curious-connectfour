export const ROUTES = {
  base: {
    path: '/',
    relative: () => '/'
  },
  season: {
    path: ':seasonId',
    relative: (seasonId: number) => `/season/${seasonId.toString()}`
  },
  game: {
    path: ':gameId',
    relative: (seasonId: number, gameId: number) => `/season/${seasonId.toString()}/${gameId.toString()}`
  }
}