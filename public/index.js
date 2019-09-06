import ReactColorConfigurationModal from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    visible: true,
    value: ['#7B0600', '#9E4000', '#916400']
  };

  _onClick = (e) => {
    this.setState({ visible: true });
  };

  _onModalClick = (e) => {
    this.setState({ visible: false });
    console.log('on modal click');
  };

  _onChange = (e) => {
    console.log('on change!', e.target);
  };

  render() {
    const { value } = this.state;
    return (
      <div className="app-container">
        <button className="button" onClick={this._onClick}>
          ShowModal
        </button>
        <ReactColorConfigurationModal
          modal
          colorCfgOptions={{ current: '#7B0600' }}
          value={value}
          onChange={this._onChange}
          onModalClick={this._onModalClick}
          visible={this.state.visible}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
