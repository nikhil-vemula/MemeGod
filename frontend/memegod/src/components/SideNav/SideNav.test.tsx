import { render } from '@testing-library/react'
import React from 'react'
import SideNav from './SideNav'

test('renders SideNav component', () => {
    const component = render(<SideNav />);
    expect(component).toBeDefined();
})