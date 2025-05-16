"use client";

import "./globals.css";
import './subscription/Subs.css';
import { useEffect, useState } from "react";

export default function Home() {
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

      <div className="intro-container">
        <div>
          <div>
            <br />
            We've recognized how much of a struggle it is to keep up with all of
            your subscriptions. Transportation, food, entertainment--it's
            difficult to maintain a list of how much we're spending on these
            things we enjoy so much! <b>42%</b> of consumers have forgotten they were
            still paying for a service they no longer used. The average consumer
            spends <b>$32.84</b> per month on unused subscriptions.
            <br />
            <br />
          {/* </div>
          <div> */}
            Additionally, we know that banking is a complex and often
            overwhelming process. So, we decided to create a platform that not
            only helps you track your subscriptions but also provides you with
            personalized banking recommendations. Our goal is to make banking 
            <b> easier and more accessible</b> for everyone, regardless of their
            financial background. We believe that <i>everyone</i> deserves to have
            access to the tools and resources they need to make informed
            financial decisions.
          </div>
        </div>
      </div>
      <h2>
        Welcome to BankAware, your personal subscription tracker and banking
        "know-it-all."
      </h2>
      <h3>Meet the Team!</h3>
      <div className="headshots-container">
        <div className="phanuelle">
          <img src="/Phanuelle_Manuel_square.jpg" alt="Phanuelle Manuel" />
          <h4>Phanuelle Manuel</h4>
          <p>Freshman Computer Science major @ University of Alabama</p>
        </div>
        <div className="shreeya">
          <img src="/shreeya-headshot.jpeg" alt="Shreeya Chand" />
          <h4>Shreeya Chand</h4>
          <p>
            Freshman Computer Science major @ University of Southern California
          </p>
        </div>
        <div>
          <img src="/Joshua-Headshot.jpg" alt="Joshua Udo" />
          <h4>Joshua Udo</h4>
          <p>Sophomore Computer Science major @ Grambling State University </p>
        </div>
        <div>
          <img src="/bridget-headshot.jpeg" alt="Bridget Jiang" />
          <h4>Bridget Jiang</h4>
          <p>Freshman Mathematics major @ MIT</p>
        </div>
        <div>
          <img src="/elikem-headshot.png" alt="Elikem Hamenoo" />
          <h4>Elikem Hamenoo</h4>
          <p>Freshman Computer Science major @ Grambling State University</p>
        </div>
      </div>
    </>
  );
}
