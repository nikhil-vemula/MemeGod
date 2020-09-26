import { render } from '@testing-library/react'
import React from 'react'
import Home from './Home'

test("renders Home view", ()=>{
    const component = render(<Home/>);
    expect(component).toBeDefined();
})