import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
import SearchResultView from './SearchResultView';

const BasicApp = TabNavigator({
  SearchResultView: { screen: SearchResultView },
});

AppRegistry.registerComponent('SocialSearch', () => BasicApp);
