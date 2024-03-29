import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.newOption.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.newOption.value = '';
    };

  };

  render() {
    return (
      <div>
        {this.state.error && (
          <div>
            <p className="add-option-error">{this.state.error}</p>
          </div>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="newOption" placeholder="Add Option Here" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  };
};
