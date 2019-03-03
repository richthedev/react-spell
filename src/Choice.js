import React from 'react';
import styled from 'styled-components';
import uniqueId from './uniqueId';

const StyledChoice = styled.span`
  margin-right: 1rem;
`;

export default class Choice extends React.Component {
  constructor(props) {
    super(props);
    this.id = uniqueId(this.props.name);
  }

  onChange = (e) => {
    if (e.target.checked) {
      this.props.onSelected();
    }
  }

  render() {
    return (
      <StyledChoice>
        <label htmlFor={this.id}>{this.props.children}</label>
        <input
          type="radio"
          id={this.id}
          name={this.props.name}
          checked={this.props.checked}
          onChange={this.onChange} />
      </StyledChoice>
    )
  }
}
