import React, { useState, useEffect } from "react";
import echarts from "echarts";

export default function LineChart(props) {
  const [echart, setEchart] = useState(
    "chart" + Math.floor(Math.random() * 100)
  );
  const [chartData, setChartData] = useState([]);

  const { title = "Line Charts", xAxisData, series } = props;

  useEffect(() => {
    initEchart();
    return () => {
      initEchart();
    };
  }, []);

  const initEchart = async () => {
    const chart = echarts.init(document.getElementById(echart));
    chart.showLoading({
      text: "正在努力加载数据中",
      color: "yellowgreen",
      maskColor: "transparent",
    });
    const res = await getLineChartData();

    if (res.status === 0) {
      chart.hideLoading();
      chart.setOption({
        title: { text: title },
        tooltip: {
          trigger: "axis",
        },
        legend: {},
        xAxis: {
          data: xAxisData,
          type: "category",
          boundaryGap: false,
        },
        yAxis: {},
        series: series,
      });
    }
  };

  const getLineChartData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setChartData();
        console.log("getLineChartData");
        resolve({ status: 0, data: [6, 6.7, 8, 7, 7.8, 5] });
      }, 2000);
    });
  };

  return <div id={echart} className="chart"></div>;
}
