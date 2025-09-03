import React from "react";
import '../index.css';
import HeadComponent from "./HeadComponent";
import Footer from "./FooterComponent";
import file from './img/file.svg';
import clock from './img/clock.svg';
import Frame from './img/Frame.svg';
import live from './img/live.svg';
const PostClass = () => {
    return (
        <>
         <body>
        <HeadComponent />
            <div className="container-fluid homepg">
                  <div className="schedule_overview pre_class" style={{width:'103vw', marginLeft:'-2%'}}>
                                        <h6 style={{marginLeft:'2%'}}>Home &gt; Introduction to user experience design</h6>
                                        <div className="row box_view">
                                            <h5 style={{borderBottom:'1px solid #908e8eff'}}><img src={file}/> Post-Class Preparation</h5>
                
                                            <div className="col-sm-12 classes">
                                                <div className="row" style={{borderBottom:''}}>
                                                      <div className="col-sm-9">
                                                   <h5 className="title">Class Completed</h5>
                                                </div>
                                                <div className="col-sm-3">
                                                    <span className="start_timer"><img src={live}/></span>
                                                </div>
                                                <div className="col-sm-11">
                                                     <div class="alert alert-success alert-dismissible">
                                                            
                                                           <strong>Session Summary<br/></strong> Duration: 1hr 32min • Attendance: 32/35 students • Recording: Available
                                                     </div>

                                                     <div className="col-sm-12 material_list">
                                                        <h4>Resources and Materials</h4>
                                                             <div className="col-sm-12 materials">
                                                                <span> Class Recording<br/></span>
                                                                <span> Presentation Slides<br/></span>
                                                                <span>Code Examples and Demos<br/></span>
                                                                <span>Assignment: Build a HOC<br/></span>
                                                                
                                                                
                                                                
                                                             </div>
                                                     </div>

                                                     <div className="col-sm-12 material_list">
                                                        <h4><br/>Next Steps</h4>
                                                                

                                                             <div className="col-sm-12 materials">  
                                                              <span> Camera: working<br/></span>
                                                                <span> Microphone: Working<br/></span>
                                                                <span> Internet: Stable (45 Mbps)<br/></span>
                                                                <span> Browser: Up to date<br/></span>                                                                   
                                                               
                                                                </div>
                                                             </div>

                                                             <button className="join_button">Rate This Class</button>
                                                             <button className="join_button">Back To Schedule</button><br/>
                                                     </div>
<br/>
                                                </div>

                                    
                                               
                                  </div>

                                   <div className="col-sm-12 next_lesson">
                        <div className="col-sm-4">
                            <div className="contents">
                                <span><b>Calender Integration</b><br/></span>
                                <span>Sync with Google Calendar, Outlook, or Apple Calendar</span>
                            </div>
                        </div>

                         <div className="col-sm-4">
                            <div className="contents">
                                <span><b>Calender Integration</b><br/></span>
                                <span>Sync with Google Calendar, Outlook, or Apple Calendar</span>
                            </div>
                        </div>

                         <div className="col-sm-4">
                            <div className="contents">
                                <span><b>Calender Integration</b><br/></span>
                                <span>Sync with Google Calendar, Outlook, or Apple Calendar</span>
                            </div>
                        </div>
                     </div>
                
                                     
                                </div>
                             </div>
                             <div id="footer">
 <Footer />
                             </div>
               
            </div>
            
            </body>
        </>
    )
}
export default PostClass;