import React, { useState } from "react";
import firebase from "../../firebase api";

const SearchParts = () => {
  const [name, setName] = useState("");
  const [condition, setCondition] = useState("");
  const [qty, setQty] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection("Parts")
      .add({
        name,
        condition,
        qty: parseInt(qty),
      })
      .then(() => {
        setName("");
        setCondition("");
        setQty("");
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <h4>Add Part Number</h4>
      <div>
        <label>Quote</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </div>
      <div>
        <label>Condition</label>
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.currentTarget.value)}
        />
      </div>
      <div>
        <label>Qty</label>
        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(e.currentTarget.value)}
        />
      </div>
      <button>Search</button>
    </form>
  );
};

export default SearchParts;
