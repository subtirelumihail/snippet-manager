import React, { Component, PropTypes } from 'react';
import {connect}            from 'react-redux';

//import components
import Textarea             from 'react-textarea-autosize';
import Modal                from 'react-modal';

import {canSave, toggleModal} from 'actions';

class Snippet extends Component {
  renderDetails() {
    const {snippet} = this.props;
    
    if (!snippet) {
      return null;
    }
    
    return (
      <div className="snippet-details">
        <h2>{snippet.title}</h2>
        <p><b>Author:</b>{snippet.author}</p>
        <p><b>Description:</b>{snippet.description}</p>
      </div>
    );
  }
  
  renderSaveForm() {
    const customStyles = {
      overlay: {
        zIndex: 2,
      },
      content : {
        margin: '0 auto',
        maxWidth: '500px',
        maxHeight: '300px'
      }
    };
    
    const {modalOpen, closeModal} = this.props;
    
    return (
      <Modal isOpen={modalOpen} style={customStyles}>
        <div className="snippet-saveForm">
          <p className="control">
            <input className="input" type="text" placeholder="Title"/>
          </p>
          <p className="control">
            <input className="input" type="text" placeholder="Author"/>
          </p>
          <p className="control">
            <textarea className="textarea" placeholder="Description"></textarea>
          </p>
          <p className="control">
            <button className="button is-primary">Save</button>
            &nbsp;
            <button className="button" onClick={closeModal}>Cancel</button>
          </p>
        </div>
      </Modal>
    );
  }
  
  render() {
    const {handleOnChange} = this.props;
    return (
      <div className="snippet">
        {this.renderDetails()}
        <div className="snippet-container">
          <Textarea className="snippet-editor" placeholder="Paste here..." onChange={handleOnChange}/>
        </div>
        {this.renderSaveForm()}
      </div>
    );
  }
}

Snippet.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    modalOpen: state.modalOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(toggleModal());
    },
    
    handleOnChange: (e) => {
      dispatch(canSave(e.target.value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Snippet);
