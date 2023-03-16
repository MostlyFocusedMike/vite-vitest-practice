// test that main.js is working
import { describe, it, expect } from 'vitest'
import { setupCounter } from './src/counter.js'
import main from './src/main.js'

import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

// we can test individual functions in isolation
it('setupCounter', () => {
  const button = document.createElement('button')
  setupCounter(button)
  button.click()
  expect(button.textContent).toBe('count is 1')
  button.click()
  expect(button.textContent).toBe('count is 2')
});

// or the entire app
it('tests index.html', async () => {
  document.documentElement.innerHTML = html.toString();
  main();
  console.log('document.body.innerHTML:', document.body.innerHTML);

  const button = document.querySelector('#counter')
  button.click()
  expect(button.textContent).toBe('count is 1')
  button.click()
  expect(button.textContent).toBe('count is 2')
  button.click()
  expect(button.textContent).toBe('count is 3')
});

// the document is empty if we don't call main()
it('tests index.html', async () => {
  document.documentElement.innerHTML = html.toString();
  console.log('document.body.innerHTML:', document.body.innerHTML);
});

// We can't use the jsdom await DOMContentLoaded event approach
// because vitest is running in a worker thread.