# react-image-placeholder
A simple image placeholder component that uses some of the many placeholder sites + some funky components for the swag.

Why?
==============
There are many placeholder site here, i regrouped them for you in a nice little component.

ImagePlaceholder uses the following sites:

- http://baconmockup.com
- http://placebeard.it
- http://unsplash.it

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
import ImagePlaceholder from './image-placeholder/image-placeholder';

React.render(
  <div>
    <ImagePlaceholder type="beer" width="300" height="300" />
    <ImagePlaceholder text="my text" width="600" height="400" />
  </div>, 
  document.getElementById('root')
);
```