import React from "react";

/*
  NO STATE HERE
  --------------------------
  PROPS:
  id
  height 
  background color
  width
  remove function
  --------------------------
  Parent is BoxList
  Child of BoxList
*/
function Box ({ id, height="10px", backgroundColor="black", width="10px", remove }) {

  return (
    <div>
      <div style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor
      }}>
      </div>
      <button className="removebutton" onclick={remove}>
        Remove Box!
      </button>
    </div>
  )
}

export default Box