import React, { Component } from "react";
import ReactChartkick, { ColumnChart } from "react-chartkick";
import Chart from "chart.js";
import axios from "axios";
import moment from "moment";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

ReactChartkick.addAdapter(Chart);
class DailyChart extends Component {
  state = {
    words: [],
    data: [],
    // startDate: null,
    // endDate: null
  };
  getMemorizedWords = () => {
    // let obj= {start: this.state.startDate,
    //   end: this.state.endDate}
    //   console.log(obj);
    axios
      .get("test/getmemorizedwords")
      .then(res => {
        this.setState({
          words: res.data
        });
        this.calculateDailyData();
      })
      .catch(err => {
        throw err;
      });
  };
  calculateDailyData = () => {
    
    let mon = 0,
      tue = 0,
      wed = 0,
      thu = 0,
      fri = 0,
      sat = 0,
      sun = 0;
    const memorizedWords = [...this.state.words];
    memorizedWords.map(word => {
      const date = moment(word.date)
        .utc()
        .format("dddd");
      switch (date) {
        case "Monday":
          mon = mon + 1;
          break;
        case "Tuesday":
          tue = tue + 1;
          break;
        case "Wednesday":
          wed = wed + 1;
          break;
        case "Thursday":
          thu = thu + 1;
          break;
        case "Friday":
          fri = fri + 1;
          break;
        case "Saturday":
          sat = sat + 1;
          break;
        case "Sunday":
          sun = sun + 1;
          break;
        default:
          console.log(
            moment(word.date)
              .utc()
              .local()
              .format("dddd")
          );
      }
    });
    let object = [
      {
        obj: [
          { x: "Pazartesi", y: mon },
          { x: "Salı", y: tue },
          { x: "Çarşamba", y: wed },
          { x: "Perşembe", y: thu },
          { x: "Cuma", y: fri },
          { x: "Cumartesi", y: sat },
          { x: "Pazar", y: sun }
        ]
      }
    ];
      this.setState({ data: object });
  };

  componentDidMount() {
    
  }
  render() {
    //console.log(this.state.words)
    const data = this.state.data
      .map(object => {
        return object.obj.map(day => {
          return { x: day.x, y: day.y };
        });
      })
      .map(val => {
        return val;
      });
    return (
      <div>
        <h2 className="textChart">Günlere Göre Öğrenilen Kelime Sayıları</h2>
        <button onClick={this.getMemorizedWords} className="btn">
          Veriyi Al
        </button>

        {data.map((value, index) => (
          <ColumnChart
            key={index}
            data={[
              [value[0].x, value[0].y],
              [value[1].x, value[1].y],
              [value[2].x, value[2].y],
              [value[3].x, value[3].y],
              [value[4].x, value[4].y],
              [value[5].x, value[5].y],
              [value[6].x, value[6].y]
            ]}
          />
        ))}
      </div>
    );
  }
}

export default DailyChart;
