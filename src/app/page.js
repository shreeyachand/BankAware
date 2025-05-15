import Image from "next/image";
import styles from "./globals.css";
import Subscription from "@/components/Subscription";
import { activeSubscriptions, recommendedSubscriptions } from "@/data/data";

export default function Home() {
  return (
    <>
      <h2>Welcome to BankAware, your personal subscription tracker and banking "know-it-all."</h2>
    </>
  );
}
