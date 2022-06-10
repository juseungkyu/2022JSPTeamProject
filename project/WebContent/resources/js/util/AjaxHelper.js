export default class AjaxHelper {
    constructor(){}

    get = async (url) => {
        const json = await (
            await fetch(url, {
              method: 'GET',
            })
          ).json()

        return json
    }

    post = async (url, data)=>{
        const headers = { 'Content-Type' : 'application/json;charset=utf-8' }

        const json = await (
            await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(data)
            })
          ).json()

        return json
    }
}