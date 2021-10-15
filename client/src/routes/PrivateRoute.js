import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, connect } from 'react-redux';




const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  
  <Route {...rest} component={ (props) => (
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/entrar" />
        )
  )} />
);


const mapStateToProps = (state) => {
  return (
    {
      isAuthenticated: state.authentication.isAuthenticated
    }
  )
};

export default connect(mapStateToProps)(PrivateRoute);






// export const PrivateRoute = ({
//   component,
//   path,
//   ...rest
// }) => {

//   const { isAuthenticated } = useSelector(
//     (state) => state.authentication
//   );


//   return isAuthenticated ? (
//     <Route exact path={path} component={component} {...rest} />
//   ) : (
//       <Redirect to={"/entrar"} />
//     );
// };



