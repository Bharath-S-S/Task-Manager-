import Navigation from '../components/UI/Navigation.jsx';
import { it, describe } from 'vitest';
import { render } from '@testing-library/react';

describe("Navigation.jsx", () => {
    it('checks if the Navigation renders correctly', ()=>{
        render(<Navigation />);
    });
});