import React from "react";

function Recording(props) {
  return props.trigger ? (
    <div className=" ">
      <div className="  ">
        <button className="">close</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Recording;
