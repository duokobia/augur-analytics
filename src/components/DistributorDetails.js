import React from "react";
import { FaEnvelope, FaRegFileAlt, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";

function DistributorDetails({ distributor }) {
  return (
    <div className="distributor-details">
      <div className="details-header">
        <h2>Distributor Details</h2>
      </div>
      <div className="details-grid">
        <div className="detail-item">
          <div className="detail-label">Region:</div>
          <div className="detail-value">{distributor.region}</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Status:</div>
          <div className={`detail-value status-${distributor.status}`}>
            {distributor.status}
          </div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Fulfillment Rate:</div>
          <div className="detail-value">{distributor.fulfillmentRate}%</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Return Rate:</div>
          <div className="detail-value">{distributor.returnRate}%</div>
        </div>
      </div>
      <div className="details-actions">
        <button className="action-button">
          <FaEnvelope />
          <span>Contact</span>
        </button>
        <button className="action-button">
          <FaRegFileAlt />
          <span>View Report</span>
        </button>
        <button className="action-button">
          <FaEdit />
          <span>Edit Details</span>
        </button>
      </div>
    </div>
  );
}

DistributorDetails.propTypes = {
  distributor: PropTypes.shape({
    region: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    fulfillmentRate: PropTypes.number.isRequired,
    returnRate: PropTypes.number.isRequired,
  }).isRequired,
};

export default DistributorDetails;
