const data = process.env.TOKEN?
//for single token enter TOKEN in secrets / .env
  [
    process.env.TOKEN
  ]:
//for multiple tokens enter tokens below 
  [
    "token 1",
    "token 2",
    "token 3"
  ]

module.exports = {
  data
}
