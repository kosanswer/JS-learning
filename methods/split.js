/*
В JavaScript метод `split()` используется для разделения строки на массив подстрок на основе заданного разделителя.
Он принимает разделитель в качестве аргумента и возвращает массив подстрок, разделенных этим разделителем.

Вот синтаксис метода `split()`:

string.split(separator, limit)
где:
- `string` - исходная строка, которую нужно разделить.
- `separator` - разделитель, используемый для разделения строки. Это может быть строка или регулярное выражение.
- `limit` (необязательный) - число, определяющее максимальное количество элементов в результирующем массиве. 
Если этот параметр указан, то массив будет содержать не более `limit` элементов.

Примеры использования метода `split()`:

const str = "Hello,World";

const arr1 = str.split(","); 
console.log(arr1); 
// Output: ["Hello", "World"]

const arr2 = str.split(""); 
console.log(arr2); 
// Output: ["H", "e", "l", "l", "o", ",", "W", "o", "r", "l", "d"]

В первом примере мы использовали запятую (",") в качестве разделителя, поэтому строка разделяется на две подстроки: "Hello" и "World".
Во втором примере мы передали пустую строку в качестве разделителя, поэтому каждый символ строки становится отдельной подстрокой в массиве.
Если не указан разделитель или передан пустой аргумент, метод `split()` разделит строку на массив, 
состоящий из одного элемента, содержащего всю исходную строку:

const str = "Hello,World";
const arr = str.split(); 
console.log(arr); 
// Output: ["Hello,World"]

Метод `split()` полезен, когда вам нужно разделить строку на отдельные слова или фрагменты для дальнейшей обработки.
*/