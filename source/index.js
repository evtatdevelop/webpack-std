import moment from 'moment';
const now = moment.now();

import component from './simple-components/dom';
// import './theme/main.css';

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./simple-components/dom', function() {
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}


// import './simple-components/javascript';

// console.log('__ENV__', __ENV__);
// console.log('__DEV__', __DEV__);
// console.log('__STAGE__', __STAGE__);
// console.log('__PROD__', __PROD__);

// if (__DEV__) {
// }
// if (__PROD__) {
// }

// import './react-component';
