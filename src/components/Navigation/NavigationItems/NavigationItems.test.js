import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from '../../../components/Navigation/NavigationItems/NavigationItems';
import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
	let wrapper; 
	beforeEach( () => {
		wrapper = shallow(<NavigationItems />);
	});
	it('should render two navigation item elements if not authenticated', () => {
		expect(wrapper.find(NavigationItem)).toHaveLength(2);
	});

	it('should render three navigation item elements if we are authenticated', () => {
		wrapper.setProps({isAuthenticated: true});
		expect(wrapper.find(NavigationItem)).toHaveLength(3);
	});

	it('should render three navigation item elements if we are authenticated', () => {
		wrapper.setProps({isAuthenticated: true});
		expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
	});
});
