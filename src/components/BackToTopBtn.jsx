import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { HiArrowNarrowUp } from "react-icons/hi";

function BackToTopBtn() {
  return (
    <div>
      <div className="text-black dark:text-white">
        <ScrollToTop
          smooth
          component={<HiArrowNarrowUp size={30} />}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          // color={props.mode ? "#000" : "#fff"}
          className="bg-gradient-to-t from-[#54b3d6] to-blue-600 "
        />
      </div>
    </div>
  );
}

export default BackToTopBtn;
