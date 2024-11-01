import { StepProvider } from '@/contexts/StepContext'
import { ChildrenType } from '@/types'
import React from 'react'

const Main = ({children} : ChildrenType) => {
  return (
      <StepProvider>
        <main className="flex flex-col justify-between container my-10 mx-auto gap-5 lg:flex-row">
              {children}
        </main>
      </StepProvider>
  )
}

export default Main