import * as S from './styled'
import Logo from '../Logo'

const Landing = () => (
    <S.LandingWrapper>
        <S.LandingContent>
            <Logo width="180" height="90" color="var(--white)" />
            <S.LandingTitle>Nunca foi tão fácil pedir pizza</S.LandingTitle>
            <S.LandingLink to="/tipo-de-massa">Monte sua pizza</S.LandingLink>
        </S.LandingContent>
    </S.LandingWrapper>
)

export default Landing