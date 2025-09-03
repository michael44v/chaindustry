import React from "react";

const TodayClasses = () => {
    return (
        <>
            <div className="col-sm-12">
                <div className="content_holders">
                    <div className="col-sm-10">
                        <div className="description">
                                <span className="title"><b>Advanced React Patterns</b><br/></span>
                                <span className="teacher_name">with Sarah Johnson </span> -
                                <span className="subject">Web development</span><br/>
                                <span className="lcn">Virtual Room A</span>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <div>
                            <span className="time">2:00 PM - 3:30 PM<br/></span>
                            <span className="status">Registered</span>
                        </div>
                    </div>

                </div>

                <div className="content_holders" style={{marginTop:'1%'}}>
                    <div className="col-sm-10">
                        <div className="description">
                                <span className="title"><b>Database Design Fundamentals</b><br/></span>
                                <span className="teacher_name">with Mark Chan </span> -
                                <span className="subject">Backend development</span><br/>
                                <span className="lcn">Virtual Room B</span>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <div>
                            <span className="time">2:00 PM - 3:30 PM<br/></span>
                            <span className="status">Registered</span>
                        </div>
                    </div>

                </div>
  
                
            </div>
        </>
    )
}
export default TodayClasses;