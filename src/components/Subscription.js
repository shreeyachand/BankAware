'use client'; // Only needed if using client-side features like useState/useEffect

import './Subscription.css'; // Import the CSS file for styling
const Subscription = ({ name, type, image, cost, active, savings, date, last}) => {
  return (
    <div className="subscription">
        <img src={image} alt={`${name} logo`} />
        <div className="sub-info">
            <p className='type'>{type}</p>
            {active && 
              <div>
                <p className='money'>${cost} monthly</p>     
                <p>Last payment: {date} </p>            
              </div>
            }
            {!active && 
              <div>
                  <p className='money'>Estimated 30-day savings: ${savings}</p>
                  <p>Based on your transaction history</p>
              </div>
            }

            {last && 
            <>
              <p className="tooltip">⚠️
                <span> Service last used {last}.</span>
                 <div className="message">
                  Consider canceling: these monthly payments add up! That's ${cost * 12} a year that could instead go toward savings or paying off debt: things that improve your financial health in the long run.
              </div>
              </p>
              </>
            }
        </div>
        {
          active &&
          <div className='button-col'>
            <button className="cancel-button">Cancel {name}</button>         
          </div>
        }
       
        
    </div>
  );
}

export default Subscription;