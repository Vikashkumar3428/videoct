import React, { Component } from 'react';


class Footer extends Component  {
    render(){
        return(
            <footer className="page-footer text-light blue">
          <div className="footer-copyright  text-center py-3"><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2020 Copyright:
            <a href="#"> Videoct</a>
          </div>
          <hr className="container col-md-8 "/>
          <div className="text-center">
              <a href="#" className="mx-3"> Terms and Privacy Notice</a> 
              <a href="#" className="mx-3"> Sends Us Feedback</a>
              <a href="#" className="mx-3"> Help</a>
          </div>
    </footer>
            
        );
    }
}
export default Footer;