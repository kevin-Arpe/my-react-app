function TodoForm({ todo, onSubmit, onChange }) {
    return (
        <form id="todoForm" onSubmit={ onSubmit }>
            <input type="text" value={ todo } placeholder="Type your new todo" 
            onChange={ onChange } />
            <button>Add</button>
        </form>
    );
}

export default TodoForm;