import React from 'react'
import { render } from "@testing-library/react";
import Header from "./Header";


test('renders Header', () => {
    const component = render(<Header />)
    expect(component).toBeDefined();
})
