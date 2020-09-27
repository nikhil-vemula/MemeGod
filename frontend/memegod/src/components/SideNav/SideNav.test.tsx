import { render } from '@testing-library/react'
import React, { useState } from 'react'
import SideNav from './SideNav'

test('renders SideNav component', () => {

    let [isOpen, setIsOpen] = useState(false)

    const component = render(<SideNav isOpen={isOpen} setIsOpen={setIsOpen} />);
    expect(component).toBeDefined();
})