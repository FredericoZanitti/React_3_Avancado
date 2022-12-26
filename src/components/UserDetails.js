const UserDetails = ({name, age, profession}) => {
  return (
    <div>
        <h3>Dados do Usuário {name}</h3>
        <p>Idade: {age}</p>
        <p>Profissão: {profession}</p>
        {age >= 18 ? <p>Apto a tirar habilitação</p> : <p><b>Não pode tirar habilitação</b></p>}
    </div>
  )
}

export default UserDetails;