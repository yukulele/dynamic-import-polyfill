module.exports = {
  date: new Date(),
  fct(a) {
    return Math.random() * a
  },
  bool: Math.random() < 0.5
}
