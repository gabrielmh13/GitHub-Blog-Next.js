import ReactMarkdown from "react-markdown"
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface MarkdownContentProps {
    content: string
}

const codeBlock = {
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter
                style={dracula}
                language={match[1]}
                PreTag="div"
            // {...props}
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        )
    }
}

export function MarkdownContent({ content }: MarkdownContentProps) {
    return (
        <div className="prose prose-headings:text-base-title prose-a:text-brand-blue text-base-text">
            <ReactMarkdown
                remarkPlugins={[gfm]}
                components={codeBlock}
            >
                {content}
            </ReactMarkdown>
        </div >
    )
}