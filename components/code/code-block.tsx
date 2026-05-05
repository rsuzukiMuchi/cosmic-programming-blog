type CodeBlockProps = {
  code: string;
  filename?: string;
};

export function CodeBlock({ code, filename }: CodeBlockProps) {
  return (
    <figure className="overflow-hidden rounded-lg border border-white/10 bg-slate-950">
      {filename ? (
        <figcaption className="border-b border-white/10 px-4 py-2 font-mono text-xs text-slate-400">{filename}</figcaption>
      ) : null}
      <pre className="overflow-x-auto p-4 text-sm leading-7 text-slate-200">
        <code>{code.trim()}</code>
      </pre>
    </figure>
  );
}
