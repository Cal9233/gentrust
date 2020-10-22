// import React, { useState, useEffect } from "react";
// import firebase from "../../firebase api/firebase";

// const Parts = () => {
//   const [parts, setParts] = useState([]);
//   useEffect(() => {
//     const reset = firebase
//       .firestore()
//       .collection("Parts")
//       .onSnapshot((snapshot) => {
//         const newParts = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setParts(newParts);
//       });
//     return () => reset();
//   }, []);

//   return (
//     <div>
//       <h1 className="title">Parts</h1>
//       <div>
//         <select>
//           <option>Name</option>
//           <option>Condition</option>
//           <option>Qty</option>
//           <option disabled>---</option>
//         </select>
//       </div>
//       <ol>
//         {parts.map((part) => (
//           <li key={part.id}>
//             <div className="part-entry">
//               {part.name}
//               <code className="condition">{part.condition}</code>
//               <code className="qty">{part.qty}</code>
//             </div>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default Parts;
