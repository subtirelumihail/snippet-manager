import React, { Component, PropTypes } from 'react';
import {connect}        from 'react-redux';
import c                from 'classnames';
import slug             from 'slug';

// Load components
import Textarea   from 'react-textarea-autosize';
import Modal      from 'react-modal';

// Load redux actions
import {canSave, toggleModal, toggleSaving, saveSuccesfully} from 'actions';

// Load the db services
import {saveSnippet}   from 'services';

class Snippet extends Component {
  constructor(props) {
    super(props);
    this.saveSnippet = this.saveSnippet.bind(this);
  }
  
  saveSnippet() {
    const {title, author, description, content} = this.refs;
    const url = slug(title.value.toLowerCase());
    
    this.props.startSaving();
    
    saveSnippet({
      title:        title.value,
      author:       author.value,
      description:  description.value,
      content:      content.value,
      date_added:   Date.now(),
      url
    }, this.props.handleOnSaveSuccesfully.bind(null, url));
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
    
    const {modalOpen, closeModal, isSaving} = this.props;
    const saveButtonStyle = c("button", "is-primary", {
      "is-loading": isSaving
    });
    
    return (
      <Modal isOpen={modalOpen} style={customStyles}>
        <div className="snippet-saveForm">
          <p className="control">
            <input ref="title" className="input" type="text" disabled={isSaving} placeholder="Title"/>
          </p>
          <p className="control">
            <input ref="author" className="input" type="text" disabled={isSaving} placeholder="Author"/>
          </p>
          <p className="control">
            <textarea ref="description" className="textarea" disabled={isSaving} placeholder="Description"></textarea>
          </p>
          <p className="control">
            <button className={saveButtonStyle} disabled={isSaving} onClick={this.saveSnippet}>{isSaving ? ' ' : 'Save'}</button>
            &nbsp;
            <button className="button" disabled={isSaving} onClick={closeModal}>Cancel</button>
          </p>
        </div>
      </Modal>
    );
  }
  
  render() {
    const {handleOnChange} = this.props;
    return (
      <div className="snippet">
        <div className="snippet-container">
          <Textarea ref="content" defaultValue="" className="snippet-editor" placeholder="Paste here..." onChange={handleOnChange}/>
        </div>
        {this.renderSaveForm()}
      </div>
    );
  }
}

Snippet.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  isSaving: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    modalOpen: state.modalOpen,
    isSaving: state.isSaving
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(toggleModal());
    },
    
    startSaving: () => {
      dispatch(toggleSaving());
    },
    
    handleOnChange: (e) => {
      dispatch(canSave(e.target.value));
    },
    
    handleOnSaveSuccesfully: (url) => {
      dispatch(saveSuccesfully(url));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Snippet);
