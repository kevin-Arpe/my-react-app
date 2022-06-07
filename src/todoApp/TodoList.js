import TodoItem from './TodoItem';

function TodoList({ todoList, handleDelete, handleDone }) {
    return (
        <ul>
            { todoList.map((item) => <TodoItem isDone={ item.isDone } todo={ item.value } todoId={ item.id } key={ item.id + '' + Math.ceil(Math.random()*100) } handleDelete={ handleDelete } handleDone={ handleDone } />) }
        </ul>
    );
}

export default TodoList;