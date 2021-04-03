import * as S from './styled'
import PropTypes from 'prop-types'

const Card = ({ title, children }) => (
    <S.CardWrapper>
        <S.CardTitle>{ title }</S.CardTitle>
        <S.CardContent>
            { children }
        </S.CardContent>
    </S.CardWrapper>
)   

Card.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
}

export default Card