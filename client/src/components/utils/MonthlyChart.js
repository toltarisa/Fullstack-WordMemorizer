import React, { Component } from "react";
import ReactChartkick, { ColumnChart } from "react-chartkick";
import Chart from "chart.js";
ReactChartkick.addAdapter(Chart);
class MonthLyChart extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2 className="textChart">Aylara Göre Öğrenilen Kelime Sayıları</h2>
        <ColumnChart
          data={[
            ["Ocak", 32],
            ["Şubat", 46],
            ["Mart", 28],
            ["Nisan", 21],
            ["Mayıs", 19],
            ["Haziran", 32],
            ["Temmuz", 25],
            ["Ağustos", 28],
            ["Eylül", 28],
            ["Ekim", 28],
            ["Kasım", 28],
            ["Aralık", 17]
          ]}
        />
      </div>
    );
  }
}

export default MonthLyChart;
