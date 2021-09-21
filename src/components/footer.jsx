import React from "react"
import {AiOutlinePhone, AiOutlineMail,AiOutlineWhatsApp, AiOutlineInstagram,AiOutlineGithub,AiOutlineLinkedin} from "react-icons/all"
import "../style/footer.scss"

class FooterComponent extends React.Component{
    render(){
        return(
            <footer>
            <div className="footer" id="footer">
                <h1 style={{textAlign:"center", color:"white"}}>Contact Me</h1>
                <div className="footer-caption">
                    <p style={{color:"white", marginLeft:"5%"}}><AiOutlinePhone/> 0851-5743-1699</p>
                    <p style={{color:"white", marginLeft:"5%"}}><AiOutlineWhatsApp/> 0877-2203-9749</p>
                    <p style={{color:"white", marginLeft:"5%"}}><AiOutlineMail/> patrajuanda10@gmail.com</p>
                    <p style={{color:"white", marginLeft:"5%"}}><AiOutlineInstagram/> patra.je</p>
                    <a href="https://github.com/JuandaPatra" style={{color:"white", marginLeft:"5%", textDecoration:"none"}}><AiOutlineGithub/> JuandaPatra</a>
                    <a href="https://www.linkedin.com/in/rahmadjuandapatra/" style={{color:"white", marginLeft:"5%", textDecoration:"none"}}><AiOutlineLinkedin/> rahmadjuandapatra</a>

                </div>

            </div>
            </footer>
        )
    }
}

export default FooterComponent