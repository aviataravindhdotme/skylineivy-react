import React from 'react';
import Welcome from "./welcome";
import Usp from "./usp";
import Featured from "../Shared/Featured";


class Home extends React.Component{
    render(){
        return(
            <div>
              <Welcome />
              <Usp />
              <Featured />
              </div>

        );
    }
}
export default Home;
