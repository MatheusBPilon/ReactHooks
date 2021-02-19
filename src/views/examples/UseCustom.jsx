import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import '../../hooks/fetch.css'
import { useFetch } from '../../hooks/useFetch'
const UseRef = (props) => {

    const [count, inc, dec] = useCounter(10)

    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)

    function showStats(states) {
        return states.map(state => <tr><td className="tr">{state.nome}</td><td>{state.sigla}</td></tr>)
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
                <table className="tabela">
                    <th>Nome</th>
                    <th>Sigla</th>

                   
                      
                    {response.data ? showStats(response.data):false}
                   
                    
                </table>
            </div>
        </div>
    )
}

export default UseRef
