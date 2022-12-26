import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ChangeMessageState from './components/ChangeMessageState';
import CondicionalRender from './components/CondicionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragments from './components/Fragments';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {
  
  const cars = [
    {id: 1, brand: "Ferrari", color: "vermelha", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "branco", newCar: false, km: 45000},
    {id: 3, brand: "Renault", color: "azul", newCar: false, km: 44020},
  ]

  const users = [
    {id: 1, name: "Frederico", age: 46, profession: "Analista de sistemas"},
    {id: 2, name: "Dayse", age: 38, profession: "Autônoma"},
    {id: 3, name: "Nicolle", age: 14, profession: "Estudante"},
  ]
  
  function showMessage() {
    console.log("Eventos do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* Em assets precisamos importar as imagens e o src é dinâmico */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />

      {/* props */}
      <ShowUserName name="Frederico"/>

      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Yellow" newCar={false} />

      {/* reaporveitando */}
      <CarDetails brand="Ford" km={0} color="Purple" newCar={true} />
      <CarDetails brand="BMW" km={85000} color="Black" newCar={false}/>

      {/* looping em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* Fragments */}
      <Fragments />

      {/* Children props */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>

      {/* executar função como prop */}
      <ExecuteFunction myFunction={showMessage} />

      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />

      {/* desafio 4 */}
      {users.map((user) => (
        <UserDetails 
          key={user.id}
          name={user.name}
          age={user.age} 
          profession={user.profession}
        />
      ))}
    </div>
  );
}

export default App;
