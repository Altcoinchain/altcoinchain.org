import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * This function mocks out window.localStorage
 */
export const mockLocalStorage = () => {
    const storage: Record<string, string> = {};
    Object.defineProperty(window, 'localStorage', {
        value: {
            getItem: jest.fn((key) => storage[key]),
            setItem: jest.fn((key: string, value) => (storage[key] = value)),
            removeItem: jest.fn((key: string) => delete storage[key]),
        },
        writable: true,
    });
};

/**
 * This function will either click the button element provided or click the element that was found by the name provided
 * @param button The name of the button element or the button element itself
 */
export const clickButton = async (button: string | HTMLElement) => {
    let buttonElement = null;
    if (typeof button === 'string') {
        buttonElement = await screen.getByRole('button', { name: button });
    } else {
        buttonElement = button;
    }
    await userEvent.click(buttonElement);
};
