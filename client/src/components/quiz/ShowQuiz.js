import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import  { getQuestions, GetResult }  from '../../actions/quiz';

const Questions = (props) => {

  const [formData, setFormData] = useState({

  });
  const{} = formData;

  const onChange = e =>
  setFormData({ ...formData,[e.target.name]: e.target.value });

  const onSubmit = e => {
		e.preventDefault();
		props.GetResult(formData,props.match.params.level);

	};

  useEffect(() => {
    props.getQuestions( props.match.params.level );
  },[]);

const questions = props.question.questions;

  return (
    <Fragment>
     {props.question.loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {props.question.result != null ? (
            <div className="result-card">
              <Link className="cross-sign" to='/'>X</Link>
              <div>
              SCORE {props.question.result.result}/{props.question.result.total}
              </div>
            </div>
          ):(
            <div></div>
          )
        }
          <h1 className='large text-primary'>Quiz Time </h1>
            <form className='form my-1' onSubmit={e => onSubmit(e)}>
            {questions.length > 0 ? (
             questions.map((Onequestion,index) => (
                <div className='form-group' key={Onequestion._id}>
                  <h3 className="bg-primary">{Onequestion.QuestionStatement} <span className="marks">{Onequestion.Marks} Marks</span></h3>
                  <input type="radio" name={index} onChange={e => onChange(e)} value="Option1"/>
                  <label htmlFor="Option1">{" "}{Onequestion.Option1}</label><br/>

                  <input type="radio" name={index} onChange={e => onChange(e)} value="Option2"/>
                  <label htmlFor="Option2">{" "}{Onequestion.Option2}</label><br/>

                  <input type="radio" name={index} onChange={e => onChange(e)} value="Option3"/>
                  <label htmlFor="Option3">{" "}{Onequestion.Option3}</label><br/>

                  <input type="radio" name={index} onChange={e => onChange(e)} value="Option4"/>
                  <label htmlFor="Option4">{" "}{Onequestion.Option4}</label><br/>
                 
              </div>
              
              ))
 
            ) : (
              <h4>No questions found...</h4>
            )}
               <input type='submit' className='btn btn-dark my-1' value='Submit' />
              </form>
            </Fragment>
      )}
    </Fragment>
  );
};

Questions.propTypes = {
  getQuestions: PropTypes.func.isRequired,
  GetResult: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  question: state.quiz,
  result : state.quiz
});

const mapDispatchToProps = dispatch => ({
  getQuestions:  (level) => {
    getQuestions(dispatch,level);
  },
  GetResult: (formData,level) => {
    GetResult(dispatch,formData,level);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);