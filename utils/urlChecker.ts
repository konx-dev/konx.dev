export default async function urlChecker(url: string) {
	await fetch(url, { mode: "no-cors" })
		.then((response) => {
			console.log("url is reachable");
			return true;
		})
		.catch((error) => {
			console.log("url not found.");
			return false;
		});
}
