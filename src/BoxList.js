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
  function remove(idx) {
    let cpy = [...boxes];
    cpy.splice(idx, 1);
    setBoxes(() => cpy);
  }


return (
  <div>
    <NewBoxForm addBox={add}/>
    {boxes.map(({ id, width, height, backgroundColor }) => (
    <Box id={id} width={width} height={height} backgroundColor={backgroundColor} remove={remove}/>))
    }
  </div>
)

}

export default BoxList;