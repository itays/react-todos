import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Link extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.context.linkHandler(this.props.to);
  }
  render() {
    const activeClass = this.context.route === this.props.to ? 'active' : '';
    return <a className={activeClass} href="#" onClick={this.handleClick}>{this.props.children}</a>
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
};
Link.contextTypes = {
  route: PropTypes.string,
  linkHandler: PropTypes.func
}