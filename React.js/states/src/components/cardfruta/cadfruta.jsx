import { useState } from "react"

function CadFruta() {

    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState("")

    //array para o cadastro de frutas
    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Laranja", quantidade: 10},
        { id: 2, nome: "Tamarindu", quantidade: 20}
    ])

    function cadastrar(e) {
        e.preventDefault()//não deixa postar o formulario
        setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade}])
    }

    return (
        <section className="sessao-cadastro">
            <h2>Cadastrar</h2>

            {/* Formulario de Cadastro */}
            <form action="" onSubmit={cadastrar}>
                <fieldset className="cadastro">
                    <label htmlFor="fruta" className="cadastro__rotulo">Digite o nome da fruta</label>
                </fieldset>
                <input type="text" id="fruta" placeholder="ex: limao" className="cadastro__entrada" value={fruta} onChange={(e) => {
                    setFruta(e.target.value)
                }} />
                <input type="number" id="quantidade" placeholder="ex: 5" className="cadastro__quantidade" value={quantidade} onChange={(e) => {
                    setQuantidade(e.target.value)
                }}/>
                <button type="submit" className="cadastro__btncadastrar">Cadastrar</button>
            </form>

            {/* Listagem de Dados */}
            <div className="resultados">
                <ul>
                    {
                        arrFrutas.map((f) => {
                            return (
                                <li key={f.id}>
                                    Fruta: <strong>{f.nome}</strong> |
                                    Quantidade: <strong>{f.quantidade}</strong>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default CadFruta