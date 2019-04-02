import React, { Component } from 'react';


const Items = ({items, deleteItem}) => {
    
    //const { items } = props;
    const AllItems = items.map(task => {
        return (
            <div key={task.Id}>
                <div>
                    {task.task}
                    <button onClick={() => {deleteItem(task.Id)}}>X</button>
                </div>
                <div>===============</div>
            </div>
        )
    });

    // const OldItems = items.map(emp => {
    //    return emp.Age > 35  ? (
    //          <div key={emp.Id}>
    //             <div>Role: {emp.Role}</div>
    //             <div>Department: {emp.Dept}</div>
    //             <div>Age: {emp.Age}</div>
    //             <div>===============</div>
    //         </div>
    //     ) : null;
    // });

    return (
        <div>{AllItems}</div>
    )
}

export default Items;