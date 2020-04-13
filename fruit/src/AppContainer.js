import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {cteateBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import HomeScreen from './scene/Home/HomeScreen';
import CategoryScreen from './scene/Category/CategoryScreen';
import CartScreen from './scene/Cart/CartScreen';
import MineScreen from './scene/Mine/MineScreen';
import ItemDetail from './scene/ItemDetail/ItemDetail';
import OrderScreen from './scene/Order/OrderScreen';

// import ShoppingCar from './shoppingCar/App'
import TabBarItem from './common/tabBarItem';
import theme from './common/color';

// TabNavigator
const Tab = cteateBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '主页',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            selectedImage={require('./assets/img/homeSelect.png')}
            normalImage={require('./assets/img/home.png')}
          />
        ),
      }),
    },

    Category: {
      screen: CategoryScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '分类',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            selectedImage={require('./assets/img/categorySelect.png')}
            normalImage={require('./assets/img/category.png')}
          />
        ),
      }),
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '购物车',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            selectedImage={require('./assets/img/cartSelect.png')}
            normalImage={require('./assets/img/cart.png')}
          />
        ),
      }),
    },

    Mine: {
      screen: MineScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            selectedImage={require('./assets/img/mineSelect.png')}
            normalImage={require('./assets/img/mine.png')}
          />
        ),
      }),
    },
  },

  // tabScreen配置
  {
    swipeEnabled: false,
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      activeTintColor: theme.color,
      inactiveTintColor: '#979797',
      labelStyle: {
        fontSize: 12, // 文字大小
      },
    },
  },
);

const Navigator = createStackNavigator(
  {
    Tab: {screen: Tab},
    ItemDetail: {screen: ItemDetail},
    Cart: {screen: CartScreen},
    OrderScreen: {screen: OrderScreen},
  },

  {
    navigationOptions: {
      // 开启动画
      animationEnabled: true,
      // 开启边缘触摸返回
      gesturesEnabled: true,
    },
    mode: 'card',
  },
);

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const AppContainer = createAppContainer(Navigator);
export default AppContainer;
