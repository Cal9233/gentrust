import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase api/firebase";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [parts, setParts] = useState([]);
  //   const [name, setName] = useState("");
  //   const [condition, setCondition] = useState("");
  //   const [qty, setQty] = useState("");

  useEffect(() => {
    const reset = firebase
      .firestore()
      .collection("Parts")
      .onSnapshot((snapshot) => {
        const newParts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //   .then(() => {
        //     setName("");
        //     setCondition("");
        //     setQty("");
        //   });

        setParts(newParts);
      });
    return () => reset();
  }, []);

  return (
    <AppContext.Provider
      value={{
        parts,
        setParts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
