function TodoItem({ todo, todoId, isDone, handleDelete, handleDone }) {
    return (
        <div className="todoItem" id={ todoId } onClick={ handleDone }>
            <span className="btnDel" onClick={ handleDelete }>❌</span>
            <li className={ isDone ? 'done' : '' } onClick={(e) => e.stopPropagation()}>{ todo }</li>
        </div>
    );
}

export default TodoItem;