import { LitElement, html, css, property } from 'lit-element';
import { ContractTransaction, ethers } from 'ethers';
import { Counter } from '../typechain/Counter.js';
// eslint-disable-next-line import/extensions, camelcase
import { Counter__factory } from '../typechain';
import { openWcLogo } from './open-wc-logo.js';


const TOKEN_URL_ = 'ADD_YOUR_ETHEREUM_NODE_URL';
const TOKEN_ADDRESS = "0xTokenAddress";

export class SampleErc1155 extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--sample-erc1155-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo > svg {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  render() {
    return html`
      <main>
        <div class="logo">${openWcLogo}</div>
        <h1>${this.title}</h1>

        <p>Edit <code>src/SampleErc1155.ts</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
        <button @click=${SampleErc1155.onClick} part="button">Call contract</button>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }

  private static onClick() {
    try
    {
      const provider = new ethers.providers.JsonRpcProvider(TOKEN_URL_);
      SampleErc1155.callToken(provider, TOKEN_ADDRESS).then(r => console.log(`Result: ${  r}`));
    }
    catch(ex){
      console.log(ex);
    }
  }

  private static async callToken(provider: ethers.providers.JsonRpcProvider, tokenAddress: string): Promise<ContractTransaction>
  {
    // const testToken: TestToken = TestToken__factory.connect(tokenAddress, provider);
    // testToken.balanceOf(walletAddress);

    const counterToken: Counter = Counter__factory.connect(tokenAddress, provider);
    return counterToken.countUp();
  }
}
