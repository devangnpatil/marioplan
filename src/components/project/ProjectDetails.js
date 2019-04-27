import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title {id}
                    </span>
                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                </div>
                <div className="card-action gret lighten--4 grey-text">
                    <div>Posted by Devang</div>
                    <div>2nd Jan 2019, 2AM</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
