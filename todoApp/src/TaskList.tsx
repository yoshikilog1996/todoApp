import { Todo, HandleChangeTodo } from './types'

export default function TaskList(
	{ todos, handleChangeTodo }: { todos: Todo[]; handleChangeTodo: HandleChangeTodo }) {

	return (
		<div>
			<ul>
				{todos.map(todo =>
					<li key={todo.id}>
						<Task
							todo={todo}
							handleChangeTodo={handleChangeTodo}
						/>
					</li>
				)}
			</ul>
		</div>
	)
}

function Task(
	{ todo, handleChangeTodo }: { todo: Todo; handleChangeTodo: HandleChangeTodo }
) {

	function handleChangeClick() {
		handleChangeTodo({
			...todo,
			isDone: !todo.isDone
		})
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
		</>
	)
}
