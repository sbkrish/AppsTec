import React, { Component } from 'react';
// import ImageCom from './components/ImageCom/ImageCom';
import Todo from './components/Todo/Todo';
// import { Provider } from 'react-redux';
// import Thunk from './components/Thunk/Thunk';
// import store from './redux/store';

// import FormRedux from './components/ReduxForm/FormRedux';

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //   <div>
      //     <Thunk />
      //   </div>
      // </Provider>
      // <ImageCom />
      <Todo />

    );
  }
}

export default App;
