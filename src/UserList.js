import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserList = (props) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                const result = res.data
                setUsers(result)
            }).catch((err) => {
                alert(err.message)
            })
    }, [])

    return (<div>
        <h1>USERS LIST -{users.length}</h1>
        <ul>
            {
                users.map((user) => {
                    return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                })
            }
        </ul>
    </div>)
}

export default UserList