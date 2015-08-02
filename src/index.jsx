import React, { Component } from 'react';

export default class ImagePlaceholder extends Component {
  render() {
    let rand = 150 + Math.round(Math.random() * 150);
    let w = this.props.width || rand;
    let h = this.props.height || rand;
    let types = {
      'nicolas-cage': `http://www.placecage.com/${w}/${h}`,
      'bill-murray': `http://www.fillmurray.com/${w}/${h}`,
      'steven-seagal': `http://www.stevensegallery.com/${w}/${h}`,
      'the-hoff': `http://place-hoff.com/${w}/${h}`,
      'vanilla-ice': `http://nicenicejpg.com/${w}/${h}`,
      'bacon': `http://baconmockup.com/${w}/${h}`,
      'beard': `http://placebeard.it/${w}/${h}`,
      'beer': `http://beerhold.it/${w}/${h}`,

      'cats': `http://lorempixel.com/${w}/${h}/cats`,
      'nature': `http://lorempixel.com/${w}/${h}/nature`,
      'sports': `http://lorempixel.com/${w}/${h}/sports`,
      'food': `http://lorempixel.com/${w}/${h}/food`,
      'technics': `http://lorempixel.com/${w}/${h}/technics`,
      'people': `http://lorempixel.com/${w}/${h}/people`,
      'business': `http://lorempixel.com/${w}/${h}/business`,
      'city': `http://lorempixel.com/${w}/${h}/city`
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


export class NicolasCage extends ImagePlaceholder {}
NicolasCage.defaultProps = {type: 'nicolas-cage'};

export class BillMurray extends ImagePlaceholder {}
BillMurray.defaultProps = {type: 'bill-murray'};

export class StevenSeagal extends ImagePlaceholder {}
StevenSeagal.defaultProps = {type: 'steven-seagal'};

export class TheHoff extends ImagePlaceholder {}
TheHoff.defaultProps = {type: 'the-hoff'};

export class VanillaIce extends ImagePlaceholder {}
VanillaIce.defaultProps = {type: 'vanilla-ice'};
