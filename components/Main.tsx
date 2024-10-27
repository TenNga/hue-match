import { ChildrenType } from '@/types'
import React from 'react'

const Main = ({children} : ChildrenType) => {
  return (
    <main className="flex flex-col-reverse justify-between container my-10 mx-auto gap-4 lg:flex-row">
        {children}
    </main>
  )
}

export default Main