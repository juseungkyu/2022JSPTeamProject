import AjaxHelper from "./AjaxHelper.js"

export default class RankingView {
    constructor(){
        this.ajaxHelper = new AjaxHelper()
    }

    add = async ()=>{
        await this.ajaxHelper.post('/ranking', getLevel())
    }

    view = async ()=>{
        await this.ajaxHelper.get('/ranking')
    }
}