export async function onRequestPost({ request }) {
	try {
	new Response("Data Received successfully",{status:200});
	} catch (err) {
		return new Response('Error parsing JSON content', { status: 400 });
	}
}
