# react-image-placeholder
A simple image placeholder component that uses some of the many placeholder sites + some funky components for the swag.

Why?
==============
There are many placeholder site here, i regrouped them for you in a nice little component, and his little brothers (NicolasCage, BillMurray, StevenSeagal, VanillaIce).

ImagePlaceholder uses the following sites:

- http://www.placecage.com
- http://www.fillmurray.com
- http://www.stevensegallery.com
- http://place-hoff.com
- http://nicenicejpg.com
- http://baconmockup.com
- http://placebeard.it
- http://beerhold.it

and 

- http://lorempixel.com for everything more generic

Installation
==============
```bash
npm install react-image-placeholder
```

Usage (ES6 + JSX):
==============

```javascript
import ImagePlaceholder, {NicolasCage, BillMurray, StevenSeagal, TheHoff, VanillaIce} from './image-placeholder/image-placeholder';

React.render(
  <div>
    <NicolasCage width="200" height="200"/>
    <BillMurray/>
    <StevenSeagal/>
    <VanillaIce/>
    <TheHoff/>
    <ImagePlaceholder type="beer" width="300" height="300" />
    <ImagePlaceholder text="my text" width="600" height="400" />
  </div>, 
  document.getElementById('root')
);
```

![Image of Nicolas Cage](http://www.placecage.com/300/300)
