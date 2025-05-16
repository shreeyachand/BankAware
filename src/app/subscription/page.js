"use client";

import Subscription from "../../components/Subscription";
import {
  activeSubscriptions as initialActiveSubscriptions,
  recommendedSubscriptions,
} from "../../data/data";
import { useEffect, useState } from "react";
import "../globals.css";
import "./Subs.css";

const Subs = () => {
  const [activeSubs, setActiveSubs] = useState(initialActiveSubscriptions);
  const [showModal, setShowModal] = useState(false);
  const [canceledName, setCanceledName] = useState("");

  useEffect(() => {
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

  const handleCancel = (name) => {
    setActiveSubs((subs) => subs.filter((sub) => sub.name !== name));
    setCanceledName(name);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="scroll-buttons">
        <button id="scrollToTop">⬆</button>
        <button id="scrollToBottom">⬇</button>
      </div>
      <div className="active-subscriptions">
        <h1 className="subs-header">Active Subscriptions</h1>
        {activeSubs.map((subscription) => (
          <Subscription
            key={subscription.name}
            name={subscription.name}
            image={subscription.image}
            type={subscription.type}
            cost={subscription.cost}
            active={true}
            date={subscription.date}
            last={subscription.last}
            onCancel={handleCancel}
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
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <p>Subscription "{canceledName}" has been canceled.</p>
            <button onClick={closeModal}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Subs;
