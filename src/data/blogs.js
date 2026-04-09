const blogs = [
  {
    id: 1,
    title: "The Rise of Quantum Computing",
    description: "Discover how quantum computers are breaking the barriers of traditional computing and what it means for the future of cryptography.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    author: "Ellora Jena",
    date: "Oct 12, 2023",
    category: "Technology",
    readTime: "5 min read",
    content: [
      "Quantum computing is moving from theory-heavy research labs into product roadmaps. The reason is simple: some categories of problems become dramatically easier when information is represented with qubits instead of classical bits.",
      "That does not mean quantum machines will replace laptops or cloud servers. The more realistic near-term view is specialization. Quantum systems are being explored for chemistry simulations, optimization problems, and cryptographic research where classical systems hit practical limits.",
      "The most important shift for developers is strategic, not just technical. Teams need to understand which workloads are genuinely quantum-friendly and which are still better served by mature classical infrastructure."
    ],
  },
  {
    id: 2,
    title: "React Server Components ",
    description: "A comprehensive guide to understanding React Server Components, how they differ from SSR, and when to use them in your next project.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    author: "Santhosh",
    date: "Oct 15, 2023",
    category: "Web Dev",
    readTime: "8 min read",
    content: [
      "React Server Components change where rendering logic can execute. Instead of shipping everything to the browser, part of the component tree can stay on the server and send a smaller payload to the client.",
      "That is different from traditional server-side rendering. SSR still sends hydrated client code for the rendered interface, while Server Components let you keep data fetching and some rendering concerns off the client entirely.",
      "The practical benefit is tighter control over bundle size and data access. The tradeoff is architectural complexity, because you need to be deliberate about which components stay interactive and which ones are purely server rendered."
    ],
  },
  {
    id: 3,
    title: "Minimalist Design in Modern UI",
    description: "Why less is more. Exploring the principles of minimalist design and how it improves user experience and accessibility.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    author: "Sindhu",
    date: "Oct 18, 2023",
    category: "Design",
    readTime: "4 min read",
    content: [
      "Minimalism in interface design is not about removing personality. It is about reducing friction. Strong hierarchy, restrained color use, and clear spacing help users understand where to focus first.",
      "The best minimalist interfaces are disciplined, not empty. They use contrast, rhythm, and typography to create confidence without forcing the user to decode cluttered layouts or decorative noise.",
      "Accessibility also improves when unnecessary visual competition is removed. Better legibility, clearer actions, and simpler navigation patterns are often a direct result of the same design restraint."
    ],
  },
  {
    id: 4,
    title: "Mastering TypeScript in 2024",
    description: "Advanced TypeScript features you should be using. From conditional types to template literal types, elevate your codebase.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
    author: "Jagadeesh",
    date: "Oct 20, 2023",
    category: "Programming",
    readTime: "10 min read",
    content: [
      "TypeScript becomes more valuable as a codebase grows in complexity. Features like conditional types, discriminated unions, and template literal types let teams model business rules directly in the type system.",
      "The goal is not to create clever types for their own sake. Good TypeScript removes ambiguity at component boundaries, API layers, and domain models so that mistakes become harder to represent.",
      "Teams that succeed with advanced TypeScript usually pair it with restraint. A readable type system that captures intent is better than a deeply abstract one that only a few people can maintain."
    ],
  },
  {
    id: 5,
    title: "The Future of Artificial Intelligence",
    description: "What does the future hold? A deep dive into upcoming AI advancements, neural networks, and ethical considerations.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    author: "Ellora Jena",
    date: "Oct 22, 2023",
    category: "AI",
    readTime: "6 min read",
    content: [
      "Artificial intelligence is increasingly defined by deployment discipline rather than model novelty alone. The strongest systems are the ones that can produce useful results reliably inside real workflows.",
      "That creates pressure in three directions at once: better model quality, stronger safeguards, and clearer human oversight. Progress in any one area is limited if the other two lag behind.",
      "The long-term conversation is not just about what AI can automate. It is also about how product teams, researchers, and institutions decide where automation should stop and human judgment should stay central."
    ],
  },
];

export default blogs;
