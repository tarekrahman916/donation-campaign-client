"use client";

import { Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";

const { Search } = Input;

const SearchField = () => {
  const onSearch: SearchProps["onSearch"] = (value) => console.log(value);

  return (
    <div className="my-6">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        className="border"
        color="#FF0000"
      />
    </div>
  );
};

export default SearchField;
