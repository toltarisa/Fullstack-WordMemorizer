import React, { Component } from "react";

import Navbar from "../common/Navbar";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MonthlyStats from '../utils/MonthlyChart';
import DailyStats from '../utils/DailyChart';

class Stats extends Component {
  state = {
    value:1
  };

    handleChange = event => {
        this.setState({ value: event.target.value });
      };

      renderCharts = () =>{
          if(this.state.value === 1){
              return (
                  <DailyStats />
              )
          }
          else if(this.state.value === 2){
              return (
                  <MonthlyStats />
              )
          }
          else{
            return (
                <DailyStats />
            )
          }
      }
  render() {
      console.log(this.state.stats);
      console.log(this.state.value);
      const classes = this.props;
    return (
      <div>
        <Navbar />
        <div className="select">
        <h3>Aylık veya Günlük istatistikleri görüntüle</h3>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="stats-helper">Seç</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            input={<Input name="stats" id="stats-helper" />}
          >
            <MenuItem value={1}>Günlük</MenuItem>
            <MenuItem value={2}>Aylık</MenuItem>
          </Select>
          
        </FormControl>
        <br/>
        </div>
        {this.renderCharts()}
      </div>
    );
  }
}

export default Stats;
