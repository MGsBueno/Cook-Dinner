import React from 'react';
import { Text, Switch } from 'react-native';

import Tabs from '../../Components/Tabs';
import { Container, ConfigCard, ConfigText, ConfigSwitch } from './styles';

export default class Menu extends React.Component {

  static navigationOptions = { header: null };

  constructor(props) {
      super(props);
      this.state = { darkMode: false };
      this.onControlChange = this.onControlChange.bind(this);

  }

    onControlChange(value) {
        return this.setState({
            darkMode: !this.state.darkMode
        });
    }

  render(){
      return (
            <Container>
                <ConfigCard>
                    <ConfigText>Dark mode: {this.state.darkMode ? 'on' : 'off'}</ConfigText>
                    <Switch style={{alignSelf: 'center', marginLeft:'auto', marginRight: 10}}
                            value={ this.state.darkMode }
                            onValueChange={this.onControlChange}
                    />
                </ConfigCard>
                <Tabs screen='Menu' nav={this.props.navigation.navigate}/>
            </Container>
      );
  }
}
