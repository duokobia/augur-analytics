import React from "react";
import PropTypes from "prop-types";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineTrendingFlat } from "react-icons/md";

function DistributorCard({ title, value, trend, trendValue }) {
  return (
    <div className="metric-card">
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-value">{value}</div>
        <div className={`card-trend ${trend}`}>
          {trend === "up" && <FaArrowTrendUp className="arrow-icon" />}
          {trend === "down" && <FaArrowDown className="arrow-icon" />}
          {trend === "neutral" && (
            <MdOutlineTrendingFlat className="arrow-icon" />
          )}
          <span>{trendValue}</span>
        </div>
      </div>
    </div>
  );
}

// Prop types validation
DistributorCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  trend: PropTypes.oneOf(["up", "down", "neutral"]).isRequired,
  trendValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default DistributorCard;
