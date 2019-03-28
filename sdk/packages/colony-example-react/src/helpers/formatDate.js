export default (date) => {
  if (date) {
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    if (day < 10) day = '0' + day
    if (month < 10) month = '0' + month
    return year + '-' + month + '-' + day
  } else {
    return ''
  }
}
