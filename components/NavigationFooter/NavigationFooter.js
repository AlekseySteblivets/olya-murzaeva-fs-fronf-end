import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import { navigationList } from "../../utils/navigationList";

import styles from "./NavigationFooter.module.scss";

export default function NavigationFooter() {
  const [pathNameIsHome, setPathNameIsHome] = useState(true);

  const router = useRouter();
  console.log("pathNameNavigationFooter", router.pathname);

  useEffect(() => {
    router.push("/");
    // clearPathMethod();
    setPathNameIsHome(true);
  }, [pathNameIsHome]);

  const clearPathMethod = () =>
    router.pathname !== "/"
      ? setPathNameIsHome(false)
      : setPathNameIsHome(true);

  return (
    <nav className={styles.navFooter}>
      <ul className={styles.menu}>
        {navigationList.map(({ id, title, path }) => {
          if (title === "portpholio") {
            return (
              <li key={id} className={styles.item}>
                <a
                  onClick={() => clearPathMethod()}
                  // href={clearPathMethod()}
                  href="#portpholio"
                >
                  {title}
                </a>
              </li>
            );
          } else {
            return (
              <li key={id} className={styles.item}>
                <Link href={path}>{title}</Link>
              </li>
            );
          }
        })}
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
