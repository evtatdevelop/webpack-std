import { hot } from 'react-hot-loader/root';
import React from 'react';
// import ReactDOM from 'react-dom';

Styles
import Styles from './postcss.css';
import kitty from '../theme/images/kitty.jpg';
// import { ReactComponent as ReactLogoComponent } from '../theme/images/react.svg';
// import reactLogo from '../theme/images/react.svg';

// console.log(ReactLogoComponent);
// console.log(reactLogo);

import { Button } from './Button';

class Clicker extends React.Component {
  state = {
    count: 34,
  };

  inc = () => void this.setState(({ count }) => ({ count: count + 1 }));
  dec = () => void this.setState(({ count }) => ({ count: count - 1 }));

  render() {
    const { count } = this.state;

// throw new Error('Boom!');

    return (
      <section
        className={Styles.clicker}
        style = {{
           '--mainColor': 'rebeccapurple',
           '--headingFontSize': this.state.count + 'px',
        }}
      >
        {/* <ReactLogoComponent /> */}
        {/* <img src = { reactLogo } /> */}
        <img src = {kitty} />
        <h1>Count: {count}</h1>
        <Button onClick = { this.inc }>Inc+</Button>
        <Button onClick = { this.dec }>Dec-</Button>
      </section>
    );
  }
}
// );

export default hot(Clicker);
