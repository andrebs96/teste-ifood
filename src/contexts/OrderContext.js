import { useState, createContext } from "react"

export const OrderContext = createContext()

const OrderProvider = ({ children }) => {
    const [carte] = useState([
        { id: 1, flavor: 'Calabresa', typeDough: 'Tradicional', size: 'Média', promotionalDay: 'Sunday' },
        { id: 2, flavor: 'Mussarela', typeDough: 'Tradicional', size: 'Média', promotionalDay: 'Monday' },
        { id: 3, flavor: 'Toscana', typeDough: 'Tradicional', size: 'Média', promotionalDay: 'Tuesday' },
        { id: 4, flavor: 'Portuguesa', typeDough: 'Tradicional', size: 'Média', promotionalDay: 'Wednesday' },
        { id: 5, flavor: 'Margherita', typeDough: 'Tradicional', size: 'Média', promotionalDay: 'Thursday' },
        { id: 6, flavor: '4 queijos', typeDough: 'Tradicional', size: 'Média', promotionalDay: 'Friday' },
        { id: 7, flavor: 'Frango com catupiry', typeDough: 'Tradicional', size: 'Média', promotionalDay: 'Saturday' },
    ])

    const [options] = useState([
        {
            id: 1,
            text: 'Escolha o tipo de massa:',
            typeDough: [
                'Tradicional',
                'Nova-iorquina',
                'Siciliana',
            ]
        },
        {
            id: 2,
            text: 'Escolha o tamanho:',
            size: [
                'Pequena',
                'Média',
                'Grande'
            ]
        },
        {
            id: 3,
            text: 'Escolha o sabor:',
            flavor: [
                '4 queijos',
                'Calabresa',
                'Frango com catupiry',
                'Margherita',
                'Mussarela',
                'Portuguesa',
                'Toscana',
            ]
        }
    ])

    const [order, setOrder] = useState()

    return(
        <OrderContext.Provider value={{ carte, options, order, setOrder }}>
            { children }
        </OrderContext.Provider>
    )
}

export default OrderProvider