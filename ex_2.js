//  2. Написать функцию calculateArea, которая будет принимать параметры, 
// для вычисления площади (можете выбрать какую то конкретную фигуру, а можете, 
//     основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления 
//     площади для переданной в параметрах фигуры) и возвращать объект вида: 
//     { area, figure, input }, 
//     где area - вычисленная площадь, 
//     figure - название фигуры, для которой вычислялась площадь, 
//     input - входные параметры, по которым было произведено вычисление.

'use strict';

var form = document.querySelector("form"); // доступ к форме
var areaFigure = document.getElementById("area_figure");// поле для вывода текста с информацией о площади

class Figure {
    constructor(figure, par1, par2) {
        this.figure = figure;
        this.par1 = par1;
        this.par2 = par2;
    }

    calculateArea(figure, par1, par2) { 
        let input = [par1, par2];
        let area;
        let obj;        
        
        if (figure == "rectangle") {
            area = input[0] * input[1];
            obj = { area, figure, input };
            
        } else if (figure == "triangle") {
            area = ((input[0] * input[1]) * 0.5);
            obj = { area, figure, input };

        } else if (figure == "circle") {
            area = Math.pow(input[0], 2) * 3.1415;
            obj = { area, figure, input };
        } 
        console.log(obj);  
        // console.log(`Yours figure is ${figure} with the parameters ${input} and the area ${area}`);
        areaFigure.innerText = `Ваша фигура ${figure} c параметрами ${input} и площадью ${area}`  
    };
};

//Запуск расчета площади по объекту по параметрам пользователя, после клика на кнопку "посчитать площадь фигуры"
function newFigureFunc() {
    var figure = new Figure;
    let figureName = form.elements[0].value;
    let par1 = form.elements[1].value;
    let par2 = form.elements[2].value;
    
    console.log("Exercise #2");

    figure.calculateArea(figureName, par1, par2);
    // console.log(form.elements[0].value);
    // console.log(form.elements[1].value);
    // console.log(form.elements[2].value);
};