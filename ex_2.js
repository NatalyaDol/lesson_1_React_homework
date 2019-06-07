//  2. Написать функцию calculateArea, которая будет принимать параметры, 
// для вычисления площади (можете выбрать какую то конкретную фигуру, а можете, 
//     основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления 
//     площади для переданной в параметрах фигуры) и возвращать объект вида: 
//     { area, figure, input }, 
//     где area - вычисленная площадь, 
//     figure - название фигуры, для которой вычислялась площадь, 
//     input - входные параметры, по которым было произведено вычисление.

'use strict';
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
            area = input[0] * 3.1415;
            obj = { area, figure, input };

        } 
        console.log(obj);  
        console.log(`Yours figure is ${figure} with the parameters ${input} and the area ${area}`)
        
    };
   
};

var rectangle = new Figure;
console.log(rectangle.calculateArea('rectangle', 20, 30));

var triangle = new Figure;
console.log(triangle.calculateArea('triangle', 20, 30));

var triangle = new Figure;
console.log(triangle.calculateArea('circle', 20));

