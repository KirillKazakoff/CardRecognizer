# Распознавание кредитных карт

Небольшое приложение, которое может опознавать ту или иную платежную систему по номеру карты.

> ## Ссылка на приложение: [**GitHubPages**][GitHubPages]

</br>

[![Build status](https://ci.appveyor.com/api/projects/status/tkm0psa9eadbjg3a?svg=true)](https://ci.appveyor.com/project/KirillKazakoff/credcard)

</br>

## Алгоритм работы

Введите номер карты в поле формы, после отправьте введенные данные. Если номер соответствует одной из представленных выше платежных систем, то она подсветится, иначе высветится ошибка.

## Teсты

В директории ./src/app/tests расположены e2e и unit тесты. Server jest-puppeteer работает на 9002 порту. 

## Установка
Если вы хотите запустить приложение, клонируйте репозиторий, затем установите зависимости

```sh
yarn
```
И запустите webpack-dev-server:
```sh
yarn start
```


<!-- Links -->
[GitHubPages]: https://kirillkazakoff.github.io/CardRecognizer/

