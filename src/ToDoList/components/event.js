import React from "react";
import { List, Avatar } from "antd";


const Event = (timestamp, descript) => {
    return (
        <List.Item>
            <List.Item.Meta 
                title = {timestamp}
                description = {descript}
            />
        </List.Item>
    );
};

export default Event;

