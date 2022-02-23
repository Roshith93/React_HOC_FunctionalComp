import React, { useState, useEffect } from 'react'

const UserListIND = () => {
  const [todos, setTodos] = useState([])
  const [term, setTerm] = useState('')
  const fetchData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const json = await res.json()
    setTodos(json)
  }
  useEffect(() => {
    fetchData()
  }, [])
  let filteredTodo = todos && todos.slice(0, 10)
    .filter(({ title }) =>  title.indexOf(term) >= 0)
    .map(({ title }) => <h2>{title}</h2>)
  return (
    <div>
      <h2>User Todo</h2>
      <input
        type='text'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {filteredTodo}
    </div>
  )
}
export default UserListIND
