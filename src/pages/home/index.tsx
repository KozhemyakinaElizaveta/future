import { ContainerPage } from 'shared/ui'
import { Board } from 'widgets/Board/ui'

const HomePage = () => {
  return (
    <ContainerPage
      title={'GitHub Repositories'}
    >
        <Board/>
    </ContainerPage>
  )
}

export default HomePage