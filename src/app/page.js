import Image from "next/image";
import styles from "./globals.css";
import Subscription from "@/components/Subscription";
import { activeSubscriptions, recommendedSubscriptions } from "@/data/data";

export default function Home() {
  return (
    <>
      <p className="intro-container">
        <div>
          <div>
            <br />
            We've recognized how much of a struggle it is to keep up with all of
            your subscriptions. Transportation, food, entertainment--it's
            difficult to maintain a list of how much we're spending on these
            things we enjoy so much! 42% of consumers have forgotten they were
            still paying for a service they no longer used. The average consumer
            spends $32.84 per month on unused subscriptions.
            <br />
            <br />
          </div>
          <div>
            Additionally, we know that banking is a complex and often
            overwhelming process. So, we decided to create a platform that not
            only helps you track your subscriptions but also provides you with
            personalized banking recommendations. Our goal is to make banking
            easier and more accessible for everyone, regardless of their
            financial background. We believe that everyone deserves to have
            access to the tools and resources they need to make informed
            financial decisions.
          </div>
        </div>
      </p>
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
