/* eslint no-param-reassign: 0 */
import React, { Component, PropTypes } from 'react';

export default class HeightMatchingGroup extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    selector: PropTypes.string,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    selector: '.match-height',
    tagName: 'span',
  }

  constructor({ tagName }) {
    super();
    this.RootTag = `${tagName}`;
  }

  componentDidMount() {
    window.addEventListener('resize', this.matchHeights);
    this.preloadAndRun();
  }

  componentDidUpdate() { this.preloadAndRun(); }

  componentWillUnmount() { window.removeEventListener('resize', this.matchHeights); }

  getContainerRef = node => { this.container = node; }

  getMaxHeight = els => Array.prototype.map.call(els, el => el.scrollHeight).reduce((pre, cur) => Math.max(pre, cur), -Infinity);

  loadImages = () => {
    const p = new Promise((resolve) => {
      const images = this.container.querySelectorAll('img');

      let loaded = 0;

      const handleImage = () => {
        loaded += 1;
        if (loaded === images.length) resolve();
      };

      images.forEach(image => {
        image.onload = handleImage;
      });
    });

    return p;
  };

  preloadAndRun = () => {
    this.loadImages().then(this.matchHeights);
    setTimeout(this.matchHeights, 0);
  }

  matchHeights = () => {
    const els = this.container.querySelectorAll(this.props.selector);
    els.forEach(el => { el.style.height = null; });
    const maxHeight = this.getMaxHeight(els);
    els.forEach(el => { el.style.height = `${maxHeight}px`; });
  }

  render = () => (
    <this.RootTag className={this.props.className} ref={this.getContainerRef}>
      {this.props.children}
    </this.RootTag>
  )
}
