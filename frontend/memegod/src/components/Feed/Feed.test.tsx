import { render } from '@testing-library/react';
import React from 'react';
import Feed from './Feed';

test("renders Feed component", () => {
    const component = render(<Feed />);
    expect(component).toBeDefined();
})
