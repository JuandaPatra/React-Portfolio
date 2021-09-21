import React from "react";
import {Switch, Route} from "react-router-dom"
import {Image}from "react-bootstrap"
import "./style/app.scss"
import {connect} from "react-redux"
import NavigationBar from "./components/navigationBar";
import PortfolioPage from "./pages/portfolio"
import FooterComponent from "./components/footer";
import DetailPage from "./pages/detail";
import About from "./pages/about";
class App extends React.Component{
  render(){
    console.log(this.props.profile)
    return(
      <div className="home">
        <NavigationBar/>
        <div className="banner">
          <div className="banner-caption">
          <h1>Rahmad Juanda Patra</h1>
          <h1>FrontEnd Developer</h1>

          </div>
          <div>
          <Image src={this.props.profile} roundedCircle className="prof-pic" />
          </div>

        </div>
        <Switch>
          <Route path="/" component={PortfolioPage} exact/>
          <Route path="/detail" component={DetailPage}/>
          <Route path="/about" component={About}/>
        </Switch>

        {/* <PortfolioPage/> */}

        <FooterComponent/>
        
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    profile : state.profileReducer.profile
  }
}

export default connect(mapStateToProps) (App)