import React from 'react';
import { use } from 'react';

const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users)
    return (
    
        <div>
            <div>
                <h3>Add a user</h3>
                <form>
                    <input type="text" />
                    <br />
                    <input type="email" name="" id="" />
                    <br />
                    <button>Add user</button>
                </form>
            </div>
            {
                users.map(user => <p>{user.name}</p>)
            }
        </div>
    );
};

export default Users;