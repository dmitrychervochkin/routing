import { useParams, useNavigate, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import styles from '../App.module.css'
import { EditTodo } from "./EditTodo";
import { NotFoundPage } from "./NotFoundPage";

export function TodoPage({editTodo, deleteTodo, ...todos}){
	const [element, setElement] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isEdit, setIsEdit] = useState(false);

	const params = useParams();

	function handleEdit(){
		setIsEdit((prevState) => !prevState)
	};

	function getTodoElement(id){
		fetch(`http://localhost:3005/todos/${id}`)
			.then((responce) => responce.json())
			.then((data) => {
				setElement(data)
			})
			.finally();
	}

	useEffect(() => {
		setIsLoading(true);
		getTodoElement(params.id);
	}, [element]);

	let navigate = useNavigate();

	function handleDelete(target){
		deleteTodo(target);
		navigate(-1);
	}

	return(
		<>
			{isEdit ? (
				<EditTodo {...element} handleEdit={handleEdit} editTodo={editTodo} />
			) : (
				<>
					<div className={styles.TodoTitleInside}>{element.title}</div>
					<div>
						<button
							onClick={handleEdit}
							className={styles.btn}
						>
							Edit
						</button>
						<button
							id={element.id}
							onClick={handleDelete}
							className={styles.btn}
						>
							Delete
						</button>
					</div>
				</>
			)}
		</>
	)
}
