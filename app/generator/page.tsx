import Header from '@/components/Header'
import Main from '@/components/Main'
import Results from '@/components/Results'
import StepsContainer from '@/components/StepsContainer'

const Generator = () => {
  return (
    <main className='mx-[20px] lg:mx-[80px]'>
      <Header />
      <Main>
        <section className="flex-grow-[2] basis-1/2">
          <StepsContainer />
        </section>
        <hr className='bg-black lg:hidden'/>
          <Results />
      </Main>
    </main>
  )
}

export default Generator