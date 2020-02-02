import React from 'react';


function ExperienceCard({company, website, position, dates, skills, info}) {
    return (
        <div className="card">
            <div className="experience-card-info-container">
                <h3 className="header"> 
                    <span>
                        {position}
                    </span>
                    <br className="experience-position-br"/>
                    <span className="experience-company">
                        <a href={website} target="_blank">
                            {" @ " + company}
                        </a>
                    </span>
                    <div className="experience-dates">
                        {dates}
                    </div>
                </h3>

                <div className="experience-card-info">
                    {info}
                </div>
                <br></br>

                <span className="experience-skills">Skills: </span>{skills}

            </div>
        </div>
    )
}

export default ExperienceCard;