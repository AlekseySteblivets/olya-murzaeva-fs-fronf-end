import { useState } from "react";
import Link from "next/link";

import Select from "../../lib/Select";

import { portpholioList } from "../../utils/portpholioList";
import { navigationList } from "../../utils/navigationList";

import styles from "./Navigation.module.scss";

export default function Navigation() {
  const [portpholioEl, setportpholioEl] = useState("portpholio");

  const passPortpholioEl = (selectedEl) => {
    setportpholioEl(selectedEl);
  };

  console.log("navigationList", navigationList);
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {navigationList.map(({ id, title, path }) => {
          if (title === "home") {
            return (
              <li key={id} className={styles.item}>
                <a href={path}>{title}</a>
              </li>
            );
          }
          if (title === "portpholio") {
            return (
              <li key={id} className={styles.item}>
                <Select
                  arrData={portpholioList}
                  currData={portpholioEl}
                  passNumberMonthOrYear={passPortpholioEl}
                />
              </li>
            );
          } else {
            return (
              <li className={styles.item} key={id}>
                <Link href={path}>{title}</Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}

// <li className={styles.item}>
//         <Link to="/">home</Link>
//       </li>
//       <li className={styles.item}>
//         {/* <a href="/">portpholio</a> */}
//         <Select
//           arrData={monthList}
//           currData={numberMonth}
//           passNumberMonthOrYear={passNumberMonth}
//         />
//       </li>
//       <li className={styles.item}>
//         <Link to="/price">price</Link>
//       </li>
//       <li className={styles.item}>
//         <a href="/">video</a>
//       </li>
//       <li className={styles.item}>
//         <a href="/">contact</a>
//       </li>

//  <ul className={styles.menu}>
//    {navigationList.map((nameNav) => {
//      if (nameNav === "home") {
//        return (
//          <li key={nameNav} className={styles.item}>
//            <Link href="/">
//              <a>{nameNav}</a>
//            </Link>
//          </li>
//        );
//      }
//      if (nameNav === "portpholio") {
//        return (
//          <li key={nameNav} className={styles.item}>
//            <Select
//              arrData={portpholioList}
//              currData={portpholioEl}
//              passNumberMonthOrYear={passPortpholioEl}
//            />
//          </li>
//        );
//      } else {
//        return (
//          <li key={nameNav} className={styles.item}>
//            <Link href={nameNav}>
//              <a>{nameNav}</a>
//            </Link>
//          </li>
//        );
//      }
//    })}
//  </ul>;
