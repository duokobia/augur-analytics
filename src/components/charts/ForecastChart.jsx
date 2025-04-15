import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

function ForecastChart({ historicalData, forecastData }) {
  const combinedData = [
    ...historicalData.map((item) => ({
      month: item.month,
      "Actual Shipments": item.quantity,
      "Forecasted Shipments": null,
    })),
    ...forecastData.map((item) => ({
      month: item.month,
      "Actual Shipments": null,
      "Forecasted Shipments": item.quantity,
    })),
  ];

  return (
    <ResponsiveContainer width="100%" height={375}>
      <LineChart
        data={combinedData}
        margin={{ top: 50, right: 50, left: 30, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Actual Shipments"
          stroke="#3366CC"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="Forecasted Shipments"
          stroke="#FF9933"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

ForecastChart.propTypes = {
  historicalData: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,

  forecastData: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  chartHeight: PropTypes.number,
  actualLineColor: PropTypes.string,
  forecastLineColor: PropTypes.string,
  actualDotRadius: PropTypes.number,
  forecastDotRadius: PropTypes.number,
  strokeWidth: PropTypes.number,
  forecastStrokeDash: PropTypes.string,
  margin: PropTypes.object,
};

export default ForecastChart;
