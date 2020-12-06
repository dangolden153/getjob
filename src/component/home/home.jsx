import React, {Component} from 'react'
import Job from '../job-directory'
import Jobs from '../jobs/jobs'
import './home.css'
import pics from '../picture/work.jpg'
import navbar from '../picture/nav.svg'
import Footer from '../footer/footer'


class Home extends Component{
constructor(){
    super()
    this.state ={
        jobCollection :Job
    }
}

render(){

    return(
        <div className='home'>
            <div className='homeContainer'>
    
                <div className="nav">
                    <img src={navbar} alt="nav bar"/>
                </div>
                <div className="imgBox">
                <img src={pics} alt="work at office"/>
                </div>

                <div className="jobText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic corporis consectetur architecto repellat
                 sapiente qui quam velit aut ex, harum illo quae, commodi consequuntur veritatis eum nisi dolore? Accusamus, 
                 libero perferendis fugiat alias earum ad autem excepturi doloremque a aut. Explicabo perferendis soluta por
                iste maxime nesciunt totam culpa.
            </div>
                <div className="job-Container">
                {
        this.state.jobCollection.map(job=> 
        <Jobs key={job.id} job={job}>{job}</Jobs>)

                }
                </div>
                
                <Footer/>
            </div>
        </div>
    )
    }
}

export default Home