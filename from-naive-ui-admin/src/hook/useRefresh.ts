import { useRouter, useRoute } from 'vue-router';
export default function () {
	const route = useRoute();
	const router = useRouter();

	const refresh = () => {
		router.push({
			path: '/redirect' + route.fullPath,
		});
	};
	return refresh;
}
