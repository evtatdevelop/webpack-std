import { hot } from 'react-hot-loader/root';
import React from 'react';
// import ReactDOM from 'react-dom';

Styles
import Styles from './postcss.css';

class Clicker extends React.Component {
  state = {
    count: 34,
  };

  inc = () => void this.setState(({ count }) => ({ count: count + 1 }));
  dec = () => void this.setState(({ count }) => ({ count: count - 1 }));

  render() {
    const { count } = this.state;

    return (
      <section
        className={Styles.clicker}
        style = {{
           '--mainColor': 'rebeccapurple',
           '--headingFontSize': this.state.count + 'px',
        }}
      >
        <h1>Count: {count}</h1>
        <button onClick = { this.inc }>Inc</button>
        <button onClick = { this.dec }>Dec</button>
      </section>
    );
  }
}
// );

export default hot(Clicker);
