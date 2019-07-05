// Higher order component (HOC) - a component that renders another component
// reuse code 
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>
      Info
    </h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div> {props.isAdmin && <p>This is private info. Do not share!</p>}
      <WrappedComponent {...props} />
    </div>
  )
}


const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You are not authenticated</p>}

    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAdmin={false} info="This is the info" isAuthenticated={true} />, document.getElementById('root'))