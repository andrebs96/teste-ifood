import * as S from './styled'
import PropTypes from 'prop-types'

const Form = ({ children, title }) => (
    <>
        <S.FormTitle>{ title }</S.FormTitle>
        <form
            // onSubmit=""
        >
            { children }
        </form>
    </>
) 

Form.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
}

export default Form