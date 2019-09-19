export async function wait(ms) {
  await new Promise(r => {
    setTimeout(() => {
      r()
    }, ms)
  })
}