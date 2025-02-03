import { useState } from 'react'
import { Todo } from './types'
import AddTodo from './AddTodo'

const initialTodos: Todo[] = []
let id = 0

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  function handleAddTodo(title: string) {
    if (title) {
      setTodos([
        ...todos,
        {
          id: ++id,
          title: title,
          isDone: false
        }
      ])
      console.log(id)
    }
  }

  return (
    <>
      <h1>todoApp</h1>
      <AddTodo onAddTodo={handleAddTodo} />
    </>
  )
}

export default App
