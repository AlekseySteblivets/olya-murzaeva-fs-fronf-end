// import SocialMedia from "../../lib/SocialMedia";
// import NavigationFooter from "../NavigationFooter/NavigationFooter";
import SocialMedia from "../../lib/SocialMedia";
import NavigationFooter from "../NavigationFooter/NavigationFooter";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>Olga Murzaeva</h3>
      <NavigationFooter />
      <SocialMedia />
    </div>
  );
}
