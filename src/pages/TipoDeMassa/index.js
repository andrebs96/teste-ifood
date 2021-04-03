import Layout from '../../components/Layout'

const TipoDeMassa = () => {

    return (
        <Layout>
            <form
                // onSubmit=""
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
            </form>
        </Layout>
    )
}

export default TipoDeMassa
