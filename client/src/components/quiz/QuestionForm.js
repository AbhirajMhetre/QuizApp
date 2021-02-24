import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddQuestion } from '../../actions/quiz';

const QuestionForm = ({ AddQuestion }) => {
  const [ formData, setFormData] = useState({
      level:'',
      QuestionStatement:'',
      Option1:'',
      Option2:'',
      Option3:'',
      Option4:'',
      Marks:'',
      Answer:''
  });

  const {
      level,
      QuestionStatement,
      Option1,
      Option2,
      Option3,
      Option4,
      Marks,
      Answer
  } = formData;

  const onChange = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value });
const onSubmit = e => {
  e.preventDefault();
  AddQuestion(formData);
};

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Add Question</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => onSubmit(e)}
      >
          <div className='form-group'>
                <label htmlFor="level">Question Level</label>
                <select name="level" value={level} onChange={e => onChange(e)}>
                    <option value="None"></option>
                    <option value="easy">Easy</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                </select>
            </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Question Statement'
            name='QuestionStatement'
            value={QuestionStatement}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Option1'
            name='Option1'
            value={Option1}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Option2'
            name='Option2'
            value={Option2}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Option3'
            name='Option3'
            value={Option3}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Option4'
            name='Option4'
            value={Option4}
            onChange={e => onChange(e)}
          />
        </div> 
        <div className='form-group'>
          <input
            type='number'
            placeholder='Marks Weightage'
            name='Marks'
            value={Marks}
            onChange={e => onChange(e)}
          />
        </div> 
        <div className='form-group'>
                <label htmlFor="Answer">Correct Answer</label>
                <select name="Answer" value={Answer} onChange={e => onChange(e)}>
                    <option value="None"></option>
                    <option value="Option1">Option1</option>
                    <option value="Option2">Option2</option>
                    <option value="Option3">Option3</option>
                    <option value="Option4">Option4</option>
                </select>
            </div>      
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

QuestionForm.propTypes = {
  AddQuestion: PropTypes.func.isRequired
};

export default connect(
  null,
  { AddQuestion }
)(QuestionForm);