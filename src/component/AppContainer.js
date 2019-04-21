import { connect } from 'react-redux'
import AppComponent from "./AppComponent";

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: () => {

      }
    }
  }

  const AppContainer = connect(
      mapStateToProps,
      mapDispatchToProps
  )(AppComponent)

  export default AppContainer

