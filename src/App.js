import './App.css'
import SearchUser  from './component/UserList'
import SearchTodo from './component/UserTodo'

function App() {
  return (
    <>
      <div className='section'>
        <div>
          <SearchUser />
        </div>
        <div>
          <SearchTodo />
        </div>
      </div>
      {/* <div className="section">
   </div> */}
    </>
  )
}

export default App
