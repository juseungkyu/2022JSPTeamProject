import AjaxHelper from "./AjaxHelper.js"

export default class RankingView {
    constructor(){
        this.ajaxHelper = new AjaxHelper()
    }

    add = async ()=>{
        console.log(`/addranking?score=${getLevel()}`)
        return await this.ajaxHelper.get(`/addranking?score=${getLevel()}`)
    }

    view = async ()=>{
        return await this.ajaxHelper.get('/ranking')
    }
}