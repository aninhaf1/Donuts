import Card from "../../components/Card/Card"
import Header from "../../components/Header/Header"
import Nav from "../../components/Nav/Nav"
import TituloHeader from "../../components/TituloHeader/TituloHeader"
import menu from '../../assets/menu.png'
import lupa from '../../assets/search.png'
import { SectionCard } from "./styled"


function Home(props) {

    return(
       <>
        <Header
        pagina={props.pagina}
        imgPrimeira={menu}
        imgSegunda={lupa}
        />
        <TituloHeader/>
        <Nav/>

        <SectionCard>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </SectionCard>
        
       </> 
    )
    
}

export default Home