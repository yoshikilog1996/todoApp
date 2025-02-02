interface Todo {
    id: number,
    title: string,
    done: boolean
}

type OnAddTodo = (title: string) => void

export type {
  Todo,
  OnAddTodo,
}