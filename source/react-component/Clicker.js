import { hot } from 'react-hot-loader/root';
import React from 'react';
// import ReactDOM from 'react-dom';

Styles
import Styles from './postcss.css';
import Sass from './styles.scss';
import Less from './styles.less';
import kitty from '../theme/images/kitty.jpg';
import { ReactComponent as ReactLogoComponent } from '../theme/images/react.svg';
import reactLogo from '../theme/images/react.svg';

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
        {/* <ReactApp viewBox={"0 0 256 230"} width={100} /> */}
        <ReactLogoComponent viewBox={"0 0 256 230"} width={100} />
        <img src = { reactLogo } />
        <img src = {kitty} />
        <h1>Count: {count}</h1>
        <div style = {{'display': 'flex'}}>
          <p className={Sass.test}>Sass testing</p>
          <p className={Less.test}>Less testing</p>
        </div>
        <Button onClick = { this.inc }>Inc+</Button>
        <Button onClick = { this.dec }>Dec-</Button>
      </section>
    );
  }
}
// );

export default hot(Clicker);
