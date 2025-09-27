import { TopBackground } from './styles'
import ImageUsers from '../../assets/users.png'

function GlobalTopBackground(){
    return(

         <TopBackground>
        <img src={ImageUsers} alt='imagem-de-usuarios'/>
      </TopBackground>

    )
}

export default GlobalTopBackground