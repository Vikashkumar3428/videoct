import React from 'react'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import Related from './Related.json'

const VideoPlayer=(props) => {
  console.log(props.location.details.src)
        return(
                      
                <div className="main">
                    <div className="video_div row">
                        <div className="video_details text-light container col-md order-2 order-md-1 p-5 m-5">
                                <h1 className=" video_details" style={{fontSize:'6vh'}}>{props.location.details.name}</h1>

                                <h2 className="display-4">{props.location.details.title}</h2>

                                <p className="display-6">{props.location.details.description}</p>
                                <p className="display-6"></p>  

                        </div>

                        <div className="video_player col-md order-1 order-md-2 p-5">
                        
                        <iframe className="responsive-iframe " 
                                allowfullscreen="allowfullscreen"
                                mozallowfullscreen="mozallowfullscreen" 
                                msallowfullscreen="msallowfullscreen" 
                                oallowfullscreen="oallowfullscreen" 
                                webkitallowfullscreen="webkitallowfullscreen"
                                frameborder="0"
                                src={props.location.details.src}>
                        </iframe>
                        </div>
                    </div>
                    <h1 className=" col-md-11 text-light ml-5 pl-4" style={{fontsize: '8vw'}}>Related Videos</h1>
                    <div className="row">
                            <div className="flex-container container col-md-11 pl-xs-1 pl-md-5">
                            {Related.map((bolly, index) => {
                              const title = bolly.snippet.title
                              const channelTitle =bolly.snippet.channelTitle
                              const videoId = bolly.snippet.videoId
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
                    </div>
                    <Footer />
                </div>
            
        )
    }

export default VideoPlayer;