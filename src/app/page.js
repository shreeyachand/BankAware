import Image from "next/image";
// import styles from "./page.module.css";
import  "./globals.css";
import Subscription from "@/components/Subscription";

export default function Home() {
  return (
    <>
      <h2>Welcome to BankAware, your personal subscription tracker and banking "know-it-all."</h2>
      {/*Sample of using subscription component, will be filled with our data*/}
      <h3>Meet the Team!</h3>
      <div className="headshots-container">
        <img
          src="/Phanuelle_Manuel.jpg"
          alt="Phanuelle"
        />
        <img
          src="/shreeya-headshot.jpeg"
          alt="Shreeya"
        />
        <img
          src="/Joshua-Headshot.jpg"
          alt="Joshua"
        />
        <img
          src="/images/benjamin.jpeg"
          alt="Bridget"
        />
        </div>
    </>
  );
}
