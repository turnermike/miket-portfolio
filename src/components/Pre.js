import React from "react";
function Pre(props) {
  
  // console.log('props', props);
  
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
  // return <div id="preloader"></div>;
}

export default Pre;
