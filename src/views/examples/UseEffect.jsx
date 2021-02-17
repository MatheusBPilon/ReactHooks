//Toma alguma ação assim que um determinado estado é acionado
import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [text, setText] = useState("")

    const [parouimpar, setParouimpar] = useState("")


    const calcularFatorial = (n) => {

        Number(n)
        if (n < 0) return -1
        if (n == 0) return 1
        if (number < 1111) {
            return calcularFatorial(n - 1) * n
        }

    }

    const update = (target) => {
        let fat = calcularFatorial(target)
        setNumber(target)
        setFatorial(fat)
    }

    const validarParouImpar = () => {
        if (number > -1) {
            if (number % 2 == 0) {
                setParouimpar("Par")
            }
            if (number % 2 == 1) {
                setParouimpar("Impar")
            }
        }else{
            setParouimpar("Numeros Positivos Plis!")
        }
    }
    const validarMensagem = () => {
        if (fatorial > 1000000) {
            setText("Ao Infinito")

        }
        else {
            setText("Bons Calculos")
        }
    }

    useEffect(() => {
        validarParouImpar()
    }, [number])

    useEffect(() => {
        validarMensagem()

    }, [fatorial])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div>
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial}</span>
            </div>
            <div className="cen"></div>
            <input type="number" className="input"
                value={number}
                onChange={e => update(e.target.value)}
            />

            <span className="text red">{text}</span>

            <SectionTitle
                title="Second #02"
            />

            <span className="text green">{parouimpar}</span>
        </div>
    )
}

export default UseEffect
