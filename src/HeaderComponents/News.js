import React, {Component} from 'react'
import Footer from '../Footer'
import {Link} from 'react-router-dom';
import Newss from './News.json';
class News extends Component {
  //   state = {
  //   itemslist :[]
  // }

  // componentDidMount() {
  //   fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Latest%20News%20Hindi&key=AIzaSyDEngdaKZQGP__ZfcOWwLgiKUXbO4GMwVU")
  //   .then(res => res.json())
  //   .then(res => this.setState({itemslist: [...res.items]}))
  // }
   render() {
  //   let response_series = this.state.itemslist.map((seri, index) => {
  //     return (
        
        //     <div className="utube_card px-xs-2  px-md-4 ">
        //     <img src="https://i.ytimg.com/vi/O8_xIj0Nzx4/hqdefault.jpg" alt=""/>
        //   </div>

  //         );
  //   })

        return(
                <div className="main">
                <h1 className="text-light  text-center display-1">News</h1>
                   
                   <div className="flex-container container col-md-11 pl-xs-1 pl-md-5">
                   {Newss.map((bolly, index) => {
                    const title = bolly.snippet.title
                    const channelTitle =bolly.snippet.channelTitle
                    const videoId = bolly.id.videoId
                    const description = bolly.snippet.description
                    const embed ='https://www.youtube.com/embed/'
                    return (
                      
                      <Link to={{
                      pathname:'/player',
                      details:{
                        name: title,
                        title:channelTitle,
                        src:embed+ videoId,
                        description:description
                  }
                    }}
                    > 
                                <div className="webseries_cards_div">
                                  <div className="card1 mr-4 pr-4" >
                                      <img src={bolly.snippet.thumbnails.high.url}  alt="Card image cap" />
                                  </div> 
                                </div>
                    </Link> 
                  
                        );
                  })}
                  
                  
                  
                  </div>
                    <Footer/>
                </div>
        );
    }
};
export default News;