import React from 'react'; 
import { render, screen, fireEvent } from '@testing-library/react';
import Post from './'; // Certifique-se de importar o componente corretamente
import '@testing-library/jest-dom';

describe('Componente Post', () => {
  it('deve adicionar dois comentários corretamente', () => {
    // Renderiza o componente
    render(<Post />);

    // Encontra os elementos do formulário e textarea
    const commentTextarea = screen.getByTestId('comentario-textarea');
    const commentButton = screen.getByTestId('botao-comentar');

    // Simula a digitação do primeiro comentário e envia
    fireEvent.change(commentTextarea, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(commentButton);

    // Verifica se o primeiro comentário foi adicionado corretamente
    expect(screen.getByTestId('comentario-0')).toHaveTextContent('Primeiro comentário');

    // Simula a digitação do segundo comentário e envia
    fireEvent.change(commentTextarea, { target: { value: 'Segundo comentário' } });
    fireEvent.click(commentButton);

    // Verifica se o segundo comentário foi adicionado corretamente
    expect(screen.getByTestId('comentario-1')).toHaveTextContent('Segundo comentário');
  });
});