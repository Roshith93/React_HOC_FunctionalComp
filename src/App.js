import './App.css'
import SearchUser  from './component/UserList'
import SearchTodo from './component/UserTodo'
import UserListIND from './component/UserListIND'
import UserTodoIND from './component/UserTodoIND'

function App() {
  return (
    <>
      <div className='section'>
        <div>
          <SearchUser />
          <UserListIND />
        </div>
        <div>
          <SearchTodo />
          <UserTodoIND />
        </div>
      </div>
      {/* <div className="section">
   </div> */}
    </>
  )
}

export default App
