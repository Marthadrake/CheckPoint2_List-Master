


//TODO You will need to create a constructor 
//and the methods needed to create the view template for this model

export default class List {
    constructor(data) {
        console.log("list from models list")
        this.name = data.name
        this.size = data.size || null
        this.chores = data.chores || []
        this.kitchen = data.kitchen || null
        this.outdoors = data.outdoors || null

    }
    getTemplate(index) {
        let template =
            `
            <div class="col-4">
                <h1></h1>
                <h3></h3>
                <h3></h3>
                <ul>`
        template += this.drawChores(index)
        template += ` </ul>
            <form onsubmit="app.controllers.listController.addList(event, ${index}">
                <div class="form-group">
                    <label for="chores">chores</label>
                    <input type="text" class="form-control" name="chores" placeholder="list chores" required>
                </div>
                    <button type="submit">+++</button>
                </form>
                <h3>${this.outdoors}</h3>
                <button type="button" onclick="app.controllers.listControler.deleteController(${index})">XX</button>
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
