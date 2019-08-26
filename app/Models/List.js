


//TODO You will need to create a constructor 
//and the methods needed to create the view template for this model

export default class List {
    constructor(data) {
        console.log("list from models list")
        this.groceries = data.groceries
        this.chores = data.chores || []
        this.home = data.home
        this.yard = data.yard

    }
    getTemplate(index) {
        let template =
            `            
            <div id="rowTwo" class="row justify-content border border-info p-3">
            <div class="offset-3 col-6 mt-3 border border-danger">

            <div>
                <h1>${this.groceries}</h1>
                <h3>${this.home}</h3>
                <h3>${this.yard}</h3>
                <ul>`
        template += this.drawChores(index)
        template += ` </ul>
            <form onsubmit="app.controllers.listController.addList(event, ${index}">
                <div class="form-group">
                    <label font-weight-bold mt-3" for="chores">chores</label>
                    <input type="text" class="form-control font-italic font-weight-bold name="chores" placeholder="list chores" required>
                </div>
                    <button class="btn btn-outline-primary btn-sm" type="submit">+++</button>
                </form>
                <h3>${this.yard}</h3>
                <button class="btn btn-outline-danger btn-sm" type="button" onclick="app.controllers.listControler.deleteController(${index})">XX</button>
            </div>
            </div>
            </div>
            `
        return template
    }
    drawChores(listIndex) {
        let choresTemplate = ``
        this.chores.forEach((c, choresIndex) => {
            choresTemplate += `<li>${c}<span
                onclick="app.controllers.listController.deleteChores(${listIndex}, ${choresIndex})">XX</span></li>`
        });
        return choresTemplate
    }

}
