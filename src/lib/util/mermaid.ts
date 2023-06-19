import mermaid from 'mermaid';
import type { MermaidConfig, RenderResult } from 'mermaid';
import { insertIDs } from './insertIDs';

export const render = async (
  config: MermaidConfig,
  code: string,
  id: string
): Promise<RenderResult> => {
  // Should be able to call this multiple times without any issues.
  mermaid.initialize(config);
  code = insertIDs(code);
  return await mermaid.render(id, code);
};

export const parse = async (code: string): Promise<unknown> => {
  return await mermaid.parse(code);
};
