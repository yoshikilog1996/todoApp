interface Todo {
  id: number,
  title: string,
  isDone: boolean
}

type HandleAddTodo = (title: string) => void

export type {
  Todo,
  HandleAddTodo,
}