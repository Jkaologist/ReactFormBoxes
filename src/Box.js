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
function Box ({ id, height="50px", backgroundColor="black", width="50px", remove }) {

  return (
    <div>
      <div className="boxDiv" style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor
      }}>
      </div>
      <button className="removeButton" onClick={remove}>
        Remove Box!
      </button>
    </div>
  )
}

export default Box