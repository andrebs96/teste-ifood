import Layout from '../../components/Layout'
import Card from '../../components/Card'
import Form from '../../components/Form'

const Pedido = () => {

    return (
        <Layout>
            <Card
                title={`Passo X de Xs para a sua pizza 🍕`}
            >
                <Form
                    title="Escolha o tipo de massa:"
                >
                    <label htmlFor="alternativeId">
                        <input id="alternativeId" name="questionId" type="radio" value="0" />
                        Alternative 0
                    </label>
                    <label htmlFor="1">
                        <input id="1" name="questionId" type="radio" value="1" />
                        Alternative 1
                    </label>
                    <label htmlFor="2">
                        <input id="2" name="questionId" type="radio" value="2" />
                        Alternative 2
                    </label>
                    <label htmlFor="3">
                        <input id="3" name="questionId" type="radio" value="3" />
                        Alternative 3
                    </label>
                    <button type="submit" disabled="">
                        Próxima escolha
                    </button>
                </Form>
            </Card>
        </Layout>
    )
}

export default Pedido
