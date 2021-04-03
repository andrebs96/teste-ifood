import Logo from '../Logo'
import * as S from './styled'
import { Link } from "react-router-dom"

const Layout = ({ children }) => (
    <S.LayoutWrapper>
        <S.LayoutHeader>
            <Link to="/">
                <Logo width="80" height="43" color="var(--primary-color)" />
            </Link>
        </S.LayoutHeader>
        <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
)   

export default Layout