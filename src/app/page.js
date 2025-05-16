import Image from "next/image";
import styles from "./globals.css";
import Subscription from "@/components/Subscription";
import { activeSubscriptions, recommendedSubscriptions } from "@/data/data";

export default function Home() {
  return (
    <>
      <h2>
        Welcome to BankAware, your personal subscription tracker and banking
        "know-it-all."
      </h2>
      {/*Sample of using subscription component, will be filled with our data*/}
      <h3>Meet the Team!</h3>
      <div className="headshots-container">
        <div className="phanuelle">
          <img src="/Phanuelle_Manuel_square.jpg" alt="Phanuelle Manuel" />
          <h4>Phanuelle Manuel</h4>
          <p>Freshman Computer Science major @ Uni. of Alabama</p>
        </div>
        <div className="shreeya">
          <img src="/shreeya-headshot.jpeg" alt="Shreeya Chand" />
          <h4>Shreeya Chand</h4>
          <p>Freshman Computer Science major @ University of Southern California</p>
        </div>
        <div>
        <img src="/Joshua-Headshot.jpg" alt="Joshua Udo" />
        <h4>Joshua Udo</h4>
          <p>Sophomore Computer Science major @ Grambling State University </p>
          </div>
        <img src="/images/benjamin.jpeg" alt="Bridget Jiang" />
        <div>
        <h4>Bridget Jiang</h4>
          <p>Freshman _______ major @ MIT</p>
          </div>
      </div>
    </>
  );
}
