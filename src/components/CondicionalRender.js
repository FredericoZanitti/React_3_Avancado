import { useState } from "react"

const CondicionalRender = () => {
  
    const [x] = useState(true);
    const [name, setName] = useState("João");
  
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim</p>}
        {!x && <p>Agora é falso</p>}

        <h1>If ternário</h1>

        {name === "João"? "O nome é João" : "O cara se chama José"}

        <div>
            <button onClick={() => setName("José")}>Mudar para José</button>
            <button onClick={() => setName("João")}>Voltar para João</button>
        </div>
    </div>
  )
}

export default CondicionalRender