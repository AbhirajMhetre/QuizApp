import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = ({
  auth: { user },
}) => {
  
  return(
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user && user.name}
      </p>
      <Link to="/quiz/easy" className='btn btn-primary my-1'>EASY</Link>
      <Link to="/quiz/intermediate" className='btn btn-primary my-1'>INTERMEDIATE</Link>
      <Link to="/quiz/expert" className='btn btn-primary my-1'>EXPERT</Link>
 
    </Fragment>
  )
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps
)(Dashboard);