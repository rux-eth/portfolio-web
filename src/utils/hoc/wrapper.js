//Our MUI Theme object - inject theme to the whole project
import Layout from "@components/layout";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "@styles/theme";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../actions/user_actions";

/**
  This function consumes a component and wraps it under layout. 
  Additionally you can have some checks in this function like conditional access 
  to a particular page based on user authentication.

  You can also implement your own function. Goal is to have all your components wrapped with the Layout HOC and Theme Provider
 */

const Wrapper = (Component) => {
  const HOCcheck = (props) => {
    const state = useSelector((state) => state.defaultReducer);
    const dispatch = useDispatch();
    console.log(state);

    useEffect(() => {
      dispatch(auth());
    }, []);

    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...props} />
        </Layout>
      </ThemeProvider>
    );
  };

  return HOCcheck;
};

export default Wrapper;
