import Cart from "../../lib/Cart/Cart";

import styles from "./PortpholioItem.module.scss";

export default function PortpholioItem({ namePortpholio }) {
  return (
    <>
      <h2 className={styles.title}>{namePortpholio}</h2>
      <ul className={styles.menu}>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </ul>
    </>
  );
}

// import React, { useRef, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper";

// import "swiper/css";
// import "swiper/css/bundle";

// import Cart from "../../lib/Cart/Cart";

// import styles from "./PortpholioItem.module.scss";

// const containerSwiper = {
//   marginLeft: "auto",
//   marginRight: "auto",
//   backgroundColor: "red",
//   minWidth: 0,
//   height: 1000,
// };

// const container = {
//   backgroundColor: "red",
//   width: 268,
// };
// export default function PortpholioItem({ pathNamePortpholio }) {
//   return (
//     <>
//       <h2 className={styles.title}>{pathNamePortpholio}</h2>
//       <div className={styles.blockSlider}>
//         <Swiper
//           modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
//           style={containerSwiper}
//           navigation={true}
//           pagination={{
//             clickable: true,
//           }}
//           spaceBetween={10}
//           slidesPerGroup={1}
//           slidesPerView={4}
//           direction="vertical"
//           breakpoints={{
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 40,
//               slidesPerGroup: 1,
//               grid: {
//                 fill: "row",
//                 rows: 2,
//               },
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 50,
//               grid: {
//                 fill: "row",
//                 rows: 3,
//               },
//             },
//           }}
//         >
//           <SwiperSlide
//             // style={"width: 100px; height: 30px; outline: 1px solid border"}
//             style={container}
//             // className={"w-[40%]"}
//           >
//             <Cart />
//           </SwiperSlide>
//           <SwiperSlide style={container}>
//             <Cart />
//           </SwiperSlide>
//           <SwiperSlide style={container}>
//             <Cart />
//           </SwiperSlide>
//           <SwiperSlide style={container}>
//             <Cart />
//           </SwiperSlide>
//           <SwiperSlide style={container}>
//             <Cart />
//           </SwiperSlide>
//           <SwiperSlide style={container}>
//             <Cart />
//           </SwiperSlide>
//           <SwiperSlide style={container}>
//             <Cart />
//           </SwiperSlide>
//           <SwiperSlide style={container}>
//             <Cart />
//           </SwiperSlide>
//           <SwiperSlide style={container}>
//             <Cart />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </>
//   );
// }
