import React, { Component, PropTypes } from 'react';
import {connect}            from 'react-redux';
import SyntaxHighlighter    from 'react-syntax-highlighter';

import Loading from 'components/loading';

import {loadingStart, loadingStop, loadSnippet} from 'actions';
import {getSnippet}   from 'services';

class SnippetView extends Component {
  componentWillMount() {
    const {params, handleGetSnippet, loadingStart} = this.props;
    loadingStart();
    getSnippet(params.url, handleGetSnippet);
  }
  
  renderSnippet() {
    const {snippet} = this.props;
    
    if (!Object.keys(snippet).length) {
      return <div>No snippet found!</div>;
    }
    
    const {title, author, description, content} = snippet[Object.keys(snippet)[0]];
    
    return (
      <div className="snippet">
        <div className="snippet-details">
          <h1 className="title">{title}</h1>
          <p className="subtitle">by {author}</p>
          <p className="snippet-description">{description}</p>
        </div>
        <div className="snippet-container">
          <div className="snippet-view">
            <SyntaxHighlighter language='javascript' stylesheet='solarized-light'>
              {content}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
  
  render() {
    return (
      <Loading>
        <div className="snippet">
          {this.renderSnippet()}
        </div>
      </Loading>
    );
  }
}

SnippetView.propTypes = {
  snippet: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    snippet: state.snippet
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadingStart: () => {
      dispatch(loadingStart());
    },
    
    handleGetSnippet: (data) => {
      const snippet = data.val();
      dispatch(loadSnippet(snippet));
      dispatch(loadingStop());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SnippetView);
