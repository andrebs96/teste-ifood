import { useState, createContext } from "react"

export const OrderContext = createContext()

const OrderProvider = ({ children }) => {
    const [carte] = useState([
        { id: 1, flavor: 'Calabresa', typeDough: 'Tradicional', size: 'Média', promotionalDay: 'Domingo' },
        { id: 2, flavor: 'Mussarela', typeDough: 'Tradicional', size: 'Média', promotionalDay: 'Segunda' },
        { id: 3, flavor: 'Toscana', typeDough: 'Tradicional', size: 'Média', promotionalDay: 'Terça' },
        { id: 4, flavor: 'Portuguesa', typeDough: 'Tradicional', size: 'Média', promotionalDay: 'Quarta' },
        { id: 5, flavor: 'Margherita', typeDough: 'Tradicional', size: 'Média', promotionalDay: 'Quita' },
        { id: 6, flavor: '4 queijos', typeDough: 'Tradicional', size: 'Média', promotionalDay: 'Sexta' },
        { id: 7, flavor: 'Frango com catupiry', typeDough: 'Tradicional', size: 'Média', promotionalDay: 'Sábado' },
    ])

    const [steps] = useState([
        {
            text: 'Escolha o tipo de massa:',
            type: 'dough',
            options: [
                'Tradicional',
                'Nova-iorquina',
                'Siciliana',
            ]
        },
        {
            text: 'Escolha o tamanho:',
            type: 'size',
            options: [
                'Pequena',
                'Média',
                'Grande'
            ]
        },
        {
            text: 'Escolha o sabor:',
            type: 'flavor',
            options: [
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
        <OrderContext.Provider value={{ carte, steps, order, setOrder }}>
            { children }
        </OrderContext.Provider>
    )
}

export default OrderProvider