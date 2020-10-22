import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./SearchBar.css";

const SearchBar = ({ history }) => {
  const { parts, setParts } = useContext(AppContext);

  return (
    <>
      <h1 className="mb-5">Search Part</h1>
      <div className="search">
        {parts?.map((part, i) => {
          return (
            <div className="card">
              <h3 className="id" key={part.id}>
                {part.id}
              </h3>
              <h4 className="condition" key={part.condition}>
                {part.condition}
              </h4>
              <h4 className="qty" key={part.qty} value={String(part.qty)}>
                {part.qty}
              </h4>
              <button onClick={() => history.map({ setParts })} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchBar;
