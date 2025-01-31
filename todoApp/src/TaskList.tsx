import { useState } from 'react';
import { Todo, OnChangeTodoProps, OnDeleteTodoProps } from './types'

interface TaskOperate {
	onChangeTodo: OnChangeTodoProps,
	onDeleteTodo: OnDeleteTodoProps
}

interface TaskListProps extends TaskOperate {
	todos: Todo[]
}

interface TaskProps extends TaskOperate {
	todo: Todo
}

export default function TaskList(
	{ todos, onChangeTodo, onDeleteTodo }: TaskListProps) {

	return (
		<div>
			<ul>
				{todos.map(todo =>
					<li key={todo.id}>
						<Task todo={todo}
							onChangeTodo={onChangeTodo}
							onDeleteTodo={onDeleteTodo}
						/>
					</li>
				)}
			</ul>
		</div>
	)
}

function Task(
	{ todo, onChangeTodo, onDeleteTodo }: TaskProps
) {
	const [isEditing, setIsEditing] = useState(false)

	let todoContent
	if (isEditing) {
		todoContent = (
			<>
				<input type="text"
					value={todo.title}
					onChange={e => onChangeTodo({
						...todo,
						title: e.target.value
					})}
				/>
				<button onClick={() => setIsEditing(false)}>save</button>
			</>
		)
	} else {
		todoContent = (
			<>
				{todo.title}
				<button onClick={() => setIsEditing(true)}>edit</button>
			</>
		)
	}

	return (
		<>
			<label>
				<input type="checkbox"
					checked={todo.done}
					onChange={() => onChangeTodo({
						...todo,
						done: !todo.done
					})}
				/>
				{todoContent}
			</label>
			<button onClick={() => onDeleteTodo(todo.id)}>delete</button>
		</>
	)
}
