import Button from "../../components/Button"
import Layout from "../../components/Layout"
import * as S from './styled'
import { Link } from "react-router-dom"

const NotFound = () => (
    <Layout>
        <S.NotFoundWrapper>
            <S.NotFoundTitle>Puxa, esta página não existe</S.NotFoundTitle>
            <S.NotFoundSubtitle>
                Confira se você digitou algo errado. 
                <br/>
                Talvez o endereço não esteja mais disponível na web.
            </S.NotFoundSubtitle>
            <Link to="/">
                <Button primary>ir para o início</Button>
            </Link>
        </S.NotFoundWrapper>
    </Layout>
)

export default NotFound