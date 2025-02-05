// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachItem, onDeleteTodo} = props
  const {id, title} = eachItem
  const onDelelteBtn = () => {
    onDeleteTodo(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button
        type="button"
        className="delete-btn"
        key={id}
        onClick={onDelelteBtn}
      >
        Delete
      </button>
    </li>
  )
}
export default TodoItem
