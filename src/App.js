import React from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const tasks = [
  {
    name: "Make Todo List",
    id: 1,
    completed: false
  },
  {
    name: "Get this Todo List to Function",
    id: 2,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  toggleItem = itemId => {
  console.log(itemId);
  this.setState({
    tasks: this.state.tasks.map(item => {
      if (itemId === item.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })
  });
};

clearCompleted = e => {
  e.preventDefault();
  this.setState({
    tasks: this.state.tasks.filter(item => !item.completed)
  });
};

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} />
        </div>
      <TodoList 
        tasks={this.state.tasks}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
      />
      </div>
    );
  }
}

export default App;
