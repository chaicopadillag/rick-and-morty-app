// import '@testing-library/jest-dom';
import 'whatwg-fetch';
require('dotenv').config({
    path: '.env.local'
});

/**
 * @type {import('jest').Mock}
 * 
 * Mock para obtener variable de entorno de .env.local para probar
 */
jest.mock('./src/env/index', () => ({
    getEnvironments: () => ({ ...process.env })
}))
