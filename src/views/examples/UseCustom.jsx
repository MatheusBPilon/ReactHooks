import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
const UseRef = (props) => {

    const [count, inc, dec] = useCounter(10)
    
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    let amizade = useFetch(url).then((response) => response)
    console.log(amizade)
    
    const showStats = (response) => {
        return response.map(state => <li>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Custom hooks #01" />
            <div className="center">
                <span className="text">{count}</span>
                <button className="btn" onClick={() => dec()}>-1</button>
                <button className="btn" onClick={() => inc()}>+1</button>
            </div>

            <SectionTitle title="Custom hooks #02" />
            <div className="center">
                <ul>
                    {showStats}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
