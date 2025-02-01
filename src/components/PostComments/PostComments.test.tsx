import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Post from './';
import PostComment from './';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        const {debug} = render(<PostComment/>)
        debug()
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});