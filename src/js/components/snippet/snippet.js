import React, { Component, PropTypes } from 'react';
import {connect}        from 'react-redux';
import c                from 'classnames';
import slug             from 'slug';

// Load components
import Textarea   from 'react-textarea-autosize';
import Modal      from 'react-modal';

// Load redux actions
import {
  canSave,
  toggleModal,
  toggleSaving,
  saveSuccesfully,
  updateContent,
  showErrors,
  hideErrors
} from 'actions';

// Load the db services
import {saveSnippet}   from 'services';

class Snippet extends Component {
  constructor(props) {
    super(props);
    this.saveSnippet = this.saveSnippet.bind(this);
  }
  
  saveSnippet() {
    const { handleSave } = this.props;
    const {title, author, description, content} = this.refs;
    const url = slug(title.value.toLowerCase());

    handleSave({
      title:        title.value,
      author:       author.value,
      description:  description.value,
      content:      content.value,
      date_added:   Date.now(),
      url
    });
  }
  
  renderErrorMessage() {
    const { hasError } = this.props;

    if (!hasError) {
      return null;
    }
    
    return (
      <div className="notification is-danger">
        <i className="fa fa-warning"></i>&nbsp;
        Please enter a title and a author
      </div>
    );
  }
  
  renderSaveForm() {
    
    //TODO: this should me moved to classes
    const customStyles = {
      overlay: {
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
      },
      content : {
        margin: '0 auto',
        maxWidth: '500px',
        bottom: 'auto'
      }
    };
    
    const {modalOpen, closeModal, isSaving} = this.props;
    const saveButtonStyle = c("button", "is-primary", {
      "is-loading": isSaving
    });
    
    return (
      <Modal isOpen={modalOpen} style={customStyles}>
        <div className="snippet-saveForm">
          <p className="subtitle">Save snippet</p>
          <p className="control">
            <input ref="title" className="input" type="text" disabled={isSaving} placeholder="Title"/>
          </p>
          <p className="control">
            <input ref="author" className="input" type="text" disabled={isSaving} placeholder="Author"/>
          </p>
          <p className="control">
            <textarea ref="description" className="textarea" disabled={isSaving} placeholder="Description"></textarea>
          </p>
          {this.renderErrorMessage()}
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
    const {handleOnChange, content} = this.props;
    return (
      <div className="snippet">
        <div className="snippet-container">
          <Textarea ref="content" defaultValue="" className="snippet-editor" placeholder="Paste here..." value={content} onChange={handleOnChange}/>
        </div>
        {this.renderSaveForm()}
      </div>
    );
  }
}

Snippet.propTypes = {
  content:    PropTypes.string.isRequired,
  modalOpen:  PropTypes.bool.isRequired,
  isSaving:   PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const {modalOpen, content, hasError, isSaving} =  state;
  
  return {
    modalOpen,
    content,
    hasError,
    isSaving
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(toggleModal());
    },
    
    handleOnChange: (e) => {
      const value = e.target.value;
      dispatch(canSave(value));
      dispatch(updateContent(value));
    },
  
    
    handleSave: (data) => {
      if (!data.title || !data.author) {
        dispatch(showErrors());
        return false;
      } else {
        dispatch(hideErrors());
      }
      
      dispatch(toggleSaving());
      saveSnippet(data, dispatch(saveSuccesfully(data.url)));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Snippet);
