# Домашняя работа по инфраструктуре

[![Build Status](https://travis-ci.org/Ellaylone/htask6.svg?branch=master)](https://travis-ci.org/Ellaylone/htask6)
[![bitHound Overall Score](https://www.bithound.io/github/Ellaylone/htask6/badges/score.svg)](https://www.bithound.io/github/Ellaylone/htask6)

#### Приложение

Создал приложение, которое выводит случайное число фибоначчи. ![Ссылка на приложение](https://immense-bayou-36533.herokuapp.com/).

#### Логи

Приложение выводит логи - время рендеринга, номер числа фибоначчи. Настроил ESLint, использовал `eslint-config-standard`. Написал тесты на `mocha` и `chai`. Тесты проверяют границы в которых сгенерировано случайное число, и проверяют вывод генерации числа фибоначчи. Тесты и ESLint запускаются по команду `npm test`.

#### Heroku

Настроил хостинг на Heroku, изучил Heroku logs.

Команда `heroku logs` выводит логи. Выводится 3 типа логов:
* Логи приложения, фильтр `--source app`
* Системные логи, фильтр `--source heroku`
* Логи API, фильтр `--source heroku --dyno api`

#### Travis

Настроил CI с помощью Travis в репозитории проекта, настроил автоматический деплой ветки мастер в Heroku при пуше и пулл реквесте.

#### Дополнительно

Настроил облачный линтер BitHound, настроил мониторинг с помощью UptimeRobot. При создании пулл реквеста прогоняются автоматические тесты, и при их прохождении и принятии пулл реквеста происходит автоматический деплой в Heroku.
