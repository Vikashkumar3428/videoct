import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import {HashRouter, Link , Route , Switch} from 'react-router-dom';
import Series from './webseries.json';
import "bootstrap/dist/css/bootstrap.min.css";
import BasicFilm from 'react-film';
import Footer from './Footer';
import English from './Englishwebseries.json';
import Movies from './Moviesdata.json';
import Bollywood from './Bollywood.json';
class App extends Component {
  state = {
    itemslist :[],
    serieslist:[],
    bollylist:[]
  }

  // componentDidMount() {
    // fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=Webseries&key=AIzaSyBHUo1_0wxEYU1E_kvSnfBHs54EumE7ZMc")
    // .then(res => res.json())
    // .then(res => this.setState({itemslist: [...res.items]}))
      
    // fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=English%20web%20series&key=AIzaSyBHUo1_0wxEYU1E_kvSnfBHs54EumE7ZMc")
    // .then(res2 => res2.json())
    // .then(res2 => this.setState({serieslist: [...res2.items]}))
      
  //   fetch("./webseries.json")
  //   .then(res3 => res3.json())
  //   .then(res3 => this.setState({bollylist: [...res3.items]}))
    
  
  // }
  render(){
    // let response_series = this.state.serieslist.map((seri, index) => {
    //   return (
        
    //       <div className="webseries_cards_div">
    //         <div className="card1 mt-2 " key ={seri.id.videoId}>
    //           <img src={seri.snippet.thumbnails.high.url}  alt="Card image cap" />
    //         </div>
    //       </div>

    //       );
    // })
 
    // let response = this.state.itemslist.map((data, index) => {
    //   const title = data.snippet.title
    //   const channelTitle =data.snippet.channelTitle
    //   const videoId = data.snippet.videoId
    //   const description = data.snippet.description
    //   const embed ='https://www.youtube.com/embed/'
    //   return (
        
    //     <Link to={{
    //       pathname:'/player',
    //       details:{
    //         name: title,
    //         title:channelTitle,
    //         src:embed+ videoId,
    //         description:description
    // }
    //   }}
    //   > 
    //               <div className="webseries_cards_div">
    //                 <div className="card1 mt-2 " >
    //                     <img src={data.snippet.thumbnails.high.url}  alt="Card image cap" />
    //                 </div> 
    //               </div>
    //   </Link> 

    //       );
    // }) 

        return (
       <>
    <Header />
    
    
    <div className=" main">
    <BasicFilm  className="caro">
      <Link to={{
    pathname:'/player',
    details:{
      name: "amritsar Chandigarh movie New Latest Punjabi Movie 2019 gippy grewal full movie",
      title:"new punjabi movies",
      src:"https://www.youtube.com/embed/HDT_ZHYfpDU",
      description:"AmritsarChandigarh, Chandigarh Amritsar Chandigarh full, #gippygrewal, CHANDIGARH AMRITSAR CHANDIGARH, pujabi movie, latest movies, upcoming ..."
}
  }} >
  <img alt="Cat 01" src={require('./img/chandigarh.webp')} /></Link>
  <Link to={{
    pathname:'/player',
    details:{
      name: "MIRZAPUR S2 - Official Trailer | Pankaj Tripathi, Ali Fazal, Divyenndu | Amazon Original |Oct23",
      title:"Amazon Prime Video India",
      src:"https://www.youtube.com/embed/xMKzdQrC5TI",
      description:"Amazon Prime Video presents Mirzapur Season 2 Official Trailer 2020, Starring Pankaj Tripathi, Ali Fazal, Divyenndu, Shweta Tripathi Sharma, Rasika Dugal, ..."
}
  }} >
  <img alt="Cat 03" src={require('./img/mirzapur.webp')} /></Link>
  <Link to={{
    pathname:'/player',
    details:{
      name: "The Beginning of Everything -- The Big Bang",
      title:"Kurzgesagt – In a Nutshell",
      src:"https://www.youtube.com/embed/m30sXoJB8e8",
      description:"How did everything get started? Has the universe a beginning or was it here since forever? Well, evidence suggests that there was indeed a starting point to this ..."
}
  }} >
  <img alt="Cat 01" src={require('./img/thebigbang.webp')} /></Link>
      <Link to={{
    pathname:'/player',
    details:{
      name: "Two and a Half Men  ",
      title:"Charlie Harper",
      src:"https://www.youtube.com/embed/p_Wlyahy-Dg",
      description:"Two and a Half Men : Best of season 6 clip2 Two and a Half Men : Best of season 6 clip2"
}
  }}><img alt="Cat 01" src={require('./img/twoandhalf.webp')} /></Link>
      <Link to={{
    pathname:'/player',
    details:{
      name: "Borat visits Sydney and wants to buy a wife!",
      title:"Gabson",
      src:"https://www.youtube.com/embed/Qgxbzgd8kmY",
      description:"borat in sydney, recorded from television, interview with him at a beach in australia."
}
  }}><img alt="Cat 02" src={require('./img/borat.webp')} /></Link>
      <Link to={{
    pathname:'/player',
    details:{
      name:"Black Box – Official Trailer",
      title:"Amazon Prime Video",
      src:"https://www.youtube.com/embed/=nj6JIzrIzxk",
      description:"WelcomeToTheBlumhouse #BlackBoxMovie Directed by Emmanuel Osei-Kuffour Jr. (Born With It) and script by Osei-Kuffour Jr. and Stephen Herman, Black Box ..."
}
  }}><img alt="Cat 04" src={require('./img/black-box.webp')} /></Link>
      <Link to={{
    pathname:'/player',
    details:{
      name: "Action Movies 2020   Tom Cruise Mission Full Movies English   Tom Cruise Impossible",
      title:"Kenneth Harrower",
      src:"https://www.youtube.com/embed/sLq1VE6_-Pw",
      description:""
}
  }}><img alt="Cat 05" src={require('./img/missionimpossible.webp')} /></Link>
      <Link to={{
    pathname:'/player',
    details:{
      name: "Halal Love Story",
      title:"Love Story",
      src:"https://www.youtube.com/embed/j2Exm4LOB0w",
      description:"A group of friends attempt to make a 'halal' film that conforms to the guidelines and descriptions of an Islamic organization which they are a part of."
}
  }}><img alt="Cat 06" src={require('./img/lovestory.webp')} /></Link>
      <Link to={{
    pathname:'/player',
    details:{
      name: "Breathe - Into The Shadows | Official Trailer | Abhishek Bachchan, Amit Sadh, Nithya Menen | July 10",
      title:"Amazon Prime Video India",
      src:"https://www.youtube.com/embed/nxE-k2MLQIA",
      description:"A murderer or a father? This is the story of a man who did all he could to save his family. Presenting Breathe - Into The Shadows Official Trailer, a new Amazon ..."
}
  }}><img alt="Cat 07" src={require('./img/breatheinto.webp')} /></Link>
      <Link to={{
    pathname:'/player',
    details:{
      name: "The Lie (2018) 'FULL MOVIE HD",
      title:"Rathu nyinyir",
      src:"https://www.youtube.com/embed/czIBLZxLlzk",
      description:"YOU'CAN'WATCH'FULL MOVIE↘ ↓ Visit: https://bit.ly/35L37Fu Click the (i) button below to iPhone."
}
  }}><img alt="Cat 08" src={require('./img/thelie.webp')} /></Link>
    </BasicFilm>

<div className="text">Shows Recommended For You</div>

 <BasicFilm className="row gallery mx-0" >
                  
 {Series.map((bolly, index) => {
  const title = bolly.snippet.title
  const channelTitle =bolly.snippet.channelTitle
  const videoId = bolly.id.videoId
  const description = bolly.snippet.description
  const embed ='https://www.youtube.com/embed/'+ videoId
  
  return (
    
    <Link to={{
    pathname:'/player',
    details:{
      name: title,
      title:channelTitle,
      src:embed,
      description:description
}
  }}
  > 
              <div className="webseries_cards_div">
                <div className="card1 mx-2 " >
                    <img src={bolly.snippet.thumbnails.high.url}  alt="Card image cap" />
                </div> 
              </div>
  </Link> 

      );
})}
</BasicFilm>    
 

<div className="text">Web Series</div>
      <BasicFilm className="row gallery " > 
      {English.map((bolly, index) => {
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
            src: embed + videoId,
            description:description
      }
        }}
        > 
                    <div className="webseries_cards_div">
                      <div className="card1 mx-2 " >
                          <img src={bolly.snippet.thumbnails.high.url}  alt="Card image cap" />
                      </div> 
                    </div>
        </Link> 
      
            );
      })}
      </BasicFilm>


<div className="text">Popular Movies</div>

      <BasicFilm className="row gallery mx-0"> 
      {Movies.map((bolly, index) => {
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
            src: embed + videoId,
            description:description
      }
        }}
        > 
                    <div className="webseries_cards_div">
                      <div className="card1 mx-2 " >
                          <img src={bolly.snippet.thumbnails.high.url}  alt="Card image cap" />
                      </div> 
                    </div>
        </Link> 
      
            );
      })}
      
      </BasicFilm>

<div className="text">Coming Soon</div>
<div className="row gallery2">

          <div className=" col comingsoon" style={{width: '18rem'}}>
<Link to='/player'>            

            <img className="card-img-top" src={require('./img/thepack.webp')} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text"><button className="mx-2">Play</button><button>Details</button></p>
            </div>
</Link>
          </div>


          <div className="col comingsoon" style={{width: '18rem'}}>
<Link to='/player'>           
            <img className="card-img-top" src={require('./img/chalaang.webp')} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text"><button className="mx-2">Play</button><button>Details</button></p>
            </div>
</Link>
          </div>

</div>



<div className="text">Popular Shows</div>
      <BasicFilm className="row  gallery "> 
      {Bollywood.map((bolly, index) => {
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
            src: embed + videoId,
            description:description
      }
        }}
        > 
                    <div className="webseries_cards_div">
                      <div className="card1 mx-2 " >
                          <img src={bolly.snippet.thumbnails.high.url}  alt="Card image cap" />
                      </div> 
                    </div>
        </Link> 
      
            );
      })}
         
      </BasicFilm>
          
      <Footer />

    </div>    
    </>
  );
}
}
export default App;
