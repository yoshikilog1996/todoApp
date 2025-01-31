import { useState } from 'react'
import { Todo } from './types'
import AddTodo from './AddTodo'
import TaskList from './TaskList'


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
          done: false
        }
      ])
    }
  }

  function handleChangeTodo(todo: Todo) {
    setTodos(todos.map(t => (t.id === todo.id ? todo : t)))
  }

  function handleDeleteTodo(todoId: number) {
    setTodos(todos.filter(t => t.id != todoId))
  }

  return (
    <>
      <h1>todoApp</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  )
}

export default App
