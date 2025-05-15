import Image from "next/image";
import styles from "./page.module.css";
import Subscription from "@/components/Subscription";

export default function Home() {
  return (
    <>
      <div>Base app!</div>
      {/*Sample of using subscription component, will be filled with our data*/}
      <Subscription name="Hulu" />
    </>
  );
}
