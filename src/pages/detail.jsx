import React from "react";
import {  Button, Image } from "react-bootstrap";
import { connect } from "react-redux";
import "../style/detail.scss"
import {FaGithub,FaTelegramPlane} from "react-icons/all"

class DetailPage extends React.Component {
  render() {
    return (
      <div className="detail">
          <h1 className="title">{this.props.portofolio[this.props.location.search.substring(1)].title}</h1>
          <div className="button-go-to" >
          <Button variant="secondary" style={{marginRight:"2%"}} disabled={this.props.portofolio[this.props.location.search.substring(1)].dis === true ? true : false} ><a href={this.props.portofolio[this.props.location.search.substring(1)].link} target="_blank" style={{textDecoration:"none", color:"white"}}><FaTelegramPlane/> Go to Website</a></Button>
          <Button variant="secondary"><a href={this.props.portofolio[this.props.location.search.substring(1)].git} target="_blank" style={{textDecoration:"none", color:"white"}}><FaGithub/> Check Github</a> </Button>
          </div>
        <div className="cont-detail">
        <Image className="detail-img" src={this.props.portofolio[this.props.location.search.substring(1)].img} rounded style={{width:"90vw"}} />
        <div className="detail-caption">
            <p>{this.props.portofolio[this.props.location.search.substring(1)].title}</p>
            <p>Deskripsi :</p>
            <p>{this.props.portofolio[this.props.location.search.substring(1)].desc}</p>
            <p>Jenis Proyek :</p>
            <p>Pribadi / Latihan</p>
        </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    portofolio: state.profileReducer.portofolio,
  };
};

export default connect(mapStateToProps)(DetailPage);
