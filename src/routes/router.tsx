import { createHashRouter } from 'react-router-dom';
import { ConnectFourGames } from '../components/pages/ConnectFourGames';
import { ROUTES } from './routes';
import { ConnectFourGame } from '../components/pages/ConnectFourGame';
import { Dashboard } from '../components/pages/Dashboard';

export const router = createHashRouter([
  {
    element: <Dashboard />,
    path: ROUTES.base.path,
  },
  {
    element: <ConnectFourGames />,
    path: ROUTES.season.path,
  },
  {
    element: <ConnectFourGame />,
    path: ROUTES.game.path,
  }
])