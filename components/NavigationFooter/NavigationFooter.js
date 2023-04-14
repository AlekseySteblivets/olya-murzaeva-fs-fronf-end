import Link from "next/link";
import { navigationList } from "../../utils/navigationList";

import styles from "./NavigationFooter.module.scss";

export default function NavigationFooter() {
  return (
    <nav className={styles.navFooter}>
      <ul className={styles.menu}>
        {navigationList.map(({ id, title, path }) => (
          <li key={id} className={styles.item}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// {
//   navigationList.map((nameNav) => {
//     if (nameNav === "home") {
//       return (
//         <li key={nameNav} className={styles.item}>
//           <a href="/">{nameNav}</a>
//         </li>
//       );
//     }
//     if (nameNav === "portpholio") {
//       return (
//         <li key={nameNav} className={styles.item}>
//           <a href="#portpholio">{nameNav}</a>
//         </li>
//       );
//     } else {
//       return (
//         <li key={nameNav} className={styles.item}>
//           <Link to={nameNav}>{nameNav}</Link>
//         </li>
//       );
//     }
//   });
// }
