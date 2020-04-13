'use strict';

import React from 'react';

import PropTypes from 'prop-types';

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';

import theme from '../color';

const deviceWidth = Dimensions.get('window').width;
const DOT_SIZE = 6;
const DOT_SAPCE = 4;

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
  },

  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: '#E0E1E2',
    marginLeft: DOT_SAPCE,
    marginRight: DOT_SAPCE,
  },

  curDot: {
    position: 'absolute',
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: theme.color,
    margin: DOT_SAPCE,
    bottom: -DOT_SAPCE,
  },
});

// propTypes: {
//   goToPage: PropTypes.func,
//   activePage: PropTypes.number,
//   pageCount: PropTypes.number,
// },

class DefaultViewPageIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewWidth: 0,
    };
  }

  renderIndicator(page) {
    //let isTabActive = this.props.activePage === page;
    return (
      <TouchableOpacity
        style={styles.tab}
        key={'idc_' + page}
        onPress={() => this.props.goToPage(page)}>
        <View style={styles.dot} />
      </TouchableOpacity>
    );
  }

  render() {
    let pageCount = this.props.pageCount;
    let itemWidth = DOT_SIZE + DOT_SAPCE * 2;
    let offset =
      (this.state.viewWidth - itemWidth * pageCount) / 2 +
      itemWidth * this.props.activePage;

    //let left = offset;
    let offsetX = itemWidth * (this.props.activePage - this.props.scrollOffset);
    let left = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [offsetX, offsetX + itemWidth],
    });

    let indicators = [];
    for (let i = 0; i < pageCount; i++) {
      indicators.push(this.renderIndicator(i));
    }

    return (
      <View
        style={styles.tabs}
        onLayout={(event) => {
          let viewWidth = event.nativeEvent.layout.width;
          if (!viewWidth || this.state.viewWidth === viewWidth) {
            return;
          }
          this.setState({
            viewWidth: viewWidth,
          });
        }}>
        {indicators}
        <Animated.View style={[styles.curDot, {left}]} />
      </View>
    );
  }
}

export default DefaultViewPageIndicator;
