export async function onRequestPost({ request }) {
	try {
	console.log("hello");
	} catch (err) {
		return new Response('Error parsing JSON content', { status: 400 });
	}
}
