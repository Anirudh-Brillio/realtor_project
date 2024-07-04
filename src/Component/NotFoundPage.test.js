import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
// import '@testing-library/jest-dom/extend-esxpect'; // for the matchers
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  test('renders 404 text', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  test('renders Page Not Found text', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });

  test('renders Sorry, the page you are looking for does not exist text', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    expect(screen.getByText('Sorry, the page you are looking for does not exist.')).toBeInTheDocument();
  });

  test('renders Go Home link', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /Go Home/i })).toBeInTheDocument();
  });

  test('Go Home link has correct href', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /Go Home/i })).toHaveAttribute('href', '/');
  });
});
