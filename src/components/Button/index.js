import * as S from './styled'
import PropTypes from 'prop-types'

const Button = (props) => {

    const { children } = props

    return (
        <S.Button {...props}>
            { children }
        </S.Button>
    )
}  

Button.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Button