import React, { Component } from 'react';
import Form from '../Form/Form';

class Table extends Component {
    handler = (e, data) => {
      e.preventDefault()
      console.log(data)
    }

    render() {
      return (
        <>
        <div>
          < Form handler={this.handler}/>
          <table>
            <thead>
              <tr>
                <th id="hr">Godz.</th>
                <th>Poniedziałek</th>
                <th>Wtorek</th>
                <th>Środa</th>
                <th>Czwartek</th>
                <th>Piątek</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="hr">8:00 8:45</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td id="hr">8:55 9:40</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td id="hr">9:50 10:35</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td id="hr">10:50 11:35</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td id="hr">11:45 12:30</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td id="hr">12:45 13:30</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td id="hr">13:35 14:20</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td id="hr">14:25 15:10</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          <tfoot>
          
          </tfoot>
      </table>
      </div>
      <p>&copy; 2019 Lauralian</p>
      </>
      )
    }
  }

  export default Table;