import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.isValid ? 'red' : 'black'};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.isValid ? 'red' : '#ccc'};
    background: ${props => props.isValid ? 'rgb(237, 168, 168);' : 'transparent'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const goalInputChangeHandler = event => {
    if (event.target.value.length > 0) {
      setIsValid(false);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(true);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${isValid ? 'invalid' : ''}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div> */}
      {/* // one way to do it is as follows: */}
      {/* <FormControl className={!isValid && 'invalid'}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </FormControl> */}
      {/* // the other way is to do it like this: */}
      <FormControl isValid={isValid}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
