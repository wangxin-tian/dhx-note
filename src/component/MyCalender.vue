<template>
	<div class="my-calender">
		<table style="width: 100%; display: table">
			<thead style="width: 100%">
				<tr>
					<th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(week, index) in calendar" :key="index">
					<td
						v-for="day in week"
						:key="day.date"
						class="calender-item-box"
						@click="showArticles(day.articles)"
					>
						<div class="calender-item-day">
							<div>{{ day.date }}</div>
							<ul>
								<li v-for="article in day.articles" :key="article.id" style="list-style-type: none">
									<a :href="article.link" class="VPLink link">{{ article.title }}</a>
								</li>
							</ul>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style>
.my-calendar table {
	width: 100%;
	border-collapse: collapse;
}
.calender-item-day {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding: 5px;
	cursor: pointer;
}

.calender-item-box:hover {
	background-color: #f2f2f2;
}

.dark .calender-item-box:hover {
	background-color: #4c4c4c;
}
</style>

<script setup>
import { ref, computed } from "vue";

const { articles } = defineProps({
	articles: {
		type: Array,
		required: true,
		default: [
			{ id: 1, title: "Article 1", date: "2024-05-01" },
			{ id: 2, title: "Article 2", date: "2024-05-03" },
			{ id: 3, title: "Article 3", date: "2024-05-07" },
			// Add more articles with dates here
		],
	},
});

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// const articles = ref([
// 	{ id: 1, title: "Article 1", date: "2024-05-01" },
// 	{ id: 2, title: "Article 2", date: "2024-05-03" },
// 	{ id: 3, title: "Article 3", date: "2024-05-07" },
// 	// Add more articles with dates here
// ]);
const calendar = computed(() => {
	const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
	const lastDay = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
	const daysInMonth = lastDay.getDate();
	let calendar = [];
	let week = new Array(new Date(firstDay.getFullYear(), firstDay.getMonth(), 1).getDay() - 1);

	week.fill({ date: "", articles: [] });
	for (let i = 1; i <= daysInMonth; i++) {
		const currentDate = new Date(firstDay.getFullYear(), firstDay.getMonth(), i);
		const transformDate = new Date(firstDay.getFullYear(), firstDay.getMonth(), i + 1);
		const articlesForDay = articles.filter((article) => {
			return (
				article.date.replace(/年|月/g, "-").replace(/日/g, "") === transformDate.toISOString().slice(0, 10)
			);
		});
		week.push({ date: i, articles: articlesForDay });
		if (currentDate.getDay() === 0 || i === daysInMonth) {
      // console.log(currentDate.getDay())
			calendar.push(week);
			week = [];
		}
	}
	return calendar;
});
const showArticles = (articles) => {
	// Implement your logic to show articles when a date is clicked
	// console.log(articles);
};
</script>
