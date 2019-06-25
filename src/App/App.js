import React, {Component} from 'react';
import Table from '../Table/Table';
import '../index';
import '../App/App.scss';

class App extends Component {

  state = {
      theme: false
  }

  handleClick = () => {
      this.setState({
          theme: !this.state.theme
      })
  }

  render() {
      const themeStyle = this.state.theme ? "princessTheme" : "minecraftTheme";

      return (
        <>
        <div className={themeStyle}>
          <h1>Plan lekcji</h1>
          <button onClick={this.handleClick}>{this.state.theme ? "Minecraft" : "Princess"}</button>
          <Table/>
        </div>
        </>
      )
  }
}

export default App;
