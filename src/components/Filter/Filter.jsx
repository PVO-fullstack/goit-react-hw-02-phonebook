import React, { Component } from 'react';

export class Filter extends Component {
  hendleFilterInput = e => {
    const q = e.currentTarget.value;
    this.props.onChange(q);
  };

  render() {
    return (
      <div>
        <label>
          Finds contacts by name
          <input type="text" onChange={this.hendleFilterInput} />
        </label>
      </div>
    );
  }
}
