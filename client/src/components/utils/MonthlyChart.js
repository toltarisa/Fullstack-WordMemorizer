import React, { Component } from "react";
import ReactChartkick, { ColumnChart } from "react-chartkick";
import Chart from "chart.js";
import axios from 'axios';
import moment from 'moment';
ReactChartkick.addAdapter(Chart);
class MonthLyChart extends Component {
  state = {
    data: []
  };

  getMeorizedWords = () => {
    axios.get("/test/getmemorizedwords").then(res => {
      this.setState({
        words: res.data
      });
    }).catch(err => {
      throw err;
    })
  };

  calculateMonthlyData = () => {
    let jan = 0,
      feb = 0,
      mar = 0,
      apr = 0,
      may = 0,
      jun = 0,
      jul = 0,
      aug = 0,
      sep = 0,
      oct = 0,
      nov = 0,
      dec = 0;
    const memorizedWords = [...this.state.words];
     memorizedWords.map(word => {
      const date = moment(word.date).format("MMMM");
      switch (date) {
        case "January":
          jan = jan + 1;
          break;
        case "February":
          feb = feb + 1;
          break;
        case "March":
          mar = mar + 1;
          break;
        case "April":
          apr = apr + 1;
          break;
        case "May":
          may = may + 1;
          break;
        case "June":
          jun = jun + 1;
          break;
        case "July":
          jul = jul + 1;
          break;
        case "August":
          aug = aug + 1;
          break;
        case "September":
          sep = sep + 1;
          break;
        case "October":
          oct = oct + 1;
          break;
        case "November":
          nov = nov + 1;
          break;
        case "December":
          dec = dec + 1;
          break; 
        default:
          console.log(moment(word.date).utc().local().format("MMMM"));
      }
      let object = [
        {
          obj: [
            { x: "Ocak", y: jan },
            { x: "Şubat", y: feb },
            { x: "Mart", y: mar },
            { x: "Nisan", y: apr },
            { x: "Mayıs", y: may },
            { x: "Haziran", y: jun },
            { x: "Temmuz", y: jul },
            { x: "Ağustos", y:aug},
            { x: "Eylül", y:sep},
            { x: "Ekim", y:oct},
            { x: "Kasım", y:nov},
            { x: "December", y:dec}
          ]
        }
      ];
      this.setState({data:object});
    });
  };

  componentDidMount(){
    this.getMeorizedWords();
  }
  render() {
    const data = this.state.data.map(object => {
      return object.obj.map(month => {
        return {x:month.x,y:month.y};
      });
    }).map(val => {
      return val;
    })
    console.log(data);

    return (
      <div>
        <h2 className="textChart">Aylara Göre Öğrenilen Kelime Sayıları</h2>
        <button className="btn" onClick={this.calculateMonthlyData}>Veriyi Al</button>
        {data.map(value => (
          <ColumnChart
            data={[
              [value[0].x, value[0].y],
              [value[1].x, value[1].y],
              [value[2].x, value[2].y],
              [value[3].x, value[3].y],
              [value[4].x, value[4].y],
              [value[5].x, value[5].y],
              [value[6].x, value[6].y],
              [value[7].x, value[7].y],
              [value[8].x, value[8].y],
              [value[9].x, value[9].y],
              [value[10].x, value[10].y],
              [value[11].x, value[11].y]
          ]}
        />
        ))}
      </div>
    );
  }
}

export default MonthLyChart;
