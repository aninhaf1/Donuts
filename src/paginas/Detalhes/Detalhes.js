import Header from '../../components/Header/Header'
import seta from '../../assets/seta.png'
import ponto from '../../assets/ponto.png'
import group from '../../assets/group.png'
import donutGrande from '../../assets/Frame 9.png'
import { BotaoCard, ContainerDetalhes, ContainerDiv, ImagemGrande, MaisProdutos, TextMore, TextNumber, TextoDonuts, TituloDonuts } from './styled'

function Detalhes(props) {

    return(
       <>
       <Header
       pagina={props.pagina}
       imgPrimeira={seta}
       imgSegunda={ponto}
       />

       <ContainerDetalhes>
            <ImagemGrande src={donutGrande}/>

            <ContainerDiv>

                <TituloDonuts>
                    Unicorn Sprinkles
                </TituloDonuts>
                <TextoDonuts>
                A fluffy fresh cooked donut covered by a creamy strawberry flavour with rainbow sprinkles.
                </TextoDonuts>

                <MaisProdutos>
                    <img src={group}/>
                    <TextNumber>7800</TextNumber>
                </MaisProdutos>

                <MaisProdutos>
                    <TextMore>Need more?</TextMore>
                    <TextMore>Add more?</TextMore>
                </MaisProdutos>

                <BotaoCard>Add to cart</BotaoCard>
            </ContainerDiv>
       </ContainerDetalhes>
       </> 
    )
    
}

export default Detalhes