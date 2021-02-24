import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionForm from './QuestionForm';

const Questions = ({
  auth: { user },
}) => {
  
  return(
    <Fragment>
      <h1 className='large text-primary'>Create quiz questions</h1>
      <QuestionForm />
    </Fragment>
 
  )
};

Questions.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps
)(Questions);