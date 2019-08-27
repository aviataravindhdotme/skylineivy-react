import React from 'react';
import Welcome from "./welcome";
import Usp from "./usp";

class Home extends React.Component{
    render(){
        return(
            <div>
              <Welcome />
              <Usp />
              </div>

        );
    }
}
export default Home;
