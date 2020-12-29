import React, {Component} from 'react'
import './About.css'


class About extends Component {
    render() {
        return (
            <div>
                <div className='about'>
                    <div className='quote--container'>
                        <p className='quote'>
                        We all <span className='quote--highlight'>eat</span>&hellip; and it would be a sad waste of opportunity to eat <span className='quote--highlight'>badly</span>. 
                        </p>
                        <p className='quote--author'>&ndash; Anna Thomas</p>
                    </div>

                    <div className='paragraph'>
                        <p className='aboutPara'>Face it: you're a workaholic. Maybe not always consciously, but more often than not, you look up at the end of that
                        "last thing" you were just finishing up, and notice you're the only one <em>still</em> in the office! Damn, not again!
                        That's the <em>third</em> time this week! Oh well, you think to yourself, no distractions ; I can finish this <em>real</em>
                        last thing before I go home and...DINNER! You haven't had dinner!</p>
                        
                        <p className='aboutPara'>This is where <em>we</em> step in. No more fast, greasy, or generally unhealthy late-night entrees that conspire with your
                        workaholic ways to cause that inevitable heart attack! We're not judging, just sayin'...</p>
                        
                        <p className='aboutPara'>Let our world-class and trained culinary chefs provide thoughtful and well-balanced meals for you so you can finally, 
                        <em>finally</em> get rid of that "last thing" that's taking precedence right now!</p>
                        
                        <p className='available'>** Currently, we're only able to offer our services to the greater D.C. area. Please check back periodically as we add new cities!**</p>
                    </div>
                </div>


            </div>
        )
    }
}



export default About

