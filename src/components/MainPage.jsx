import styles from '../App.module.css';
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import { InputSearch } from './InputSearch';

export function MainPage({ searchQuery, setSearchQuery, sortTodos, isLoading, addTodo, note, setNote, todos, completeTodo}){
	return(
		<div>
			<div className={styles.others}>
				<InputSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
				<button onClick={sortTodos} className={styles.sortBtn}>Sort cases</button>
			</div>

			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<>
					<TodoInput addTodo={addTodo} note={note} setNote={setNote}/>
					<TodoList
						data={todos}
						completeTodo={completeTodo}
					/> 
				</>
					)}
		</div>
	)
}
