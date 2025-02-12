interface Todo {
    id: number,
    title: string,
    isDone: boolean
}

type HandleAddTodo = (title: string) => void

type HandleChangeTodo = (todo: Todo) => void

type HandleDeleteTodo = (todo: Todo) => void


export type {
    Todo,
    HandleAddTodo,
    HandleChangeTodo,
    HandleDeleteTodo
}