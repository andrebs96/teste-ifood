import * as S from './styled'
import PropTypes from 'prop-types'

const Label = ({ checked, id, onChange, text, value }) => {

    const isChecked = checked === value

    return (
        <S.Label htmlFor={id} data-selected={isChecked}>
            <input id={id} type="radio" checked={isChecked} onChange={onChange} value={value} />
            { text }
        </S.Label>
    )
}

Label.propTypes = {
    checked: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired, 
}

export default Label