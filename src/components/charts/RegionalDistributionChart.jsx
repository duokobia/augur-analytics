import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import PropTypes from "prop-types";

function RegionalDistributionChart({ data }) {
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#8014d8",
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={2}
          dataKey="percentage"
          nameKey="name"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

RegionalDistributionChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
  chartHeight: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
  dataKey: PropTypes.string,
  nameKey: PropTypes.string,
  showLegend: PropTypes.bool,
  showTooltip: PropTypes.bool,
  showLabels: PropTypes.bool,
};

export default RegionalDistributionChart;
