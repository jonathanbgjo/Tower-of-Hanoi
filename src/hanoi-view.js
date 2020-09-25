

class hanoiView{
    constructor(game, container){
        this.game = game;
        this.container = container;
        this.setupTowers();
        this.render();
        console.log(this.game.towers)
        this.renderTower($("#ul1"))
    }

    setupTowers() {
        
        let ul1 = $("<ul></ul>");
        ul1.attr("id", "ul1");
        this.container.append(ul1);
        this.addLi(ul1);
        this.ulCss(ul1)

        let ul2 = $("<ul></ul>");
        ul2.attr("id", "ul2");
        this.container.append(ul2);
        this.addLi(ul2);
        this.ulCss(ul2)

        let ul3 = $("<ul></ul>");
        ul3.attr("id", "ul3");
        this.container.append(ul3);
        this.addLi(ul3);
        this.ulCss(ul3)

        this.container.css("display", "flex");
        this.container.css("justify-content","space-between");
    }
    addLi(ul){
        for(let i =0; i<3; i++){
            let li = $("<li></li>");
            li.attr("class", i+1);
            ul.append(li);
        }
    }
    ulCss(ul){
        ul.css("list-style", "none");
        ul.css("display", "flex");
        ul.css("flex-direction", "column");
        ul.css("align-items", "center")
    }
    render() { 
        this.renderTower($("#ul1"))
        this.renderTower($("#ul2"))
        this.renderTower($("#ul3"))
    }

    renderTower(tower) {

        let towerArray = Number(tower.attr("id")[2]) - 1;
        let towerId = towerArray+1;
        // console.log(towerId)
        for(let i = this.game.towers[towerArray].length-1; i>=0; i--){
            let size = this.game.towers[towerArray][i];

            // we need the li that's in teh right tower whose class is i            
            // "#towerId .i"
            let li = $("#ul"+towerId +" ."+(3-i)); // 3-i = 1, 2, 3        [3,2,1]
            console.log(li)
            li.css("width", 50 * size)
            li.css("height", 50)
            // li.css("width", 200)
            li.css("border-radius", 10)
            li.css("background-color", "red")
        }


        // according to game state, should therbe disc at this level?
        // if no, move on
        // if yes, get the right li
        // append right shape to li


        // if top disc, render it
        // if middle disc, render it
        // if bottom disc, render it
    }

    // #rectangle {
    // width: 200px;
    // height: 100px;
    // background: red;
    // border-radius: 25px;
        // }
}
module.exports = hanoiView;