import {useState} from "react";

const ManageData = () => {
    {/* variável não renderiza, não altera valor */}
    let someDAta = 10;

    console.log(someDAta);

    {/* precisa usar o useState para pegarmos todas as alterações */}
    const [number, setNumber] = useState(15);

    console.log(number);

  return (
    <div>
        <p>Valor: {someDAta}</p>
        <button onClick={() => (someDAta = 15)}>Mudar Variável</button>

        <p>Valor: {number}</p>
        <button onClick={() => (setNumber(25))}>Mudar o State</button>        
    </div>  
  )
}

export default ManageData