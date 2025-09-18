
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
			title: "React Hooks & Patterns: A Practical Study Note",
			link: "https://medium.com/@realyifandiao/react-hooks-patterns-a-practical-study-note-1d67c28c1f82",
			date: "September 16, 2025",
			source: "Medium",
			tags: ["React", "JavaScript", "Frontend"],
			summary: "A collection of notes I took while studying the Meta React specialization on Coursera. It covers the challenges I encountered during the learning process, the underlying technical principles, and the solutions I applied to overcome them."
		},
		{
			title: "Deploy An App on AWS EC2 with GitHub Actions — from A to Z",
			link: "https://medium.com/@realyifandiao/my-first-app-deployment-on-aws-ec2-with-github-actions-from-a-to-z-1a9e3d850b2d",
			date: "July 4, 2025",
			source: "Medium",
			tags: ["AWS", "CI/CD", "GitHub Actions"],
			summary: "A hands-on walkthrough of my first Dockerized web app deployment on AWS EC2 using GitHub Actions — from setting up DNS and CI/CD to securing with TLS and NGINX reverse proxy. Real issues, real fixes, real learning."
		},
		{
			title: "Learning DFS with Stack: LeetCode 22 — Generate Parentheses",
			link: "https://medium.com/@realyifandiao/learning-dfs-with-stack-leetcode-22-generate-parentheses-7e3f94efb568",
			date: "June 27, 2025",
			source: "Medium",
			tags: ["LeetCode", "Learning"],
			summary: "This blog documents my learning process while solving LeetCode 22: Generate Parentheses, focusing on the Depth-First Search (DFS) approach using a stack implementation."
		},
		{
			title: "Hackathon Reflections: Banque de France AI",
			link: "https://medium.com/@realyifandiao/reflections-on-the-2025-banque-de-france-ai-hackathon-931f46b10fb5",
			date: "June 14, 2025",
			source: "Medium",
			tags: ["Hackathon", "AI", "Reflections"],
			summary: "Some takeaways and thoughts after winning the 2nd prize in the 2025 Banque de France AI Hackathon. What went well, and what I'd do differently."
		}
	];

	const projects = [
		{
			title: "Pong Game",
			description: "A classic Pong game. Features include tournament, local and remote game mode, user dashboard, friend page, etc. Try with user 'test' and password '123456'!",
			technologies: ["TypeScript", "JavaScript", "Tailwind CSS", "Github Actions", "AWS", "Fastify", "SQLite"],
			githubLink: "https://github.com/yrigny/Transcendence/",
			appLink: "https://pong.project.yrigny.me",
			icon: "🏓"
		},
		{
			title: "Upcoming Projects...",
			description: "Stay tuned for more exciting projects coming soon! I am currently working on several new applications that will be showcased here.",
			technologies: [],
			githubLink: "",
			appLink: "",
			icon: "👥"
		}
	];

	// Render blog posts
	const blogContainer = document.getElementById("blogPosts");
	if (blogContainer) {
		blogPosts.forEach(post => {
			const postEl = document.createElement("div");
			postEl.className = "blog-post";

			postEl.innerHTML = `
				<h3><a href="${post.link}" target="_blank" rel="noopener noreferrer">${post.title}</a></h3>
				<div class="blog-meta">
					<span>${post.date}</span> posted on 
					<span>${post.source}</span>
				</div>
				<div class="blog-meta">
					${post.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
				</div>
				<p>${post.summary}</p>
			`;

			blogContainer.appendChild(postEl);
		});
	}

	// Render projects
	const projectsContainer = document.getElementById("projectsGrid");
	if (projectsContainer) {
		projects.forEach(project => {
			const projectEl = document.createElement("div");
			projectEl.className = "project-card";

			projectEl.innerHTML = `
				<div class="project-icon">${project.icon}</div>
				<h3>${project.title}</h3>
				<div class="project-description">
					<p>${project.description}</p>
				</div>
				<div class="project-tech">
					${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join("")}
				</div>
				<div class="project-links">
					<a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="btn project-btn">
						<span style="display: inline-flex; align-items: center; vertical-align: middle;">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
						</span>
						<span style="vertical-align: middle;">GitHub</span>
					</a>
					<a href="${project.appLink}" target="_blank" rel="noopener noreferrer" class="btn project-btn">
						<span style="display: inline-flex; align-items: center; vertical-align: middle;">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
								<path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
							</svg>
						</span>
						<span style="vertical-align: middle;">Demo</span>
					</a>
				</div>
			`;

			projectsContainer.appendChild(projectEl);
		});
	}
});
