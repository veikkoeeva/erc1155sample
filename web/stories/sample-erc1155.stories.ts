import { html, TemplateResult } from 'lit-html';
import '../src/sample-erc1155.js';

export default {
  title: 'SampleErc1155',
  component: 'sample-erc1155',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <sample-erc1155 style="--sample-erc1155-background-color: ${backgroundColor}" .title=${title}></sample-erc1155>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
