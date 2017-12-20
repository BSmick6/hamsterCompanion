import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { RaisedButton } from 'material-ui';

const PermissionsDenied = ()=>{
  render() {
    return(
      <div>
        <p className="error-msg" id="permissions-denied-msg">You do not have access to this page.</p>
        <Link to="/">
          <RaisedButton className="btn" label="Back to Experiments" secondary />
        </Link>
      </div>
    );
  }
}

export default PermissionsDenied;
