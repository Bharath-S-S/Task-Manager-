import TaskDetail from '../components/TaskDetails/TaskDetail';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

describe('TaskDetail.jsx', () => {
    it('TaskDetail.jsx renders correctly', () => {
        render(
            <TaskDetail />
        )
    });
});