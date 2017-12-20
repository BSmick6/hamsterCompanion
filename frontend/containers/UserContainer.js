import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Experiments from '../components/Experiments';
import Dashboard from '../components/Dashboard';
import EditExperiment from '../components/EditExperiment';
import NewExperiment from '../components/NewExperiment';
import TreatmentGroups from '../components/TreatmentGroups';
import Cages from '../components/Cages';
import Mice from '../components/Mice';
import PermissionsDenied from '../components/PermissionsDenied';
import '../components/styles/temp.css';

const UserContainer = () => {
  return (
    <div id="user-container">
      <h1>Hamster Companion</h1>
      <Switch>
        <Route path="/denied" exact component={PermissionsDenied} />
        <Route path="/experiment/new" exact component={NewExperiment} />
        <Route path="/experiment/:id/edit" component={EditExperiment} />
        <Route path="/experiment/:id" exact component={Dashboard} />
        <Route path="/experiment/:id/groups" component={TreatmentGroups} />
        <Route path="/experiment/:id/cages" component={Cages} />
        <Route path="/experiment/:id/mice" component={Mice} />
        <Route path="/" exact component={Experiments} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default UserContainer;
