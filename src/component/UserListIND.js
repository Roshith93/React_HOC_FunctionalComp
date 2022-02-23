import React, { useState, useEffect } from 'react'

const UserListIND = () => {
  const [users, setUsers] = useState([])
  const [term, setTerm] = useState('')
  const fetchData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const json = await res.json()
    setUsers(json)
  }
  useEffect(() => {
    fetchData()
  }, [])
  let filteredData = users && users.slice(0, 10)
    .filter(({ name }) =>  name.indexOf(term) >= 0)
    .map(({ name }) => <h2>{name}</h2>)
  return (
    <div>
      <h2>User Lists</h2>
      <input
        type='text'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {filteredData}
    </div>
  )
}
export default UserListIND
