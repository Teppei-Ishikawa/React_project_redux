import React from 'react';

const App = () => {
  const profiles = [
    {name: "Taro", age:10},
    {name: "Hana", age:5},
    {name: "Toshinashi"}
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
  return <div>私はねこだよ。飼い主{props.name}さん。そして年は{props.age}だよ</div>
}

User.defaultProps = {
  age:1
}

export default App;
