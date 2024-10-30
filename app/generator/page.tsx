import Header from '@/components/Header'
import Main from '@/components/Main'
import Results from '@/components/Results'
import StepsContainer from '@/components/StepsContainer'
import Image from 'next/image'



const Generator = () => {
  return (
    <div>
        <Header />
        <Main>
        <section className="flex-grow w-full">
           <StepsContainer />
          </section>
          <section className="flex-grow w-full">
          <Results />
        </section>
        </Main>
    </div>
  )
}

export default Generator