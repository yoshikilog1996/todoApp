import { useState } from "react";
import { OnAddTodo } from "./types";

export default function AddTodo({ onAddTodo }: { onAddTodo: OnAddTodo }) {
	const [title, setTitle] = useState("")

	function handleAddClick() {
		if (title !== "") {
			setTitle("")
			onAddTodo(title)
		}
	}

	return (
		<div>
			<input type="text" value={title} onChange={e => setTitle(e.target.value)} />
			<button
				onClick={handleAddClick}
			>
				add
			</button>
		</div>
	)
}