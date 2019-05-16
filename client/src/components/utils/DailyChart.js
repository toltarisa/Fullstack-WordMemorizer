import React, { Component } from "react";
import ReactChartkick, { ColumnChart } from "react-chartkick";
import Chart from "chart.js";
import axios from "axios";
import moment from "moment";

ReactChartkick.addAdapter(Chart);
class DailyChart extends Component {
  state = {
    words: [],
    data:[]
  };

  getMeorizedWords = () => {
    axios.get("/test/getmemorizedwords").then(res => {
      this.setState({
        words: res.data
      });
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
      const date = moment(word.date).format("dddd");
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
          console.log(moment(word).utc().local().format("dddd"));
      }
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
      this.setState({data:object});
    });
  };
  componentDidMount() {
    this.getMeorizedWords();
    
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <h2 onClick={this.calculateDailyData} className="textChart">Günlere Göre Öğrenilen Kelime Sayıları</h2>
        <ColumnChart
          data={[
            ["Pazartesi", 4],
            ["Salı", 5],
            ["Çarşamba", 2],
            ["Perşembe", 6],
            ["Cuma", 3],
            ["Cumartesi", 7],
            ["Pazar", 4]
          ]}
        />
      </div>
    );
  }
}

export default DailyChart;
