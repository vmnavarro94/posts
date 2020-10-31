import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import { Users, Posts, Details } from './screens';

const AppNavigator = createStackNavigator({
  Users: {
    screen: Users,
  },
  Posts: {
    screen: Posts,
  },
  Detail: {
    screen: Details,
  },
}, {
  initialRouteName: 'Users',
});

export default createAppContainer(AppNavigator);

