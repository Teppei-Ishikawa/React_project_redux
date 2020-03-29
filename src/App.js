import React from 'react';
import PropsTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hana", age: 5},
    {name: "Toshinashi", age: 1}
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>私はねこだよ。飼い主{props.name}さん。そして{props.age}
  際だよ</div>
}

User.propTypes = {
  name: PropsTypes.string,
  age: PropsTypes.number.isRequired
}

export default App;
