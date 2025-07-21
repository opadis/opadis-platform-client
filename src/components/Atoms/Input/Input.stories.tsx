import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input' // o la ruta que uses

const meta: Meta<typeof Input> = {
    title: 'Atoms/Input',
    component: Input,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Input>

export const text: Story = {
    args: {
        type: 'text',
        label: 'Ingrese su nombre',
        placeholder: 'Ingrese su nombre',
    },
}

export const password: Story = {
    args: {
        type: 'password',
        label: 'Ingrese su contraseña',
        placeholder: 'Ingrese su contraseña',
    },
}

export const email: Story = {
    args: {
        type: 'email',
        label: 'Ingrese su email',
        placeholder: 'Ingrese su email',
    },
}