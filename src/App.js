import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Users from './UserList'
import Posts from './PostList'
import UserShow from './UserShow'
import PostShow from './PostShow'

const App = (props) => {
    return (
      <div>
          <Link to='/'>Home</Link> | <Link to='/users'>Users</Link> | <Link to='/posts'>Posts</Link>
          <Route path='/' component={Home} exact={true}/>
          <Route path='/users' component={Users} exact={true}/>
          <Route path='/users/:id' component={UserShow} />
          <Route path='/posts' component={Posts} exact={true} />
          <Route path='/posts/:postId' component={PostShow} />
      </div>
    )
}

export default App