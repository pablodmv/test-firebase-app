import React from 'react';
import RestaurantsScreen from '../screens/Restaurants/Restaurants';

import {createDrawerNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


const navigationOptions = {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: 'rgba(200, 38, 74, 1)',
		},
		headerTitleStyle: {
			textAlign: 'center',
			alignSelf: 'center',
			fontSize: 20,
			color: '#fff',
			fontWeight: 'bold'
		}
	}
};

const leftIcon = (navigation, icon) => <Icon
	name={icon}
	style={{marginLeft: 20}}
	size={20}
	color="white"
	onPress={() => navigation.openDrawer()}
/>;

const rightIcon = (navigation, icon) => <Icon
	name={icon}
	style={{marginLeft: 20}}
	size={30}
	color="white"
	onPress={() => navigation.navigate('ListRestaurants')}
/>;

const restaurantsScreenStack = createStackNavigator(
	{
		ListRestaurants: {
			screen: RestaurantsScreen,
			navigationOptions: ({navigation}) => ({
				title: 'Restaurantesss',
				drawerIcon: ({tintColor}) => (<Icon name="home" size={24} style={{color: tintColor}} />),
				headerLeft: leftIcon(navigation, 'bars')
			})
		},
	// 	AddRestaurant: {
	// 		screen: AddRestaurantScreen,
	// 		navigationOptions: ({navigation}) => ({
	// 			title: 'Añadir restaurante',
	// 			headerRight: rightIcon(navigation, 'home'),
	// 			headerLeft: leftIcon(navigation, 'bars'),
	// 		})
	// 	},
	// 	DetailRestaurant: {
	// 		screen: DetailRestaurantScreen,
	// 		navigationOptions: ({navigation}) => ({
	// 			title: 'Detalle del restaurante',
	// 			headerRight: rightIcon(navigation, 'home'),
	// 			headerLeft: leftIcon(navigation, 'bars'),
	// 		})
	// 	},
	// 	EditRestaurant: {
	// 		screen: EditRestaurantScreen,
	// 		navigationOptions: ({ navigation }) => ({
	// 			title: 'Editar restaurante',  // Title to appear in status bar
	// 			headerRight: rightIcon(navigation, 'home'),
	// 		})
	// 	},
 },
	navigationOptions
);

const RootStack = createDrawerNavigator(
	{
		RestaurantsScreen: {
			screen: restaurantsScreenStack,
      navigationOptions: {
          title: "Restaurantes",
          drawerIcon: ({tintColor}) => (<Icon name="home" size={24} style={{color: tintColor}} />),
        }
      }
	// 	ProfileScreen: {
	// 		screen: profileScreenStack
	// 	},
	// 	LogoutScreen: {
	// 		screen: logoutScreenStack
	// 	}
	 },
	{
		drawerBackgroundColor : 'rgba(128, 35, 60, 0.7)',
		contentOptions: {
			activeTintColor: 'white',
			activeBackgroundColor : 'transparent',
			inactiveTintColor : 'white',
			itemsContainerStyle: {
				marginVertical: 0,
			}
		},
	}
)
export default createAppContainer(RootStack);
