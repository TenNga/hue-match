import FileUploader from '@/components/FileUploader'
import FirstStep from '@/components/FirstStep'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Step from '@/components/ui/Step'
import { steps } from '@/constants'

const Generator = () => {
  return (
    <div>
        <Header />
        <Main>
           <FirstStep />
        </Main>
    </div>
  )
}

export default Generator