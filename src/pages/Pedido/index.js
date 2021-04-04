import { useState } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import Form from '../../components/Form'
import Label from '../../components/Label'

const Pedido = () => {

    const [massa, setMassa] = useState('')

    const onChangeLabel = (event) => {
        setMassa(event.target.value)
    }

    return (
        <Layout>
            <Card
                title={`Passo 1 de 3 para a sua pizza 🍕`}
            >
                <Form title="Escolha o tipo de massa:">
                    <Label
                        id="tradicional"
                        name="questionId"
                        text="Tradicional"
                        checked={massa}
                        onChange={onChangeLabel}
                        value="tradicional"
                    />
                    <Label
                        id="1"
                        name="questionId"
                        text="Alternative 1"
                        checked={massa}
                        onChange={onChangeLabel}
                        value="1"
                    />
                    <Label
                        id="2"
                        name="questionId"
                        text="Alternative 2"
                        checked={massa}
                        onChange={onChangeLabel}
                        value="2"
                    />
                    <Label
                        id="3"
                        name="questionId"
                        text="Alternative 3"
                        checked={massa}
                        onChange={onChangeLabel}
                        value="3"
                    />
                </Form>
            </Card>
        </Layout>
    )
}

export default Pedido
