import React from "react";
import '../index.css';
import HeadComponent from "./HeadComponent";
import Footer from "./FooterComponent";
import file from './img/file.svg';
import clock from './img/clock.svg';
import Frame from './img/Frame.svg';
const PreClass = () => {
    return (
        <>
         <body>
        <HeadComponent />
            <div className="container-fluid homepg">
                  <div className="schedule_overview pre_class" style={{width:'103vw', marginLeft:'-2%'}}>
                                        <h6 style={{marginLeft:'2%'}}>Home &gt; Introduction to user experience design</h6>
                                        <div className="row box_view">
                                            <h5 style={{borderBottom:'1px solid #908e8eff'}}><img src={file}/> Pre-Class Preparation</h5>
                
                                            <div className="col-sm-12 classes">
                                                <div className="row" style={{borderBottom:''}}>
                                                      <div className="col-sm-9">
                                                   <h5 className="title">Advanced React Patterns</h5>
                                                </div>
                                                <div className="col-sm-3">
                                                    <span className="start_timer">Starts in 15 minutes</span>
                                                </div>
                                                <div className="col-sm-11">
                                                     <div class="alert alert-danger alert-dismissible">
                                                            
                                                           <strong><img src={clock}/> </strong> Your class "Advanced React Patterns" starts in 15 minutes. Make sure you have a stable internet connection.
                                                     </div>

                                                     <div className="col-sm-12 material_list">
                                                        <h4>Class Materials</h4>
                                                             <div className="col-sm-12 materials">
                                                                <span> React Hooks Cheat Sheet<br/></span>
                                                                <span> Starter Code Repository<br/></span>
                                                                <span> Pre-Class Reading: Component Composition<br/></span>
                                                             </div>
                                                     </div>

                                                     <div className="col-sm-12 material_list">
                                                        <h4><br/>System Check</h4>
                                                                

                                                             <div className="col-sm-12 materials">  
                                                                  <img src={Frame} style={{transform:'scale(0.7)'}}/>  <span style={{marginLeft:'-0.2%'}}> Camera: working<br/></span>
                                                                <span> Microphone: Working<br/></span>
                                                                <span> Internet: Stable (45 Mbps)<br/></span>
                                                                <span> Browser: Up to date<br/></span>                                                                   
                                                               
                                                                </div>
                                                             </div>

                                                             <button className="join_button">Join Class Now</button><br/>
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
export default PreClass;