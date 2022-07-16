import React from "react";
import "../../assets/scss/input_factories.scss";

const SelectDublicate = ({
  selectName,
  selectOptionName,
  onChange,
  category,
}) => {
  return (
    <div className="input-item">
      <p className="input-name-p">{selectName}</p>
      <select onChange={onChange} className="input-factories" name="" id="">
        <option value="">{selectOptionName}</option>
        <>
          {category?.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </>
      </select>
    </div>
  );
};

const SelectApiDublicate = ({
  selectName,
  selectOptionName,
  onChange,
  category,
}) => {
  return (
    <div className="input-item">
      <p className="input-name-p">{selectName}</p>
      <select onChange={onChange} className="input-factories" name="" id="">
        <option value="">{selectOptionName}</option>
        <>
          {category?.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </>
      </select>
    </div>
  );
};

export { SelectDublicate, SelectApiDublicate };
