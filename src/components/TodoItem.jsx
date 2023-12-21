import React, { useState } from "react";
import styles from '../App.module.css';
import { Link } from "react-router-dom";

export function TodoItem({ completeTodo, ...props }){


	function handleComplete({target}){
		completeTodo(props.id, target.checked)
	}

	return(
		<>
			<li className={styles.TodoTitle}>
				<input
					type="checkbox"
					className={styles.btnComplete}
					checked={props.completed}
					onChange={handleComplete}
				/>
				<span data-complete={props.completed}>
					<Link to={`/task/${props.id}`}>
						{props.title}
					</Link>
				</span>
			</li>
		</>
	)
}
