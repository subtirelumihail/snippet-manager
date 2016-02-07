import React, { Component, PropTypes } from 'react';
import {connect}                       from 'react-redux';
// import { Link }                        from 'react-router';


import {toggleModal} from 'actions';

class Head extends Component {
  renderSaveButton() {
    const {canSave, openModal} = this.props;
    
    if (!canSave) {
      return null;
    }
    
    return (
      <span className="header-item" onClick={openModal}>
        <a className="button is-success" href="#">
          <i className="fa fa-save"></i>
          &nbsp;Save
        </a>
      </span>
    );
  }
  
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header-left">
            <a className="logo header-item" href="#">SNIP</a>
            <a className="header-tab" href="#">Snippets</a>
          </div>
          <div className="header-right">
            {this.renderSaveButton()}
            <span className="header-item">
              {/*
                TODO: replace this if a react router link and add a method to
                create a new instance for the snippet editor
              */}
              <a className="button is-primary" href="/new">
                <i className="fa fa-edit"></i>
                &nbsp;New
              </a>
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
  return {
    canSave: state.canSave
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
