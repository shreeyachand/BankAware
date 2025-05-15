'use client'; // Only needed if using client-side features like useState/useEffect

import './Subscription.css'; // Import the CSS file for styling
const Subscription = ({ name, type, image, cost, active, savings}) => {
  return (
    <div className="subscription">
        <img src={image} alt={`${name} logo`} />
        <div className="sub-info">
            <p>{type}</p>
            {active && 
                <p>${cost} monthly</p>                
            }
            {!active && 
                <p>Estimated savings: ${savings} monthly</p>                
            }
            
        </div>
    </div>
  );
}

export default Subscription;