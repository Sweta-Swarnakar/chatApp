import { IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import smallIcon from "../icons/small_icon.png";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

export default function Groups() {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <AnimatePresence>
      <motion.div  initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0}} transition={{ease: "anticipate", duration: "0.3"}} className="user-groups-list-container">
        <div className={`ug-header ${lightTheme ? "" : "dark"}`}>
          <img src={smallIcon} />
          <p className={`ug-title ${lightTheme ? "" : "dark"}`}>
            Available Groups
          </p>
        </div>
        <div className={`sb-search ${lightTheme ? "" : "dark"}`}>
          <IconButton>
            <SearchIcon />
            <input
              placeholder="Search"
              className={`search-box ${lightTheme ? "" : "dark"}`}
            />
          </IconButton>
        </div>
        <div className={`ug-list ${lightTheme ? "" : "dark"}`}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`list-items ${lightTheme ? "" : "dark"}`}
          >
            <p className="avatar-icon">T</p>
            <p className="con-title">Groups 1</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`list-items ${lightTheme ? "" : "dark"}`}
          >
            <p className="avatar-icon">T</p>
            <p className="con-title">Groups 1</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`list-items ${lightTheme ? "" : "dark"}`}
          >
            <p className="avatar-icon">T</p>
            <p className="con-title">Groups 1</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`list-items ${lightTheme ? "" : "dark"}`}
          >
            <p className="avatar-icon">T</p>
            <p className="con-title">Groups 1</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`list-items ${lightTheme ? "" : "dark"}`}
          >
            <p className="avatar-icon">T</p>
            <p className="con-title">Groups 1</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
