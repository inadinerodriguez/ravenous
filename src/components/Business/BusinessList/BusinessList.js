import React from "react";
import "./BusinessList.css";
import Business from "../Business";

class BusinessList extends from React.Component {
    render(){
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        );
    }
};

export default BusinessList;