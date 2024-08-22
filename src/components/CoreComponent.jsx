import React from "react";

// function CoreComponent(props) {
//   return (
//     <>
//       <li>
//         <img src={props.img} alt="" />
//         <h3>{props.title}</h3>
//         <p>{props.description}</p>
//       </li>
//     </>
//   );
// }

function CoreComponent({ key, title, description, img }) {
  return (
    <>
      <li>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
      {/* <li>
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li> */}
    </>
  );
}

export default CoreComponent;
