import { Select } from "antd";
import React from "react";
import "antd/dist/antd.css";

const ProductColorCheckbox = ({ colors, onChange }) => {
  const { Option } = Select;

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <Select
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
    >
      {colors.map((item) => (
        <Option value={item.id}>{item.name}</Option>
      ))}
    </Select>
  );
};

export default ProductColorCheckbox;
