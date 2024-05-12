<script setup>
defineProps({
	nextArticle: {
		type: Object,
		required: true,
	},
})
</script>
<template>
	<a
		class="next-article VPLink link flex-row"
		:href="nextArticle.link"
		style="text-decoration: none"
		target="_self"
	>
		<div class="next-article-info">
			<div>
				<span>next page</span>
				<h2>{{ nextArticle.title ? nextArticle.title : "已经没有下一篇文章" }}</h2>
			</div>
		</div>
	</a>
</template>
<style>
.dark .next-article {
	border-color: #333;
}
.dark .next-article h2 {
  color: #eee;
}
.next-article {
  margin-top: 20px;
  cursor: pointer;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	border-radius: 5px;
	border: solid 1px #fdfdfd;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.next-article:hover {
  border-color: #007bff;
}
.next-article-info {
	flex: 1;
}
.next-article h2 {
	padding: 0;
	margin: 0;
	border: none;
	font-size: 1.2rem;
	color: #333;
	margin-bottom: 5px;
}
.next-article p {
	font-size: 0.9rem;
	color: #555;
	margin-bottom: 5px;
}
.next-article button {
	padding: 10px 20px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s;
}
.next-article button:hover {
	background-color: #0056b3;
}
</style>
