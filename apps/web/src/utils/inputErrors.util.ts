export default function inputErrors(errors: any, name: any) {
  const filter = Object.keys(errors)
  .filter(key => key.includes(name))
  .reduce((cur, key) => {
    return Object.assign(cur, {errors: errors[key]})
  }, {})
  return filter
}
