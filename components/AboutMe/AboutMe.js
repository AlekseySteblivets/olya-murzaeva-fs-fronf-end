import SocialMedia from "../../lib/SocialMedia";
import ContactData from "../ContactData/ContactData";
// import cn from "classnames";

import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.block}>
      <div className={styles.infoAboutAuthor}>
        <h3 className={styles.title}>About me</h3>
        <p className={styles.text}>
          Hello . My name is Olya. I am filming about your life as it really is.
          The real you in life and the most important stories that happen to you
          and your family and friends. It is these memories that make us happy
          even after many years when you look at the photos. Whether it is a
          wedding or a family, an individual or a reportage of your event - all
          these shootings will be unlike any other because you are a special
          person.
        </p>
        <p className={styles.textFinPart}>
          My works will tell the story of me.
        </p>
        {/* {children} */}
        {/* <SocialMedia
          pathnameLocationContactIsTrue={pathnameLocationContactIsTrue}
        />
        {pathnameLocationContactIsTrue && <ContactData />} */}
      </div>

      <div className={styles.fotoAuthor}></div>
    </div>
  );
}
