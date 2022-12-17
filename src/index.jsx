import React, { Component } from 'react';

export default class ImagePlaceholder extends Component {
  render() {
    let rand = 150 + Math.round(Math.random() * 150);
    let w = this.props.width || rand;
    let h = this.props.height || rand;
    let types = {
      'bacon': `http://baconmockup.com/${w}/${h}`,
      'beard': `http://placebeard.it/${w}/${h}`,

      'cats': `http://lorempixel.com/${w}/${h}/cats`,
      'nature': `http://lorempixel.com/${w}/${h}/nature`,
      'sports': `http://lorempixel.com/${w}/${h}/sports`,
      'food': `http://lorempixel.com/${w}/${h}/food`,
      'technics': `http://lorempixel.com/${w}/${h}/technics`,
      'people': `http://lorempixel.com/${w}/${h}/people`,
      'business': `http://lorempixel.com/${w}/${h}/business`,
      'city': `http://lorempixel.com/${w}/${h}/city`,
      'unsplash' : `https://unsplash.it/${w}/${h}?random`

    };

    let src;
    if (this.props.text){
      src = `http://dummyimage.com/${w}x${h}/000000/FFFFFF?text=${this.props.text}`;
    } else if (types[this.props.type]){
        src = types[this.props.type];
    } else {
        src = `http://dummyimage.com/${w}x${h}/000000/FFFFFF?text=${this.props.type}`;
    }

    return (<img src={src} width={w} height={h} style={ {backgroundColor: '#000'} } />);
  }
}
ImagePlaceholder.defaultProps = {width: 150, height: 150, type: 'nature'};
ImagePlaceholder.propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    type: React.PropTypes.string
};