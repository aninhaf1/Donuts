import filtro from '../../assets/filtro.png'
import Botao from '../Botao/Botao'
import { ContainerNav } from './styled'

function Nav() {
    
    return(
        <ContainerNav>
            <Botao titulo={'Donuts'}/>
            <Botao titulo={'Ice Cream'}/>
            <Botao titulo={'Bomboloni'}/>
            <img src={filtro} alt=''/>
        </ContainerNav>
    )
}

export default Nav