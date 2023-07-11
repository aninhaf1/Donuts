import menu from '../../assets/menu.png'
import {Menu1, BotaoNav} from './styled'

function Header(props){
    const handlePageChange = ()=>{
        props.pagina()
    }

    return(
    <Menu1>
        <BotaoNav onClick={handlePageChange}>
            <img src={props.imgPrimeira} alt=''/>
        </BotaoNav>

        <BotaoNav>
            <img src={props.imgSegunda} alt=''/>
        </BotaoNav>
    </Menu1>  
    )
}

export default Header