
// import component from './simple-components/dom';
// // import 'style-loader!css-loader!./theme/main.css';
import './theme/main.css';

// // const element = component();
// let element = component(); // Дополнительные настройки на клиенте для hotreloading (РАБОТАЕТ БЕЗ НИХ)

// document.body.appendChild(element);

// // Дополнительные настройки на клиенте для hotreloading (РАБОТАЕТ БЕЗ НИХ)
// if (module.hot) {
//   module.hot.accept('./simple-components/dom', function() {
//     document.body.removeChild(element);
//     element = component();
//     document.body.appendChild(element);
//   });
// }


// import './simple-components/javascript';

// if (process.env.NODE_ENV === 'development') {
//   console.log('-> development');
// }

console.log('__ENV__', __ENV__);
console.log('__DEV__', __DEV__);
console.log('__STAGE__', __STAGE__);
console.log('__PROD__', __PROD__);

// if (__DEV__) {
// }
// if (__PROD__) {
// }

import './react-component';
