import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import "../style/portofolio.scss"

class PortfolioPage extends React.Component {
  render() {
    return <div className="porto">
        <h1 style={{textAlign:"center", fontWeight:"bolder"}}>PORTFOLIO</h1>
        <div className="portoCont">
        {this.props.portofolio.map((item, index) =>{
            return <Card className="portoCard">
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title className="card-title">{item.title}</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text> */}
              <div style={{display:"flex", justifyContent:"center"}}>
              <Button variant="primary" as={Link} to={`/detail?${index}`}>Check</Button>
              </div>
            </Card.Body>
          </Card>
        
        })}

        </div>
        </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    portofolio: state.profileReducer.portofolio,
  };
};

export default connect(mapStateToProps)(PortfolioPage);
