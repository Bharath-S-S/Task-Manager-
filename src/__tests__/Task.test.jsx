import Task from '../components/TaskDetails/Task';
import { it, describe } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Task.jsx', () => {
    it('Task.jsx renders correctly', () => {
        const data = {
            title: 'sample title', 
            description: 'samble description',
            status: false
        }
        const id = '1234qwerty';
        render(
          <MemoryRouter>
            <Task id={id} data={data} />
          </MemoryRouter>
        );
    });

});