import Card from '../../../../components/Card'
import Form from '../../../../components/Form'
import Label from '../../../../components/Label'
import PropTypes from 'prop-types'

const Options = ({ currentStep, onChange, options, selected, textForm, totalSteps }) => {
    return (
        <Card
            title={`Passo ${currentStep} de ${totalSteps} para a sua pizza 🍕`}
        >
            <Form title={textForm}>
                {options.map((option, index) => {

                    const optionId = `option__${index}`
                    const isSelected = selected === option

                    return (
                        <Label
                            id={optionId}
                            checked={isSelected}
                            key={optionId}
                            text={option}
                            value={option}
                            onChange={onChange}
                        />
                    )

                })}
            </Form>
        </Card>
    )
}

Options.propTypes = {
    currentStep: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired, 
    options: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    textForm: PropTypes.string.isRequired, 
    totalSteps: PropTypes.number.isRequired, 
}

export default Options
