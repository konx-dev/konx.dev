export default function urlChecker(url: string) {
	fetch(url, { mode: "no-cors" })
		.then((response) => {
			return true;
		})
		.catch((error) => {
			return false;
		});
}
