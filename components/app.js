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
      organizations: {
        kokako2016 : 'https://avatars0.githubusercontent.com/u/20118046?v=3&s=70',
        fallenStarz : 'https://avatars2.githubusercontent.com/u/22086833?v=3&s=70',
        devTweets : 'https://avatars2.githubusercontent.com/u/22086833?v=3&s=70'
      }

    }
  }

  render () {
    return(
    <div>
      <NavBar userImage={this.state.userImage}/>
      <ProfileBar userImage={this.state.userImage} actualName={this.state.actualName} userName={this.state.userName} bio={this.state.bio} location={this.state.location} joinDate={this.state.joinDate}
      organizations={this.state.organizations.kokako2016} organizations={this.state.organizations.fallenStarz} organizations={this.state.organizations.devTweets}
        />
    </div>)
  }

}

export default App
