import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import { Dispatch } from 'redux';
import MainLayout from '../modules/View/Layout/MainLayout'
import { authInit, authInitType, authState } from '../store/auth';
// import NotFound from './NotFound'
// import AddRecipe from './AddRecipe'
// import EditRecipe from './EditRecipe'
// import ViewRecipes from './ViewRecipes'
import LandingPage from './LandingPage'
import Login from './Login';
import LogoutPage from './Logout';
import Register from './Register';
// import ViewRecipe from './ViewRecipe'

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

      {/* <Route path="/Recipes/edit/:id" component={EditRecipe} />
      <Route path="/Recipes/new" component={AddRecipe} /> */ }

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/logout" component={LogoutPage} />
      {/* <Route path="/" exact component={ViewRecipes} /> */}

      {/* <Route path="/" component={NotFound} /> */}

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
