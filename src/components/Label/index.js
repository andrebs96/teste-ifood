import * as S from './styled'
import PropTypes from 'prop-types'

const Label = ({ checked, id, onChange, text, value }) => {

    return (
        <S.Label htmlFor={id} data-selected={checked}>
            <input id={id} type="radio" checked={checked} onChange={onChange} value={value} />
            { text }
        </S.Label>
    )
}

Label.propTypes = {
    checked: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired, 
}

export default Label