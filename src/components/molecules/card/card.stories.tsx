import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './card';

const Meta = {
    title: 'Molecule/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}


export default Meta;
type Story = StoryObj<typeof Meta>;

export const Default: Story = {
    args: {
        title: 'Card Title',
        description: 'This is a simple card component that can be used to display content in a structured way.',
    },
}




