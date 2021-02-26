import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionForm from './QuestionForm';

const Questions = ({
  auth: { user },
}) => {
  // redirect if logged in user is not admin as every user is identified by unique email id/ could also use user._id
if(user && user.email !== "admin@admin.com"){
  return <Redirect to="/dashboard" />;
}
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