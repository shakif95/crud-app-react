import React, { Component } from 'react';


const Items = ({items}) => {
    
    //const { items } = props;
    const AllItems = items.map(emp => {
        return (
            <div key={emp.Id}>
                <div>Role: {emp.Role}</div>
                <div>Department: {emp.Dept}</div>
                <div>Age: {emp.Age}</div>
                <div>===============</div>
            </div>
        )
    });

    const OldItems = items.map(emp => {
       return emp.Age > 35  ? (
             <div key={emp.Id}>
                <div>Role: {emp.Role}</div>
                <div>Department: {emp.Dept}</div>
                <div>Age: {emp.Age}</div>
                <div>===============</div>
            </div>
        ) : null;
    });

    return (
        <div>{OldItems}</div>
    )
}

export default Items;