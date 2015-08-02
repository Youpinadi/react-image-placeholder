# react-image-placeholder
A simple placeholder component that uses some of the many placeholder sites + some funky components for the swag.

Why?
==============
There are many placeholder site here, i regrouped them for you in a nice little component, and his little brothers (NicolasCage, BillMurray, StevenSeagal, IceIceBaby).

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


Usage:
==============

```javascript
import ImagePlaceholder, {NicolasCage, BillMurray, StevenSeagal, TheHoff, IceIceBaby} from './image-placeholder/image-placeholder';

React.render(
  <div>
    <NicolasCage/>
    <br/>
    <BillMurray/>
    <br/>
    <StevenSeagal/>
    <br/>
    <StevenSeagal/>
    <br/>
    <ImagePlaceholder type="beer" width={300} height={300} />
    <br/>
    <ImagePlaceholder text="my text" width={600} height={400} />
  </div>, 
  document.getElementById('root')
);
```
