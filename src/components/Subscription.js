'use client'; // Only needed if using client-side features like useState/useEffect

import './Subscription.css'; // Import the CSS file for styling
const Subscription = ({ name, type, image, cost, active, savings, date}) => {
  return (
    <div className="subscription">
        <img src={image} alt={`${name} logo`} />
        <div className="sub-info">
            <p>{type}</p>
            {active && 
              <div>
                <p>${cost} monthly</p>     
                <p>Last payment: {date} </p>
              </div>           
            }
            {!active && 
              <div>
                  <p>Estimated 30-day savings: ${savings}</p>
                  <p>Based on your transaction history</p>
              </div>
            }
            
        </div>
    </div>
  );
}

export default Subscription;