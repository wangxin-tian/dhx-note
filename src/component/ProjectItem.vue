<template>
	<div class="project-container">
		<h1>项目展示页面</h1>
		<div v-for="project in projects" :key="project.id" class="project-card">
			<img :src="project.image" alt="Project Image" class="project-image" />
			<div class="project-info">
				<h2>{{ project.name }}</h2>
				<p>{{ project.description }}</p>
				<p>技术栈: {{ project.techStack }}</p>
				<p v-if="project.githubLink">
					GitHub链接: <a :href="project.githubLink">{{ project.githubLink }}</a>
				</p>
				<p v-if="project.link">
					访问链接: <a :href="project.link" target="_blank">{{ project.link }}</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			projects: [
				{
					id: 1,
					name: "Vue项目",
					description: "一个使用Vue框架开发的项目",
					techStack: "Vue, Vuex, Vue Router",
					githubLink: "https://github.com/vuejs/vue",
					image: "https://via.placeholder.com/150",
				},
				{
					id: 2,
					name: "React项目",
					description: "一个使用React框架开发的项目",
					techStack: "React, Redux, React Router",
					githubLink: "https://github.com/facebook/react",
					image: "https://via.placeholder.com/150",
				},
				{
					id: 3,
					name: "Angular项目",
					description: "一个使用Angular框架开发的项目",
					techStack: "Angular, RxJS, Angular CLI",
					githubLink: "https://github.com/angular/angular",
					image: "https://via.placeholder.com/150",
				},
				{
					id: 4,
					name: "个人图床",
					description: "基于php开发的个人图床demo，同时支持http和https访问",
					techStack: "PHP, JavaScript",
					link: "https://dhx.liangmoren.com/",
					image: "https://dhx.liangmoren.com/public/Snipaste_2024-05-05_07-56-25.png",
				},
			],
		};
	},
};
</script>

<style>
.project-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	gap: 20px;
}

.project-container h1 {
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
	justify-content: center;
	gap: 20px;
}

.project-card {
  max-width: 700px;
	display: flex;
	flex-direction: row;
	align-items: start;
	width: 100%;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dark .project-card {
	border-color: #333;
}

.project-image {
	width: 140px;
	height: auto;
	border-radius: 5px;
}

.project-info {
	padding: 10px 20px;
}

.project-info h2 {
	margin: 0;
	font-size: 18px;
	font-weight: bold;
	padding: 0;
	line-height: 1.2;
	border: none;
}

.project-info p {
	margin: 5px 0;
}

.project-info a {
	color: #007bff;
}
</style>
