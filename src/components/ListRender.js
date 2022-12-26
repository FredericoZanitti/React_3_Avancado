import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Frederico", "Dayse", "Nicolle", "Bibiana", "Ninho", "Kely"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Frederico", age: 46},
        {id: 2, name: "Dayse", age: 38},
        {id: 3, name: "Nicolle", age: 14},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((item) => (
                <li key={(item.id)}>{item.name} - {item.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  )
}

export default ListRender