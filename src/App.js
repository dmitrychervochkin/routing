import {TodosPage} from './components/TodosPage.jsx';
import styles from './App.module.css';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
import { TodoPage } from './components/TodoPage.jsx';

export function App(){

	return (
		<>
		<div className={styles.App}>
			<TodosPage/>

		</div>

		</>
	);
}

// json-server --watch src/db.json --port 3005
