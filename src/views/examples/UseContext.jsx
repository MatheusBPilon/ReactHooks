import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import DataContext from '../../data/DataContext'
import {AppContext} from '../../data/Store'


const UseContext = (props) => {
    const { state, setState } = useContext(DataContext)

    const addNumber = (delta) => {
        if (delta !== 0) {
            setState({
                ...state,
                number: state.number + delta
            })
        } if (delta === 0) {
            setState({
                ...state,
                number: 0
            })
        }
    }

    const{number,text,setNumber} = useContext(AppContext)
    
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="#01" />
            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>
            </div>

            <div>
                <button onClick={() => { addNumber(1) }} className="btn">+1</button>
                <button onClick={() => (addNumber(-1))} className="btn">-1</button>
            </div>
            <button onClick={() => (addNumber(0))} className="btn">Reset</button>
            <SectionTitle title="#02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button onClick={()=>setNumber(number-1)} className="btn">-1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
