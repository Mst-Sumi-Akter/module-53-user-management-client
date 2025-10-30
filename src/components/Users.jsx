import React from 'react';
import { use } from 'react';

const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users)

    const handleAddUser = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name,email);
        const newUser = {name,email};
        //send data to the  server
        fetch('http://localhost:3000/users', {
            method:'POST',
            headers:{
               "content-type":'application/json'
            },
            body: JSON.stringify(newUser)
        } )
        .then(res => res.json())
        .then(data => {
            console.log('after post ', data);
        })
    }
    return (
    
        <div>
            <div>
                <h3>Add a user</h3>
                <form onSubmit={handleAddUser}>
                    <input name='name' type="text" />
                    <br />
                    <input type="email" name="email" id="" />
                    <br />
                    <button>Add user</button>
                </form>
            </div>
            {
                users.map(user => <p>{user.name} {user.email}</p>)
            }
        </div>
    );
};

export default Users;