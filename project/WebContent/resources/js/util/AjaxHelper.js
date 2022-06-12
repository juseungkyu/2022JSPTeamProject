export default class AjaxHelper {
  constructor() { }

  get = async (url) => {
    const json = await (
      await fetch(url, {
        method: 'GET',
      })
    ).json()

    return json
  }

  post = async (url, data) => {
    const keys = Object.keys(data)

    const form = document.createElement('form')

    keys.forEach(x=>{
      form.innerHTML += `
        <input type="hidden" name="${x}" value="${data[x]}">
      `
    })

    form.setAttribute('action', url)
    form.setAttribute('method', 'POST')

    document.querySelector('body').appendChild(form)

    return form.submit()
  }
}