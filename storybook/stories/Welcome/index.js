import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Angus from '../../../src'
const { PrimaryScreenHeader } = Angus
export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      justifyContent: 'center',
    },
    header: {
      fontSize: 18,
      marginBottom: 18,
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18,
    },
  };

  showApp = event => {
    const { showApp } = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };

  render() {
    return (
      <View style={this.styles.wrapper}>
        <PrimaryScreenHeader title="Welcome to Angus" subtitle="The most delicious UIKit on Earth" />
        <PrimaryScreenHeader title="ยินดีต้อนรับสู่แองกัส" subtitle="UIKit ที่จะทำให้คุณน้ำลายสอ" />
      </View>
    );
  }
}

Welcome.defaultProps = {
  showApp: null,
};

Welcome.propTypes = {
  showApp: PropTypes.func,
};
