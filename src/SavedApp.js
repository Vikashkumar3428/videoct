import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import {HashRouter, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import BasicFilm from 'react-film';
import RCard from './Recommended.json';
import Footer from './Footer';
class App extends Component {
  state = {
    itemslist :[],
    serieslist:[],
  }

  componentDidMount() {
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=Webseries&key=AIzaSyDEngdaKZQGP__ZfcOWwLgiKUXbO4GMwVU")
    .then(res => res.json())
    .then(res => console.log())
    .then(res => this.setState({itemslist: [...res.items]}))
      
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=English%20web%20series&key=AIzaSyDEngdaKZQGP__ZfcOWwLgiKUXbO4GMwVU")
    .then(res2 => res2.json())
    .then(res2 => this.setState({serieslist: [...res2.items]}))

    
  }
  render(){
    let response_series = this.state.serieslist.map((seri, index) => {
      return (
        
          <div className="webseries_cards_div">
            <div className="card1 mt-2 " key ={seri.id.videoId}>
              <img src={seri.snippet.thumbnails.high.url}  alt="Card image cap" />
            </div>
          </div>

          );
    })
    let response = this.state.itemslist.map((data, index) => {
      return (
          <div className="webseries_cards_div">
            <div className="card1 mt-2 " key ={data.id.videoId}>
              <img src={data.snippet.thumbnails.high.url}  alt="Card image cap" />
            </div>
          </div>

          );
    })
        return (
    <HashRouter>
    <Header />
    <div className=" main">
    <BasicFilm  className="caro">
      <img alt="Cat 01" src={require('./img/chandigarh.webp')} />
      <img alt="Cat 03" src={require('./img/mirzapur.webp')} />
      <img alt="Cat 01" src={require('./img/thebigbang.webp')} />
      <img alt="Cat 01" src={require('./img/twoandhalf.webp')} />
      <img alt="Cat 02" src={require('./img/borat.webp')} />
      <img alt="Cat 04" src={require('./img/black-box.webp')} />
      <img alt="Cat 05" src={require('./img/missionimpossible.webp')} />
      <img alt="Cat 06" src={require('./img/lovestory.webp')} />
      <img alt="Cat 07" src={require('./img/breatheinto.webp')} />
      <img alt="Cat 08" src={require('./img/thelie.webp')} />
    </BasicFilm>
<div className="text">Shows Recommended For You</div>
<BasicFilm className="row gallery mx-0" >
{response}

</BasicFilm>

      <BasicFilm className="row gallery mx-0" > {response_series} </BasicFilm>


<div className="text">Popular Movies</div>

      <BasicFilm className="row gallery mx-0"> {response} </BasicFilm>

<div className="text">Coming Soon</div>
<div className="row gallery2">
          <div className=" col comingsoon" style={{width: '18rem'}}>
            <img className="card-img-top" src={require('./img/thepack.webp')} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text"><button className="mx-2">Play</button><button>Details</button></p>
            </div>
          </div>
          <div className="col comingsoon" style={{width: '18rem'}}>
            <img className="card-img-top" src={require('./img/chalaang.webp')} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text"><button className="mx-2">Play</button><button>Details</button></p>
            </div>
          </div>

</div>

<div className="text">Popular Shows</div>
      <BasicFilm className="row  gallery "> {response} </BasicFilm>
          <Footer />

    </div>    

    </HashRouter>
  );
}
}
export default App;
