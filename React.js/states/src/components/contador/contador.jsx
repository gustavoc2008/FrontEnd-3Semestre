import { useState } from "react"

function Contador() {

    //criamos variaveis e states
    // criamos as funcoes 

    const [contador, setContador] = useState(0)

    function Incrementar() {
        setContador(contador + 1)
        if(contador == 10) {
            setContador(0)
        }
    }

    function Decrementar() {
        if(contador > 0)
        setContador(contador - 1)
    }

    return (
        <div className="contador">
            <h1 className="contador__title">Contador {contador}</h1>

            <button onClick={Incrementar}>Contar ++</button><br />
            <button onClick={Decrementar}>Subtrair --</button>
        </div>
    )
}

export default Contador