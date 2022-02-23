import React, { useState, useEffect } from 'react'

const HOC = (WrappedComponent, entity) => () => {
  return <HigherComp WrappedComponent={WrappedComponent} entity={entity} />
}

const HigherComp = ({ WrappedComponent, entity }) => {
  const [data, setData] = useState([])
  const [term, setTerm] = useState('')
  const fetchData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
    const json = await res.json()
    setData(json)
  }
  useEffect(() => {
    fetchData()
  }, [])

  let filteredData = data.slice(0, 10).filter((item) => {
    if (entity === 'users') {
      const { name } = item
      return name.indexOf(term) >= 0
    }
    if (entity === 'todos') {
      const { title } = item
      return title.indexOf(term) >= 0
    }
  })
  
  return (
    <div>
      <h2>{entity}</h2>
      <input
        type='text'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <WrappedComponent data={filteredData}></WrappedComponent>
    </div>
  )
}
export default HOC
