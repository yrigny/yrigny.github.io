
function showSection(sectionId) {
	if (sectionId === 'home') {
		window.scrollTo(0, 0);
	}
	else if (sectionId === 'blog') {
		document.getElementById('blog-section').scrollIntoView({ behavior: 'smooth' });
	}
	else if (sectionId === 'projects') {
		document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
	}
};

document.addEventListener("DOMContentLoaded", () => {
	showSection('home');
	const blogPosts = [
		{
			title: "Learning DFS with Stack: LeetCode 22 — Generate Parentheses",
			link: "https://medium.com/@realyifandiao/learning-dfs-with-stack-leetcode-22-generate-parentheses-7e3f94efb568",
			date: "June 27, 2025",
			source: "Medium",
			tags: ["LeetCode", "Learning"],
			summary: "This blog documents my learning process while solving LeetCode 22: Generate Parentheses, focusing on the Depth-First Search (DFS) approach using a stack implementation."
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
