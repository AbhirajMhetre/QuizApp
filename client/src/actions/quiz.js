import axios from 'axios';
import { setAlert } from './alert';
import {
  ADD_QUESTION,
  GET_QUESTIONS,
  QUESTION_ERROR,
  GET_RESULT,
  RESULT_ERROR
} from './types';

// Get questions
export const getQuestions = async (dispatch,level) => {
  try {
    const res = await axios.get(`/api/quiz/${level}`);
    dispatch({
      type: GET_QUESTIONS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: QUESTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Result
export const GetResult = async (dispatch,formData, level) => {
  const config = {
    headers: {
      'Content-Type': 'application/json' 
    }
  };

  try {
    const res = await axios.post(`/api/quiz/${level}`, formData, config);

    dispatch({
      type: GET_RESULT,
      payload: res.data
    });

    dispatch(setAlert('Quiz submitted successfully', 'success'));
  } catch (err) {
    dispatch({
      type: RESULT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Add question
export const AddQuestion = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json' 
    }
  };

  try {
    const res = await axios.post('/api/quiz', formData, config);

    dispatch({
      type: ADD_QUESTION,
      payload: res.data
    });

    dispatch(setAlert('Question Created', 'success'));
  } catch (err) {
    dispatch({
      type: QUESTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

