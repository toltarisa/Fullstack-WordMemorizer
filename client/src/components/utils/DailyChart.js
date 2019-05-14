import React, { Component } from "react";
import ReactChartkick, { ColumnChart } from "react-chartkick";
import Chart from "chart.js";
ReactChartkick.addAdapter(Chart);
class DailyChart extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2 className="textChart">Günlere Göre Öğrenilen Kelime Sayıları</h2>
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
