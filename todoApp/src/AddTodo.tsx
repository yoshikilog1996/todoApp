import { useState } from "react";
import { OnAddTodo } from "./types";

export default function AddTodo({ onAddTodo }: { onAddTodo: OnAddTodo }) {
	const [title, setTitle] = useState("")

	return (
		<div>
			<input type="text" value={title} onChange={e => setTitle(e.target.value)} />
			<button
				onClick={() => {
					setTitle("")
					onAddTodo(title)
				}}
			>
				add
			</button>
		</div>
	)
}