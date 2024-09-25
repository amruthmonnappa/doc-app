import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";


function Card({ data, reference }) {
  return (
    <motion.div 
    drag 
    dragConstraints={reference} 
    whileDrag={{scale:1.2}}
    dragTransition={{bounceStiffness:600, bounceDamping:10}}
    className="relative w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden">
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full left-0">
        <div className="flex items-center   justify-between mb-3 py-3 px-8">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoCloseSharp color="black" />
            ) : (
              <IoMdDownload size=".7em" color="black" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full h-10 py-4  ${
              data.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-md font-semibold">{data.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
