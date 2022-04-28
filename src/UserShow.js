import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserShow = (props) => {
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const { id } = props.match.params

    
    useEffect(() => {
        Promise.all([axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)])
        .then((values) => {
            const [userResponse, postResponse] = values
            setUser(userResponse.data)
            setPosts(postResponse.data)
        })
    }, [])

    

   
    return (<div>
        <h1>USERNAME - {user.name}</h1>
        <h2>Post Written By User</h2>
        <ul>
            {
                posts.map((post) => {
                    return (<li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>)
                })
            }
        </ul>
    </div>)
}

export default UserShow