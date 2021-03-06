import React, { Component } from 'react'
import NavBar from './navBar'
import ProfileBar from './profileBar'

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      userImage: 'https://avatars0.githubusercontent.com/u/20106637?v=3&s',
      actualName: 'Brady Gillies',
      userName: 'bradymat',
      bio: 'Hey I develop lit things',
      location: 'New Zealand',
      joinDate: '23/06/2016',
      organizations: [
        {image : 'https://avatars0.githubusercontent.com/u/20118046?v=3&s'},
        {image : 'https://avatars2.githubusercontent.com/u/22086833?v=3&s'},
        {image : 'https://avatars0.githubusercontent.com/u/22357312?v=3&s'}
      ]

    }
  }

  render () {
    return(
      <div className='container'>
        <NavBar userImage={this.state.userImage}/>
        <ProfileBar
          userImage={this.state.userImage}
          actualName={this.state.actualName}
          userName={this.state.userName}
          bio={this.state.bio}
          location={this.state.location}
          joinDate={this.state.joinDate}
          organizations={this.state.organizations}/>
      </div>
    )
  }

}

export default App
