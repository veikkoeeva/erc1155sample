import { html, fixture, expect } from '@open-wc/testing';

import { SampleErc1155 } from '../src/SampleErc1155.js';
import '../src/sample-erc1155.js';

describe('SampleErc1155', () => {
  let element: SampleErc1155;
  beforeEach(async () => {
    element = await fixture(html`<sample-erc1155></sample-erc1155>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
