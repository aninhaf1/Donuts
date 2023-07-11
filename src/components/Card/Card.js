import {CardContainer, DivCard, ImgCard, TextCard, TituloCard} from './styled'

function Card() {
    

    return(
        <CardContainer>
            <ImgCard src=''/>
            <TituloCard>
                Unicorn Sprinkles
            </TituloCard>
            <TextCard>
                Strawberry creay...
            </TextCard>
            <DivCard>
                <p> 7.800 </p>
                <a> Mais </a>
            </DivCard>
        </CardContainer>
    )
}

export default Card