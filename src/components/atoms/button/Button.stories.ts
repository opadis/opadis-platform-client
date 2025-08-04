import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './Button';

const Meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}


export default Meta;
type Story = StoryObj<typeof Meta>;


export const Primary: Story = {
    args: {
        children: 'Hola Mundo',
        onClick: fn(),
    },
};

