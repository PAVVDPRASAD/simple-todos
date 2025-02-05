import {Component} from 'react'

import './index.css'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todo: initialTodosList}

  deleteTodo = id => {
    const {todo} = this.state
    const filterDeleteTodo = todo.filter(itemTodo => itemTodo.id !== id)
    this.setState({todo: filterDeleteTodo})
  }

  render() {
    const {todo} = this.state
    return (
      <div className="bg_color">
        <div className="todos_bg">
          <h1>Simple Todos</h1>
          <u1>
            {todo.map(eachItem => (
              <TodoItem
                key={eachItem.id}
                onDeleteTodo={this.deleteTodo}
                eachItem={eachItem}
              />
            ))}
          </u1>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
