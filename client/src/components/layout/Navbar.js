import React, { Fragment } from 'react'
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


const Navbar = ({ auth: { user, isAuthenticated, loading }, logout }) => {

  const authLinks = (
    <ul>
      {user && user.email === "admin@admin.com" &&
            <li>
            <Link to="/quiz">
              <i className="fas fa-question" />{' '}
              <span className="hide-sm">Create Quiz</span>
            </Link>
          </li>
      }
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
    return (
        <nav className="navbar bg-dark">
        <h1>
          <Link to="/"><i className="fas fa-code"></i> MERN Quiz</Link>
        </h1>
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </nav>
    );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);