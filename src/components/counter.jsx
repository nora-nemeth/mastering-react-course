import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.doHandleIncrement = this.doHandleIncrement.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && 'please create a new tag'}
        {this.rendertags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }

  rendertags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }

  handleIncrement(product) {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  }

  /* 
    OR: Arrow functions don't rebind this, it inherits, so if we modify the handleIncrement function
    to an arrow function, it will also solve the this reference problem:

    handleIncrement = () => {
      console.log(this);
    }

    In this way this will reference to the current Object (Counter)
    */

  doHandleIncrement() {
    this.handleIncrement({ id: 1 });
  }
}

export default Counter;
