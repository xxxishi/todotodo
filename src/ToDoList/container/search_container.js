import React from "react";
import { Input } from "antd";

const { Search } = Input;


export const SearchContainer = () => {
    return (
        <Search
            placeholder="Search here..."
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
        />
    )
};
