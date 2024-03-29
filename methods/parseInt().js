/*
В JavaScript метод `parseInt()` используется для преобразования строки в целое число (integer). 
Он пытается анализировать строку и извлекать из нее целое число, игнорируя начальные пробелы и читая символы до тех пор, пока возможно. 
Если в начале строки содержится число, то `parseInt()` возвращает это число в виде целого числа. В противном случае, он возвращает `NaN` (Not a Number).

Синтаксис метода `parseInt()` выглядит следующим образом:

```javascript
parseInt(string, radix)
```

- `string`: Строка, которую нужно преобразовать в целое число.
- `radix` (необязательный): Опциональный параметр, определяющий систему счисления, которую следует использовать для преобразования. 
По умолчанию, `radix` равен 10 (десятичная система). Допустимые значения `radix` - от 2 до 36.

Вот примеры использования метода `parseInt()`:

```javascript
const number1 = parseInt("123");   // Возвращает число 123
const number2 = parseInt("10.55"); // Возвращает число 10 (дробная часть игнорируется)
const number3 = parseInt("ABC");   // Возвращает NaN (невозможно преобразовать в число)
const number4 = parseInt("1010", 2); // Возвращает число 10 (бинарная строка "1010" преобразована в десятичное число 10)
```

Обратите внимание, что `parseInt()` не округляет десятичные числа. Он обрезает десятичную часть, преобразуя строку в целое число.
Если первый символ строки не может быть преобразован в число, `parseInt()` вернет `NaN`.

Для преобразования строки в число с плавающей точкой (float), используйте функцию `parseFloat()`.

```javascript
const floatNumber = parseFloat("3.14"); // Возвращает число 3.14
```
*/
