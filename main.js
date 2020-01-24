(async () => {
  const compliments = await (await (fetch("compliments.json"))).json()

  const elem = document.querySelector("#quote")
  elem.innerHTML = compliments[Math.floor(Math.random() * compliments.length)];
})()
