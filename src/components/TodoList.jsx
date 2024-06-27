function TodoList(props) {
    return (
        <ul>
        <li className="flex-box">
          {props.text}
          <div>
            <button>edit</button>
            <button>del</button>
          </div>
        </li>
        </ul>
    )
}

export default TodoList;