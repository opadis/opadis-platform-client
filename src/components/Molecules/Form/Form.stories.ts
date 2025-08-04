import type { Meta, StoryObj } from '@storybook/react-vite';


import { Form } from './Form';

const Meta = {
    title: 'Components/Form',
    component: Form,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}


export default Meta;
type Story = StoryObj<typeof Meta>;

export const Default: Story = {
    args: {
        id: 'form-example',
        title: 'Formulario de ejemplo',
        field: [
            { label: 'Nombre', placeholder: 'nombre', id: 'name' },
            { label: 'Email', type: 'email', placeholder: 'email', id: 'email' },
            { label: 'password', type: 'password', placeholder: 'contraseña', id: 'password' },
            { label: 'fecha', type: 'date', placeholder: 'fecha', id: 'fecha' },
            {label: 'file', type: 'file', placeholder: 'file', id: 'file' },
        ],
    },
}

export const Second: Story = {
    args: {
        id: 'form-example',
        field: [
            { label: 'Nombre', placeholder: 'nombre', id: 'name' },
            { label: 'Email', type: 'email', placeholder: 'email', id: 'email' },
            { label: 'password', type: 'password', placeholder: 'contraseña', id: 'password' },
            { label: 'fecha', type: 'date', placeholder: 'fecha', id: 'fecha' },
            { label: 'file', type: 'file', placeholder: 'file', id: 'file' },
        ],
    },
}