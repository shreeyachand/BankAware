"use client";

import "./Subscription.css";

const Subscription = ({
  name,
  type,
  image,
  cost,
  active,
  savings,
  date,
  last,
  onCancel,
}) => {
  return (
    <div className="subscription">
      <img src={image} alt={`${name} logo`} />
      <div className="sub-info">
        <p className="type">{type}</p>
        {active && (
          <div>
            <p className="money">${cost} monthly</p>
            <p>Last payment: {date} </p>
          </div>
        )}
        {!active && (
          <div>
            <p className="money">Estimated 30-day savings: ${savings}</p>
            <p>Based on your transaction history</p>
          </div>
        )}
        {last && (
          <>
            <div className="tooltip">
              ⚠️
              <span> Service last used {last}.</span>
              <div className="message">
                <br />
                <span className="cancel-warning">Consider canceling:</span>
                <br />
                <p className="warning-description">
                  Canceling could save you ${cost * 12} a year — money better
                  spent on savings or debt repayment.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      {active && (
        <div className="button-col">
          <button
            className="cancel-button"
            onClick={() => onCancel && onCancel(name)}
          >
            Cancel {name}
          </button>
        </div>
      )}
    </div>
  );
};

export default Subscription;
