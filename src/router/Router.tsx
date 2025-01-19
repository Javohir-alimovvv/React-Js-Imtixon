import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Detail from '../pages/detail/Detail'

const Router: React.FC = () => {
  


  return (
    <>

      {
        useRoutes([
          {
            path: "/",
            element: <Layout />,
            children: [
              {
                path: "/",
                element: <Home />
              },
              {
                path: "detail/:id",
                element: <Detail/>
              },
              {
                path: "*",
                element: <div>404</div>
              }
            ]
          }
        ])
      }

    </>
  )
}

export default memo(Router)