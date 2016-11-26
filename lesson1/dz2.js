// Напишите функцию calculateArea, которая будет принимать параметры, для вычисления площади 
// (можете выбрать какую то конкретную фигуру, а можете, основываясь на переданных параметрах, 
// выполнять требумый алгоритм вычисления площади для переданной в параметрах фигуры) и возвращать 
// объект вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры, для которой 
// вычислялась площадь, input - входные параметры, по которым было произведено вычисление

function calculateArea() {
  let result = {};

  if (arguments.length > 4) {
    console.log("Вы ввели значения для более чем 4 сторон");
    return false;
  }

  switch (arguments.length) {
    case 1:
      result.area = arguments[0] * 2;
      result.figure = "Квадрат";
      break;

    case 2:
      result.area = arguments[0] * arguments[1];

      if (arguments[0] == arguments[1]) {
        result.figure = "Квадрат";
      } else {
        result.figure = "Прямоугольник";
      }

      break;

    case 3:
      let a = arguments[0];
      let b = arguments[1];
      let c = arguments[2];

      let p = (a + b + c) / 2;

      result.area = +Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);
      result.figure = "Треугольник";

      break;

    default:
      return "Кол-во значений не верное";

  }

  result.input = arguments;

  return result;
}

console.log(calculateArea(3, 4, 6));