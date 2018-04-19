// Code ThemedDecoration Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class ThemedDecorations extends React.Component {
  render () {
    const d = this.props.theme;
    const childrenWithClassName = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return (
      <div>
        { childrenWithClassName }
      </div>
    )
  }
}
export default ThemedDecorations;