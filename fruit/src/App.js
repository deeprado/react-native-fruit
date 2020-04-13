import React from 'react';

// 全局注册并注入mobx，首页新品，分类页，商品详情页，购物车页面都要用到store
import {Provider} from 'mobx-react';
// 获取store实例
import store from './mobx/store';
// 路由
import AppContainer from './AppContainertainer';

class App extends React.Component {
  render() {
    return (
      <Provider rootStore={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
