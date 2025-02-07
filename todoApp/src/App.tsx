import { useRef, useState } from 'react'
import { Todo } from './types'
import AddTodo from './AddTodo'

const initialTodos: Todo[] = []

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const idRef = useRef(0)

  function handleAddTodo(title: string) {
    if (title) {
      idRef.current += 1
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: idRef.current,
          title,
          isDone: false
        }
      ])
    }
  }

  return (
    <>
      <h1>todoApp</h1>
      <AddTodo handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
