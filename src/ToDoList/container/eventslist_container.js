import React, {useState, useEffect} from "react";
import { List, Button, Divider } from "antd";
import {  ScissorOutlined, EditOutlined } from '@ant-design/icons';

import axios from "axios";

//rendering existed to do event lists

//if add new to do event, rendering new added event to the top
//update state => at the same time sent new event to backend

//state: events_list

//func: add, delete, update (update state, and send)
//func: display search result? (do search in back end) => update state



export const EventLists = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvent() {
            const res = await axios.get("/events/list");
            setEvents(res.data.lists);
        }
        fetchEvent();
        
    }, [])
    //console.log('eventssss', events)
    return (
        
        <React.Fragment>
            <Divider orientation="middle" dashed={true} style={{color: "white", fontWeight: "normal"}}>
           
            </Divider>
            
                    <List 
                        itemLayout="horizontal"
                        dataSource={events}
                        renderItem={event => (
                        
                            <List.Item
                                actions={
                                    [
                                        <Button type="dashed" shape="circle" icon={<EditOutlined />} />,
                                        <Button type="dashed" shape="circle" icon={<ScissorOutlined />} />
                                    ]
                                }
                            >
                                    <List.Item.Meta
                                        title={event.timestamp}
                                        description={event.content}
                                    />
                            </List.Item>
                        )}
                    
                    />
               
        </React.Fragment>
    )


};