'use client'

import Subscription from '../../components/Subscription';
import { activeSubscriptions, recommendedSubscriptions } from "../../data/data";
import styles from "../globals.css";

const Subs = () => {
    return (
        <>
        <div className="active-subscriptions">
            <h1>Active Subscriptions</h1>
            {activeSubscriptions.map((subscription) => (
            <Subscription
                key={subscription.name}
                name={subscription.name}
                image={subscription.image}
                type={subscription.type}
                cost={subscription.cost}
                active={true}
            />
            ))}
        </div>
        <div className="recommended-subscriptions">
            <h1>Recommended Subscriptions</h1>
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