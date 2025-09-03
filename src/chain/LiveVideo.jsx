import React from "react";
import '../index.css';
import HeadComponent from "./HeadComponent";
import Footer from "./FooterComponent";
import file from './img/file.svg';
import live from './img/live.svg';

import Background from './img/Background.svg';

const LiveVideo = () => {
    return (
        <>
         <body>
        <HeadComponent />
            <div className="container-fluid homepg">
                  <div className="schedule_overview video_comp" style={{width:'103vw', marginLeft:'-2%'}}>
                                        <h6 style={{marginLeft:'2%'}}>Home &gt; introduction to User Experience Design</h6>
                                        <div className="row box_view">
                                            <div className="col-sm-10">
                                                   <h5><img src={file}/> Advanced React Patterns - Live</h5>
                                            </div>
                                            <div className="col-sm-2">
                                                <h5><img src={live}/></h5>
                                            </div>
                                           
                
                                            <div className="col-sm-12 classes">
                                                <div className="col-sm-9 video_controls">
                                                   <img src={Background} style={{width:'130%', height:'70%'}}/> 
                                                </div>
                     
                                           
                                          <div className="col-sm-12  video_stats">
                                            <div><br/>
                                                <p>Participants (32)</p>
                                                <div className="participants">
                                                    <span>SJ</span>
                                                    <span>NM</span>
                                                    <span>YOU</span>
                                                    <span>+28</span>
                                                </div>
                                            </div>
                                          </div>

                                       <div className="col-sm-12 qas">
                                            <div>
                                                <hr/>
                                                <p>Chat Q&A</p>
                                                <span><b>Alex M:</b> Great Explanation<br/></span>
                                                 <span><b>Serah M:</b> better Explanation<br/></span>
                                                  <span><b>You:</b> great!<br/></span>

                                                  <input type='text' placeholder="Type your message or question"/>
                                            </div>
                                        </div>  
                                     </div>
                
                                     
                                </div>
                             </div>
                <Footer />
            </div>
            
            </body>
        </>
    )
}
export default LiveVideo;