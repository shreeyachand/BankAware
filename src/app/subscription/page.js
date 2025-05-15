'use client'

import Subscription from '../../components/Subscription';
import { activeSubscriptions, recommendedSubscriptions } from "../../data/data";
import "../globals.css";
import './Subs.css';

const Subs = () => {
    return (
        <>
        <div className="active-subscriptions">
            <h1 className="subs-header">Active Subscriptions</h1>
            {activeSubscriptions.map((subscription) => (
            <Subscription
                key={subscription.name}
                name={subscription.name}
                image={subscription.image}
                type={subscription.type}
                cost={subscription.cost}
                active={true}
                date={subscription.date}
                last={subscription.last}
            />
            ))}
        </div>
        <div className="recommended-subscriptions">
            <h1 className="subs-header">Recommended for You</h1>
            {recommendedSubscriptions.map((subscription) => (
            <Subscription
                key={subscription.name}
                name={subscription.name}
                image={subscription.image}
                type={subscription.type}
                savings={subscription.savings}
                active={false}
            />
            ))}
        </div>
        </>
    );
}
export default Subs;