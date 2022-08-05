import { useEffect, useState } from 'react'
import Spinner from './components/Spinner'

import './App.css'

function App() {
  const [resourceType, setResourceType] = useState("users")
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    setItems([]);
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
  }, [resourceType])

  useEffect(() => {
    if(items.length > 0 ) {
      setIsLoading(false);
    }
  }, [items])

  return (<>
    <div className='button-container'>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    {isLoading ? <Spinner /> : (<div className='card'>
      {resourceType === "users" ? items.map((item) => {
        return <div className='card-item' key={item.id}>
          <p>Name :{item.name}</p>
          <p>User Name :{item.username}</p>
          <p>Email :{item.email}</p>
          <p>Website :{item.website}</p>
        </div>
      }) : ""
      }
      {resourceType === "posts" ? items.map((item) => {
        return <div className='card-item' key={item.id}>
          <p>Post title :{item.title}</p>
          <p>Post body :{item.body}</p>
        </div>
      }) : ""
      }
      {resourceType === "comments" ? items.map((item) => {
        return <div className='card-item' key={item.id}>
          <p>Name :{item.name}</p>
          <p>Email :{item.email}</p>
          <p>Comments :{item.body}</p>
        </div>
      }) : ""
      }
    </div>
    )}
  </>
  )
}

export default App
