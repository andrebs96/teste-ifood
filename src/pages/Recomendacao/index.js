import { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import * as S from './styled'
import getWeekday from '../../utils/weekday'

const Recomendacao = () => {

    const context = useContext(OrderContext)

    const { carte } = context

    const [weekday, setWeekday] = useState(null)
    const [pizza, setPizza] = useState(null)
    const [orderConfirmed, setOrderConfirmed] = useState(false)
    
    useEffect(() => {

        const day = getWeekday()

        setWeekday(day)
        
        const promotionalDay = carte.filter(pizza => {
            return pizza.promotionalDay === day
        })

        const pizza = promotionalDay[0].flavor

        setPizza(pizza)

    }, [carte])

    return (
        <Layout>
            {!orderConfirmed && (
                <S.RecomendacaoWrapper>
                    <S.RecomendacaoTitle>
                        <span>{ weekday } </span>
                        combina com uma 
                        <br/>
                        <span> pizza de { pizza }</span>
                    </S.RecomendacaoTitle>
                    <img src="https://media.giphy.com/media/jn2iXu2HRpMuovBrrV/source.gif" width="auto" height="200" alt="Pedido finalizado" />
                    <S.RecomendacaoSubtitle>Ganhe pontos de benefícios escolhendo a pizza do dia.</S.RecomendacaoSubtitle>
                    <Button primary onClick={() => setOrderConfirmed(true)}>Confirmar pedido</Button>
                </S.RecomendacaoWrapper>
            )}
            {orderConfirmed && (
                <S.RecomendacaoWrapper>
                    <S.RecomendacaoTitle>
                        <span>BOM APETITE!</span>
                    </S.RecomendacaoTitle>
                    <img src="https://media.giphy.com/media/J3bafobsatIqc/source.gif" width="100%" height="auto" alt="Pedido finalizado" />
                    <S.RecomendacaoSubtitle>Além de pontos de benefícios, há uma pizza maravilhosa sendo preparada para você! ;)</S.RecomendacaoSubtitle>
                </S.RecomendacaoWrapper>
            )}
        </Layout>
    )
}

export default Recomendacao
