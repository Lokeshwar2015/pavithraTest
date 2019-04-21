import { connect } from 'react-redux'
import AppComponent from "./AppComponent";
import {createUser} from "../actions/appComponentActions";

const mapStateToProps = (state, ownProps) => {
  return {
    userArray: state.userArray,
    active: ownProps.filter === state.visibilityFilter
  }
}

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      createUser :(user) =>  dispatch(createUser(user))
      }
    }

  const AppContainer = connect(
      mapStateToProps,
      mapDispatchToProps
  )(AppComponent)

  export default AppContainer

