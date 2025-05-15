import Image from "next/image";
import styles from "./globals.css";
import Subscription from "@/components/Subscription";
import { activeSubscriptions, recommendedSubscriptions } from "@/data/data";

export default function Home() {
  return (
    <>
      <h2>Welcome to BankAware, your personal subscription tracker and banking "know-it-all."</h2>
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
