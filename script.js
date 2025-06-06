document.addEventListener("DOMContentLoaded", () => {
	const blogPosts = [
		{
			title: "Building a Chatbot with Node.js",
			link: "https://medium.com/@yrigny/building-a-chatbot-with-nodejs-example",
			date: "May 20, 2025",
			source: "Medium",
			tags: ["AI", "JavaScript", "Chatbot"],
			summary: "An overview of how I built a simple chatbot using Fastify and OpenAI's API, including deployment tips and code snippets."
		},
		{
			title: "Understanding Event Loop in JS",
			link: "https://hashnode.com/post/event-loop-in-js-explained",
			date: "April 12, 2025",
			source: "Hashnode",
			tags: ["JavaScript", "Asynchronous"],
			summary: "This article breaks down how JavaScript handles concurrency, with visuals and real-world analogies to demystify the event loop."
		},
		{
			title: "Hackathon Reflections: Banque de France AI",
			link: "https://notion.so/yrigny/banque-ai-hackathon-retrospective",
			date: "June 14, 2025",
			source: "Notion",
			tags: ["Hackathon", "AI", "Reflections"],
			summary: "Some takeaways and thoughts after competing in the 2025 Banque de France AI Hackathon. What went well, and what I'd do differently."
		}
	];

	const container = document.getElementById("blogPosts");
	if (!container) return;

	blogPosts.forEach(post => {
		const postEl = document.createElement("div");
		postEl.className = "blog-post";

		postEl.innerHTML = `
			<h3><a href="${post.link}" target="_blank" rel="noopener noreferrer">${post.title}</a></h3>
			<div class="blog-meta">
				<span>🗓️ ${post.date}</span> posted on 
				<span>📝 ${post.source}</span>
			</div>
			<div class="blog-meta">
				${post.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
			</div>
			<p>${post.summary}</p>
		`;

		container.appendChild(postEl);
	});
});
