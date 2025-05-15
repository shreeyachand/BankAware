import Image from "next/image";
import styles from "./globals.css";
import Subscription from "@/components/Subscription";
import { activeSubscriptions, recommendedSubscriptions } from "@/data/data";

export default function Home() {
  return (
    <>
      <h2>Welcome to BankAware, your personal subscription tracker and banking "know-it-all."</h2>
      <body>
        <h3>Meet the Team!</h3>
        <div className="team">
          <Image
            src="/images/adam.jpeg"
            alt="Adam"
            width={200}
            height={200}
          />
          <Image
            src="/images/ben.jpeg"
            alt="Ben"
            width={200}
            height={200}
          />
          <Image
            src="/images/benjamin.jpeg"
            alt="Benjamin"
            width={200}
            height={200}
          />
          </div>
      </body>
    </>
  );
}
