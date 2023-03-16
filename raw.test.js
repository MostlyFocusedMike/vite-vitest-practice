// this file is testing that we don't actually need any JS in order for this to work

import { describe, it, expect } from 'vitest'
import { setupCounter } from './src/counter.js'
import main from './src/main.js'

import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, 'raw.html'), 'utf8');

describe('setupCounter', () => {
  it('tests index.html', async () => {
    document.documentElement.innerHTML = html.toString();
    expect(document.querySelector('h1').textContent).toBe('Hello there!')
  });
});