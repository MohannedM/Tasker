import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import { Dispatch } from 'redux';
import MainLayout from '../modules/View/Layout/MainLayout'
import { authInit, authInitType, authState } from '../store/auth';
import AddTaskPage from './AddTaskPage';
import DashboardPage from './DashboardPage';
import LandingPage from './LandingPage'
import Login from './Login';
import LogoutPage from './Logout';
import NotFoundPage from './NotFoundPage';
import Register from './Register';

interface PageProps {
  isLoggedIn: boolean
  onAuthInit: () => authInitType
}

const Pages: React.FC<PageProps> = ({ isLoggedIn, onAuthInit }) =>  {
  useEffect(() => {
        onAuthInit()
  }, [onAuthInit])

  return (
  <MainLayout isLoggedIn={isLoggedIn}>
    <Switch>

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={LogoutPage} />

          <Route path="/add-task" component={AddTaskPage} />

          {!isLoggedIn && <Route path="/" exact component={LandingPage} />}
          {isLoggedIn && <Route path="/" exact component={DashboardPage} />}

          <Route path="/" component={NotFoundPage} />

    </Switch>
  </MainLayout>
  )
}


const mapStateToProps = (state: {auth: authState} ) => {
  return {
    isLoggedIn: !!state.auth.token
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onAuthInit: () => dispatch(authInit()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages)
