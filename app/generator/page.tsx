import Header from '@/components/Header'
import Main from '@/components/Main'
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
          <Image
            className="w-full object-cover"
            src={"/assets/images/homepage_primary.png"}
            width={1000}
            height={1000}
            alt="Homepage primary"
          />
        </section>
        </Main>
    </div>
  )
}

export default Generator