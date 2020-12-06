import React, {useState} from 'react'
import pics from '../picture/form.jpg'
import Footer from '../footer/footer'
import './form-input.css'

const Forms = ()=>{
const [name, setname] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')



    return(
        <div  className='input-form-container'>
                <div className="imgBox">
                <img src={pics} alt="work at office"/>
                </div>

                <div className="jobText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic corporis consectetur architecto repellat
                 sapiente qui quam velit aut ex, harum illo quae, commodi consequuntur veritatis eum nisi dolore? Accusamus, 
                 libero perferendis fugiat alias 
            </div>

            <form action="" 
             className='input-form'>

                <input 
                type="text"
                className='form-input'
                placeholder='First Name'
                value= {name}
                onChange ={e => setname(e.target.value)}
                />

                <input 
                type="email"
                className='form-input'
                placeholder='Email'
                value= {email}
                onChange ={e => setemail(e.target.value)}
                />

                <input 
                type="password"
                className='form-input'
                placeholder='Password'
                value= {password}
                onChange ={e => setpassword(e.target.value)}
                />

            </form>

            <Footer/>

        </div>
    )
} 
export default Forms