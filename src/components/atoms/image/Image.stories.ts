import type { Meta, StoryObj } from '@storybook/react-vite';

import { Image } from './Image';

const Meta = {
    title: 'Components/Image',
    component: Image,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default Meta;
type Story = StoryObj<typeof Meta>;


export const Primary: Story = {
    args: {
        alt: 'Example Image',
        src: 'https://plus.unsplash.com/premium_photo-1709579654090-3f3ca8f8416b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbGV6YSUyMHBhaXNhamV8ZW58MHx8MHx8fDA%3D',
        className: 'custom-image-class',
    },
};


