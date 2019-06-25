import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: [],
    days: [],
    time: [],
  }

  handleObjectName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleWeekOfDay = (e) => {
    this.setState({
      days: e.target.value
    })
  }

  handleSetTime = (e) => {
    this.setState({
      time: e.target.value
    })
  }

  onSelect = () => {
    this.setState({
      state: this.state.value
    })
  }

  render() {
    return (
      <>
      <form>
        <select name={this.state.name} onSelect={this.handleObjectName}>
            <option name="EP">ed.wczes.</option>
            <option name="english">j.angielski</option>
            <option name="IT">informatyka</option>
            <option name="PE">w-f</option>
            <option name="club">zaj.dod.</option>
        </select>
        <select days={this.state.days} onSelect={this.handleWeekOfDay}>
            <option days="monday">poniedziałek</option>
            <option days="tuesday">wtorek</option>
            <option days="wednesday">środa</option>
            <option days="thursday">czwartek</option>
            <option days="friday">piątek</option>
        </select>
        <select time={this.state.time} onSelect={this.handleSetTime}>
            <option time="8:00-8:45">8:00-8:45</option>
            <option time="8:55-9:40">8:55-9:40</option>
            <option time="9:50-10:35">9:50-10:35</option>
            <option time="10:50-11:35">10:50-11:35</option>
            <option time="11:45-12:30">11:45-12:30</option>
            <option time="12:45-13:30">12:45-13:30</option>
            <option time="13:35-14:20">13:35-14:20</option>
            <option time="14:25-15:10">14:25-15:10</option>
        </select>
        <button onSelect={this.state.value}>Dodaj</button>
      </form>
      </>
    );
  }
}

export default Form;