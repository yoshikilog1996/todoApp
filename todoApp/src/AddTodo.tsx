import { useState } from "react";
import { HandleAddTodo } from "./types";

export default function AddTodo({ handleAddTodo }: { handleAddTodo: HandleAddTodo }) {
	const [title, setTitle] = useState("")

	function handleAddClick() {
		if (title !== "") {
			setTitle("")
			handleAddTodo(title)
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