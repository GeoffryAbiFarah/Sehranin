import {Component} from 'react';
import "../styles/Home.css";
import PartyCard from "./PartyCard";

class Home extends Component{

    render(){
        return(
            <div>
                <PartyCard/>
            </div>
        );
    }
}

export default Home;