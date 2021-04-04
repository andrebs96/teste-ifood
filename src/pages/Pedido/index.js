import { useContext, useState } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import Options from './components/Options'

const Pedido = () => {

    const context = useContext(OrderContext)

    const [completeOrder, setCompleteOrder] = useState(false)

    const { steps } = context
    const totalSteps = steps.length

    const [currentStep, setCurrentStep] = useState(0)
    const stepIndex = currentStep
    const step = steps[stepIndex]
    const { options, text, type } = step

    const [selected, setSelected] = useState('')
    const [optionsSelected, setOptionsSelected] = useState(null)
    const currentChoice = {}

    const onChangeLabel = (event) => {

        const { value } = event.target

        setSelected(value) 

        currentChoice[type] = value

        stepIndex === 0 ? setOptionsSelected(currentChoice) : setOptionsSelected(Object.assign(optionsSelected, currentChoice))

        const nextStep = stepIndex + 1
        
        if (nextStep < totalSteps) {
            return setCurrentStep(nextStep)
        } 
        
        return setCompleteOrder(true)

    }

    return (
        <Layout>
            {!completeOrder && (
                <Options 
                    currentStep={currentStep + 1}
                    onChange={onChangeLabel}
                    options={options}
                    selected={selected}
                    textForm={text}
                    totalSteps={totalSteps}
                />
            )}
                
            {completeOrder && (
                <Card
                    title={`BOM APETITE!`}
                >
                    <p style={{textAlign: 'center'}}>
                        Uma pizza {optionsSelected.size} de {optionsSelected.flavor} com massa {optionsSelected.dough} 
                        <br />
                        está sendo preparada para você!
                    </p>
                    <br/>
                    <img src="https://media.giphy.com/media/J3bafobsatIqc/source.gif" width="100%" alt="Pedido finalizado" />
                </Card>
            )}
        </Layout>
    )
}

export default Pedido
