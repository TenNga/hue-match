import Header from '@/components/Header'
import Main from '@/components/Main'
import Results from '@/components/Results'
import StepsContainer from '@/components/StepsContainer'

const Generator = () => {
  return (
    <div>
      <Header />
      <Main>
        <section className="flex-grow-[2] basis-1/2">
          <StepsContainer />
        </section>
        <section className="flex-grow">
          <Results />
        </section>
      </Main>
    </div>
  )
}

export default Generator