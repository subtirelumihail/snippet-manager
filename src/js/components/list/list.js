import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Link }  from 'react-router';

import Loading from 'components/loading';

import {loadingStart, loadingStop, loadSnippets} from 'actions';
import {getSnippets}   from 'services';

class List extends Component {
  componentWillMount() {
    const {loadingStart, handleGetSnippets} = this.props;
    
    loadingStart();
    getSnippets(handleGetSnippets);
  }
  
  renderListItem(snippet, index) {
    const {title, url, description} = snippet;
    
    return (
      <tr key={`${url}-${index}`}>
        <td className="is-cell-narrow">{title}</td>
        <td className="is-cell-narrow"><Link to={`/${url}`}>/{url}</Link></td>
        <td>{description}</td>
      </tr>
    );
  }
  
  renderList() {
    const { snippets } = this.props;
    
    if (!Object.keys(snippets).length) {
      return (<div>No snippets found!</div>);
    }
    
    const listItems = snippets.map(this.renderListItem);
    
    return (
      <table className="table is-narrow">
        <thead>
          <tr>
            <th className="is-cell-narrow">Name</th>
            <th className="is-cell-narrow">Link</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>
      </table>
  );
  }
  
  render() {
    return (
      <Loading>
        <div className="snippet-list">
          {this.renderList()}
        </div>
      </Loading>
    );
  }
}

List.propTypes = {
  snippets: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    snippets: state.snippets
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    loadingStart: () => {
      dispatch(loadingStart());
    },
    
    handleGetSnippets: (data) => {
      const snippets = data.val();
      
      dispatch(loadSnippets(snippets));
      dispatch(loadingStop());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
