//renderiza o PAI mas nao renderiza o Filho
import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallBackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)
    
   const inc= useCallback((current) =>{
        setCount(curr => curr + current)
    },[setCount])
    
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <UseCallbackButtons inc={inc} />
                </div>
            </div>
        </div>
    )
}

export default UseCallback
