import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useGetGithubUserInfoQuery } from "./service/GithubService";
import { GIT_USER_NAME } from "./Constants";

const AppWrappedWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const { isLoading, data, isError, isSuccess } =
    useGetGithubUserInfoQuery(GIT_USER_NAME);
  return <div>{isLoading ? "Loading..." : JSON.stringify(data)}</div>;
};

const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<AppWrappedWithStore />);
