import React, { Component, PropTypes } from 'react';
import {connect}                       from 'react-redux';
import { Link }                        from 'react-router';

// Load redux actions
import {toggleModal} from 'actions';

class Head extends Component {
  renderSaveButton() {
    const {canSave, openModal} = this.props;
    
    if (!canSave) {
      return null;
    }
    
    return (
      <span className="header-item" onClick={openModal}>
        <span className="button is-success">
          <i className="fa fa-save"></i>
          &nbsp;Save
        </span>
      </span>
    );
  }
  
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header-left">
            <Link className="logo header-item" to="/">SNIPJS</Link>
            <Link className="header-tab" to="/list">Snippets</Link>
          </div>
          <div className="header-right">
            {this.renderSaveButton()}
            <span className="header-item">
              <Link className="button is-primary" to="/new">
                <i className="fa fa-edit"></i>
                &nbsp;New
              </Link>
            </span>
          </div>
        </div>
      </header>
    );
  }
}

Head.propTypes = {
  canSave: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const {canSave} = state;
  return {
    canSave
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      dispatch(toggleModal());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Head);
