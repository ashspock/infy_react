import { Provider } from "react-redux";
// import AppRedux from "./AppRedux";
import AppRedux from './AppContainer';
import { bankStore } from './redux';

export default function App() {

  return (
    <>
      <Provider store={bankStore}>
        <AppRedux />
      </Provider>
    </>
  );
}

