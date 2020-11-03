import React, { Component } from 'react'
import { Link } from 'react-scroll'
class  Gallery extends Component{
 
  state = {
    itemslist :[]
  }

  // componentDidMount() {
  //   fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Latest%20News%20Hindi&key=AIzaSyDEngdaKZQGP__ZfcOWwLgiKUXbO4GMwVU")
  //   .then(res => res.json())
  //   .then(res => this.setState({itemslist: [...res.items]}))
  // }
    render() {
  //   let response_series = this.state.itemslist.map((seri, index) => {
  //     return (
        
          //       <div className="utube_card px-xs-2  px-md-4 ">
          //       <img src="https://i.ytimg.com/vi/O8_xIj0Nzx4/hqdefault.jpg" alt=""/>
          // </div>

  //         );
  //   })                                              {response_series}

        return(
          <div className="main">
          
          <div className="flex-container container col-md-11 pl-xs-1 pl-md-5">
          <Link to='/player'>  
          <div className="utube_card px-xs-2  px-md-4 ">
            <img src="https://i.ytimg.com/vi/O8_xIj0Nzx4/hqdefault.jpg" alt=""/>
          </div>
          </Link>
          <Link to='/player'>  
          <div className="utube_card px-xs-2  px-md-4 ">
            <img src="https://i.ytimg.com/vi/O8_xIj0Nzx4/hqdefault.jpg" alt=""/>
          </div>
          </Link>
          <Link to='/player'>  
          <div className="utube_card px-xs-2  px-md-4 ">
            <img src="https://i.ytimg.com/vi/O8_xIj0Nzx4/hqdefault.jpg" alt=""/>
          </div>
          </Link>
          <Link to='/player'>  
          <div className="utube_card px-xs-2  px-md-4 ">
            <img src="https://i.ytimg.com/vi/O8_xIj0Nzx4/hqdefault.jpg" alt=""/>
          </div>
          </Link>
          <Link to='/player'>  
          <div className="utube_card px-xs-2  px-md-4 ">
            <img src="https://i.ytimg.com/vi/O8_xIj0Nzx4/hqdefault.jpg" alt=""/>
          </div>
          </Link>
          <Link to='/player'>  
          <div className="utube_card px-xs-2  px-md-4 ">
            <img src="https://i.ytimg.com/vi/O8_xIj0Nzx4/hqdefault.jpg" alt=""/>
          </div>
          </Link>
          <Link to='/player'>  
          <div className="utube_card px-xs-2  px-md-4 ">
            <img src="https://i.ytimg.com/vi/O8_xIj0Nzx4/hqdefault.jpg" alt=""/>
          </div>
          </Link>
          <Link to='/player'>  
          <div className="utube_card px-xs-2  px-md-4 ">
            <img src="https://i.ytimg.com/vi/O8_xIj0Nzx4/hqdefault.jpg" alt=""/>
          </div>
          </Link>
          <Link to='/player'>  
          <div className="utube_card px-xs-2  px-md-4 ">
            <img src="https://i.ytimg.com/vi/O8_xIj0Nzx4/hqdefault.jpg" alt=""/>
          </div>
          </Link>
      
          </div>
        </div>
        );
    }
};
   
export default Gallery;