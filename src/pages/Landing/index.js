import { Link } from "react-router-dom"
import * as S from './styled'
import Logo from '../../components/Logo'
import Button from '../../components/Button'

const Landing = () => (
    <S.LandingWrapper>
        <S.LandingContent>
            <Logo width="180" height="90" color="var(--white)" />
            <S.LandingTitle>Nunca foi tão fácil pedir pizza</S.LandingTitle>
            <Link to="/pedido">
                <Button>Monte sua pizza</Button>
            </Link>
            <S.LandingSubtitle>Ganhe pontos de benefícios escolhendo a pizza do dia.</S.LandingSubtitle>
            <Link to="/pizza-do-dia">
                <Button>Ver recomendação</Button>
            </Link>            
        </S.LandingContent>
    </S.LandingWrapper>
)

export default Landing