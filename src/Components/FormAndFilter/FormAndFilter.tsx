import React from "react";
import Form from "./Form";
import Filter from "./Filter";

const FormAndFilter: React.FC = (): JSX.Element => {
  return (
      <div className="inputs__box">
        <Form />
        <Filter />
      </div>
  );
};
export default FormAndFilter;
