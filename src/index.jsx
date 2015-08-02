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
      'ice-ice-baby': `http://nicenicejpg.com/${w}/${h}`,
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

    let props = {
      width: w,
      height: h,
      style: {backgroundColor: '#000'},
      src: src
    };

    return (<img {...props} />);
  }
}


export class NicolasCage extends Component {
  render() {
    return (<ImagePlaceholder type="nicolas-cage" {...this.props}/>);
  }
}

export class BillMurray extends Component {
  render(){
    return (<ImagePlaceholder type="bill-murray" {...this.props}/>);
  }
}

export class StevenSeagal extends Component {
  render() {
    return (<ImagePlaceholder type="steven-seagal" {...this.props}/>);
  }
}

export class TheHoff extends Component {
  render() {
    return (<ImagePlaceholder type="the-hoff" {...this.props}/>);
  }
}

export class IceIceBaby extends Component {
  render() {
    return (<ImagePlaceholder type="ice-ice-baby" {...this.props}/>);
  }
}
