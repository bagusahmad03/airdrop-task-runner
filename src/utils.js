export async function doTask() {
  console.log("Running sample task...");
  await new Promise(res => setTimeout(res, 1000));
  console.log("Task completed.");
}
