import { Todo, HandleChangeTodo, HandleDeleteTodo } from './types'

export default function TaskList(
	{ todos, handleChangeTodo, handleDeleteTodo }:
		{ todos: Todo[]; handleChangeTodo: HandleChangeTodo; handleDeleteTodo: HandleDeleteTodo }) {

	return (
		<div>
			<ul>
				{todos.map(todo =>
					<li key={todo.id}>
						<Task
							todo={todo}
							handleChangeTodo={handleChangeTodo}
							handleDeleteTodo={handleDeleteTodo}
						/>
					</li>
				)}
			</ul>
		</div>
	)
}

function Task(
	{ todo, handleChangeTodo, handleDeleteTodo }:
		{ todo: Todo; handleChangeTodo: HandleChangeTodo; handleDeleteTodo: HandleDeleteTodo }
) {

	function handleChangeClick() {
		handleChangeTodo({
			...todo,
			isDone: !todo.isDone
		})
	}

	function handleDeleteClick() {
		handleDeleteTodo(todo)
	}

	return (
		<>
			<label>
				<input type="checkbox"
					checked={todo.isDone}
					onChange={handleChangeClick}
				/>
				{todo.title}
			</label>
			<button onClick={handleDeleteClick}>delete</button>
		</>
	)
}
