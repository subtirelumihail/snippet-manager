import React, { Component, PropTypes } from 'react';
import {connect}            from 'react-redux';

//Loader svg
import loading from 'images/ripple.gif';

class Loading extends Component {
  render() {
    const {isLoading, children} = this.props;
    
    return (
      <div className="loading">
        {isLoading ? <div className="loading-container"><img src={loading} /></div> : children}
      </div>
    );
  }
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(Loading);
