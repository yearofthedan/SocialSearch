import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
import ManageTagsView from './ManageTagsView';
import SearchResultView from './SearchResultView';

const BasicApp = TabNavigator({
  SearchResults: { screen: SearchResultView },
  ManageTags: { screen: ManageTagsView },
});

AppRegistry.registerComponent('SocialSearch', () => BasicApp);
