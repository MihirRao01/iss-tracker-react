import React, { useState } from "react";
import Search from "./search";
import App from "./App";

const ParentComponent = () => {
  const [receivedValue, setReceivedValue] = useState("");

  const handleValueChange = (value) => {
    setReceivedValue(value);
  };

  return (
    <div>
      <Search onValueChange={handleValueChange} />
      <App value={receivedValue} />
    </div>
  );
};

export default ParentComponent;
