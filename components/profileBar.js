import React from 'react'

const ProfileBar = (props) => {
    return (
      <div className='profileBar'>
        <div><img src={props.userImage}/></div>
        <div><h1>{props.actualName}</h1></div>
        <div><h2>{props.userName}</h2></div>
        <div><h3>{props.bio}</h3></div>

        <div><h3>{props.location}</h3></div>
        <div><h3>{props.joinDate}</h3></div>
        <div><h3>Organizations</h3></div>
        <div className='organizations'>{
          props.organizations.map(function (organization) {
            return <div><img src={organization.image}/></div>
          })
        }</div>
      </div>
    )
}

export default ProfileBar
