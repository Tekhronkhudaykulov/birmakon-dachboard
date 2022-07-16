import React from "react";

const FilterSwitch = ({ input, handleFilter }) => {
  switch (input.type) {
    case "checkbox":
      return (
        <div className="input-chexbox">
          <p className="input-name-p">{input.name}</p>
          <div className="asad_fix">
            {input.childs?.map((item) => (
              <>
                <p className="input-name-p">{item.name}</p>
                <span>
                  {item.value}
                  <input
                    className="input-factories"
                    type="checkbox"
                    onChange={() =>
                      handleFilter(item.id, item.value, "checkbox")
                    }
                  />
                </span>
              </>
            ))}
          </div>
        </div>
      );
    case "select":
      return (
        <>
          <div className="input-item">
            <p className="input-name-p">{input.name}</p>
            <select
              className="input-factories"
              onChange={(e) => handleFilter(input.id, e.target.value, "select")}
            >
              <option value="">Выбрать подкатегорию</option>
              {input.childs?.map((item) => {
                return (
                  <option id={item.id} value={item.value}>
                    {item.value}
                  </option>
                );
              })}
            </select>
          </div>
        </>
      );
    case "input":
      return (
        <>
          <div className="input-item">
            <p className="input-name-p">{input.name}</p>
            <input
              onChange={(e) => handleFilter(input.id, e.target.value, "input")}
              className="input-factories"
              type="text"
            />
          </div>
        </>
      );

    default:
      return null;
  }
};

export default FilterSwitch;
