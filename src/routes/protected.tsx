import { RouteObject } from 'react-router-dom'

import { lazyImport } from '@/utils/lazyImport'

const { TransversalRoutesPrivate } = lazyImport(() => import('@/feature/transversal'), 'TransversalRoutesPrivate')


export const protectedRoutes: RouteObject[] = [
  {
    path: '/*',
    element: < TransversalRoutesPrivate />,
  },
 
]
