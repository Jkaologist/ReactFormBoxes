import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const initialState = [];
  const [boxes, setBoxes] = useState(initialState);


  //add a box
  function add(item) {
    setBoxes(boxes => [...boxes, item]);
  }

  //remove a box
  function remove(id) {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }


return (
  <div>
    <NewBoxForm add={add}/>
    {boxes.map(({ id, width, height, backgroundColor }) => (
    <Box id={id} key={id} width={width} height={height} backgroundColor={backgroundColor} remove={()=> remove(id)}/>))
    }
  </div>
)

}

export default BoxList;