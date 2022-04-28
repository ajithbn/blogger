import React, { useState, useEffect } from "react";
import axios from "axios";

const PostShow = (props) => {
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const { postId } = props.match.params;
//   const [userId, setUserId] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        const result = response.data;
        setPost(result);
        // setUserId(result.userId);
        axios
          .get(`https://jsonplaceholder.typicode.com/users/${result.userId}`)
          .then((res) => {
            //console.log('user', res.data)
            setUser(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
        //console.log(result)
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  // useEffect(() => {
  //     axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  //     .then((res) => {
  //         //console.log('user', res.data)
  //         setUser(res.data)
  //     }).catch((err) => {
  //         alert(err.message)
  //     })
  // }, [userId])

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => {
        //console.log(res.data)
        setComments(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  // useEffect(() => {
  //     Promise.all([axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`), axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)])
  //     .then((values) => {
  //         const [postRes, userRes] = values
  //         setPost(postRes)
  //         setUser(userRes)

  //     }).catch((err) => {
  //         alert(err.message)
  //     })
  // })
  return (
    <div>
      <h1>UserName - {user.name}</h1>
      <h2>Show Post - {postId}</h2>
      <h3>TITLE - {post.title}</h3>
      <h3>
        Body:
        <br />
        {post.body}
      </h3>
      <hr />
      <h3>COMMENTS</h3>
      <ul>
        {comments.map((comment) => {
          return <li key={comment.id}>{comment.body}</li>;
        })}
      </ul>
    </div>
  );
};

export default PostShow;
