
import { useState, useEffect } from 'react';

interface User {
    email: string;
    password: string;
    age: number;
    terms: boolean;
    sex: 'f' | 'm';


}




export default function Forms() {

    const [user, setUser] = useState({
        email: "",
        password: "",
        age: 0,
        terms: false,
        sex: 'f' as 'f' | 'm'

    });

    const handleChanges = (e: any) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(user);

    }



    

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Email" 
                    className="input" 
                    name='email'
                    value={user.email} 
                    onChange={(e) => handleChanges(e)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="input" 
                    value={user.password} 
                    name='password'
                    onChange={(e) => handleChanges(e)} 
                />
                <input 
                    type="number" 
                    placeholder="Age" 
                    className="input" 
                    value={user.age} 
                    name='age'
                    onChange={(e) => handleChanges(e)}
                />
                <input 
                    type="checkbox" 
                    className="input" 
                    checked={user.terms}
                    name='terms'
                    onChange={(e) => handleChanges(e)}
                />
                <button className="button" type="submit">Login</button>
            </form>
        </div>
    )
}

