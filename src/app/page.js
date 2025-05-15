import Image from "next/image";
// import styles from "./page.module.css";
import styles from "./globals.css";
import Subscription from "@/components/Subscription";

export default function Home() {
  return (
    <>
      <h2>Welcome to BankAware, your personal subscription tracker and banking "know-it-all."</h2>
      {/*Sample of using subscription component, will be filled with our data*/}
      <Subscription name="Hulu" />
    </>
  );
}
