"use client";

import Subscription from "../../components/Subscription";
import { activeSubscriptions, recommendedSubscriptions } from "../../data/data";
import { useEffect, useState } from "react";
import "../globals.css";
import "./Subs.css";

const Subs = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this code runs only on the client
    setIsClient(true);

    const scrollToTopButton = document.getElementById("scrollToTop");
    const scrollToBottomButton = document.getElementById("scrollToBottom");

    if (scrollToTopButton && scrollToBottomButton) {
      scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      scrollToBottomButton.addEventListener("click", () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      });
    }

    // Cleanup event listeners when the component unmounts
    return () => {
      if (scrollToTopButton && scrollToBottomButton) {
        scrollToTopButton.removeEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });

        scrollToBottomButton.removeEventListener("click", () => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        });
      }
    };
  }, []);

  return (
    <>
      <div className="scroll-buttons">
        <button id="scrollToTop">⬆</button>
        <button id="scrollToBottom">⬇</button>
      </div>
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
};
export default Subs;
