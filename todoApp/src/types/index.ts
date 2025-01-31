interface Todo {
    id: number,
    title: string,
    done: boolean
}

type AddTodoProps = (title: string) => void

type OnChangeTodoProps = (todo:Todo) => void

type OnDeleteTodoProps = (todoId:number) => void

export type {
    Todo,
    AddTodoProps,
		OnChangeTodoProps,
		OnDeleteTodoProps
}