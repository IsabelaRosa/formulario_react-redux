import React from 'react';
import { connect } from 'react-redux';



class Input extends React.Component {
  render() {
    const { placeholderText, name, onChange, value } = this.props;
    return (
      <div>
        <input type="text"
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholderText} />
      </div>
    );
  }
}


export default Input;
