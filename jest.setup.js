// import '@testing-library/jest-dom';
import 'whatwg-fetch';
require('dotenv').config({
    path:'.env'
});

jest.mock('./src/env/index.ts',()=>({
    getEnvironments:()=>({...process.env})
}))
