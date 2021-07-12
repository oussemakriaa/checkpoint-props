import React from 'react'
import PropTypes from "prop-types";

const Profile = props => {
    return (
        <div>
            <div>
                <>{props.children}</>
            </div>
            <div>
                <h1>{props.profile.fullname}</h1>
                <h1>{props.profile.sexe}</h1>
                <h1>{props.profile.profession}</h1>
                <button onClick={() => props.handleClick(props.profile.fullname)} style={{backgroundColor:'black',color:'white',borderRadius:'10px',width:'80%',height:'30%'}}>name</button>
            </div>

        </div>
    )
}
Profile.defaultProps =
    { fullname: "Oussema kriaa", sexe: "homme", profession: "Full Stack Dev" };

    Profile.propTypes={profile: PropTypes.object,
    handleClick:PropTypes.func,
children:PropTypes.object}

export default Profile
