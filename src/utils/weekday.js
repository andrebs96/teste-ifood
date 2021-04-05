const getWeekday = () => {

    const date = new Date()
    
    const day = date.getDay()

    const weekday = {
        0: () => "Domingo",
        1: () => "Segunda",
        2: () => "Terça",
        3: () => "Quarta",
        4: () => "Quinta",
        5: () => "Sexta",
        6: () => "Sábado",
        'default': () => 'Dia da semana não encontrado'
    }

    return (weekday[day] || weekday['default'])()

}

export default getWeekday