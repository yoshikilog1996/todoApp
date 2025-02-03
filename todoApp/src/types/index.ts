interface Todo {
    id: number,
    title: string,
    isDone: boolean
}

type OnAddTodo = (title: string) => void

export type {
  Todo,
  OnAddTodo,
}