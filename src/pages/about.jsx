import React from "react"
import {FaReact,FaSass, SiJavascript, SiCss3, SiHtml5,BsFillBootstrapFill,FaGithub,SiMysql,SiMongodb,FaNodeJs} from "react-icons/all"
import "../style/about.scss"

class About extends React.Component{
    render(){
        return(
            <div className="about">
             <div className="abot-capt">
                 <h1 style={{textAlign:"center"}}>About Me</h1>
                    <p>Halo saya Rahmad Juanda Patra, seorang Web Developer dengan 0 tahun pengalaman. Memang dalam segi pengalaman masih sangat kurang namun  saya mau untuk belajar, dan bekerja keras untuk mengejar ketertinggalan. Saya menguasai HTML5, CSS, SASS, Javascript, Bootsrap, React, dan React Native. Namun saya tidak menutup kemungkinan untuk menjadi Full Stack Developer karena memiliki pengetahuan juga dalam Express JS, MySQL dan MongoDB. Saya melihat kemungkinan untuk bekerja WFO maupun WFH.  </p>

             </div>
             <div>
                        <div>
                            <h1>Formal Education</h1>
                            <p>Universitas Muhammadiyah Malang 2018-2020</p>
                            <p>S-1 Teknik Mesin</p>
                            <p>Politeknik Negeri Banjarmasin 2015-2018</p>
                            <p>D-3 Teknik Mesin Produksi</p>
                            <h1>Non-Formal Education</h1>
                            <p>Purwadhika Digital School 2021</p>
                            <p>Full Stack Web Development</p>
                        </div>

                        <div className="skill">
                            <h1>Skill</h1>
                            <p><SiHtml5/> HTML5</p>
                            <p><SiCss3/> CSS3</p>
                            <p><SiJavascript/> Javascript</p>
                            <p><BsFillBootstrapFill/> Bootstrap</p>
                            <p><FaSass/> SASS</p>
                            <p><FaReact/> React</p>
                            <p><FaReact/> React Native</p>
                            <p><FaGithub/> Github</p>
                            <p><SiMysql/> Mysql</p>
                            <p><SiMongodb/> MongoDB</p>
                            <p><FaNodeJs/> Node.JS</p>

                        </div>
             </div>


                    </div>
        )
    }
}

export default About