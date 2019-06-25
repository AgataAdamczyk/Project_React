import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject: '',
      days: '',
      time: '',
    };
  }

  handleChangeSubject = (e) => {
    this.setState({
      subject: e.target.value
    })
  }

  handleChangeDays = (e) => {
    this.setState({
      days: e.target.value
    })
  }

  handleChangeTime = (e) => {
    this.setState({
      time: e.target.value
    })
  }

  render() {
    return (
      <>
      <form onSubmit={(e) => this.props.handler(e, this.state)}>
        <select value={this.state.subject} onChange={this.handleChangeSubject}>
            <option value="EP">ed.wczes.</option>
            <option value="english">j.angielski</option>
            <option value="IT">informatyka</option>
            <option value="PE">w-f</option>
            <option value="club">zaj.dod.</option>
        </select>
        <select value={this.state.days} onChange={this.handleChangeDays}>
            <option value="monday">poniedziałek</option>
            <option value="tuesday">wtorek</option>
            <option value="wednesday">środa</option>
            <option value="thursday">czwartek</option>
            <option value="friday">piątek</option>
        </select>
        <select value={this.state.time} onChange={this.handleChangeTime}>
            <option value="8:00-8:45">8:00-8:45</option>
            <option value="8:55-9:40">8:55-9:40</option>
            <option value="9:50-10:35">9:50-10:35</option>
            <option value="10:50-11:35">10:50-11:35</option>
            <option value="11:45-12:30">11:45-12:30</option>
            <option value="12:45-13:30">12:45-13:30</option>
            <option value="13:35-14:20">13:35-14:20</option>
            <option value="14:25-15:10">14:25-15:10</option>
        </select>
        <button>Dodaj</button>
      </form>
      </>
    );
  }
}

export default Form;