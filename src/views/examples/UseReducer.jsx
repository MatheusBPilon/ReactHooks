import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store/config'


const UseReducer = (props) => {

    const [soma, setSoma] = useState(null)



    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                <span className="text">
                    {state.number}
                </span>
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'number_add2' })}
                    >+2</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'divisao' })}
                    >/7</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'multi' })}
                    >x25</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'arre' })}
                    >Arrendondar</button>
                </div>
                <div className="center">
                    <input type="number" className="input"
                        onChange={e => setSoma(parseInt(e.target.value))}
                        value={soma}
                    />

                    <button className="btn"
                        onClick={() => dispatch({ type: 'rece', num: soma })}
                    >somar</button>
                </div>

            </div>
            <div className="center">

                {state.user ? <span className="text">{state.user.name}</span> :
                    <span className="text">Sem usuario</span>
                }

                <div className="center">
                    <button className="btn"
                        onClick={() => dispatch({ type: 'login', name: 'Maria' })}
                    >Login</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'logout' })}
                    >Logout</button>
                </div>
            </div>

        </div>
    )
}

export default UseReducer
