/*
В JavaScript метод `substring()` применяется к строке и используется для извлечения подстроки из исходной строки. 
Он возвращает новую строку, которая содержит часть исходной строки, определенную индексами начала и конца (не включая конечный индекс).

Синтаксис метода `substring()` выглядит следующим образом:

```javascript
str.substring(startIndex, endIndex)
```

- `str`: Исходная строка, из которой нужно извлечь подстроку.
- `startIndex`: Начальный индекс (включительно) подстроки, который указывает на первый символ включенной подстроки.
- `endIndex`: Конечный индекс (исключительно) подстроки, который указывает на первый символ после последнего символа подстроки.

Вот пример использования метода `substring()`:

```javascript
const str = "Hello, World!";
console.log(str.substring(0, 5));  // Вывод: "Hello"
console.log(str.substring(7));  // Вывод: "World!"
```

В этом примере метод `substring()` применяется к строке `"Hello, World!"`.
С помощью `substring(0, 5)` мы извлекаем подстроку с индекса 0 (включительно) до индекса 5 (исключительно),
что дает нам строку `"Hello"`. А с помощью `substring(7)` мы извлекаем подстроку, начиная с индекса 7 (включительно) до конца строки, 
что дает нам строку `"World!"`.

Обратите внимание, что если `endIndex` не указан, метод `substring()` вернет подстроку от `startIndex` до конца строки. 
Если `startIndex` больше `endIndex`, метод автоматически поменяет их местами.

Важно отметить, что метод `substring()` не изменяет исходную строку, а возвращает новую подстроку.
*/
