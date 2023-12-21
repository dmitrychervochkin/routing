import React from "react";
import { TodoItem } from './TodoItem';
import { Link } from "react-router-dom";

export function TodoList({ completeTodo, data }){
	return(
		<ul>
			{data.map((todo) => (
				<TodoItem
					key={todo.id}
					{...todo}
					completeTodo={completeTodo}
				/>
			))}
		</ul>
	);
};
