# language: ru

Функционал: Бронь билетов в кино
    Сценарий: Бронь на Ведьмак на завтра
        Дано пользователь на странице "https://qamid.tmweb.ru/"
        Когда переходит на расписание на завтра
        Когда выбирает время сеанса на Ведьмак на 20-00
        Когда выбирает место в зале кинотеатра 6 ряд 6 место
        Тогда получает результат брони до покупки

    Сценарий: Бронь вип на Унесенные ветром на послезавтра
        Дано пользователь на странице "https://qamid.tmweb.ru/"
        Когда переходит на расписание на послезавтра
        Когда выбирает время сеанса на Унесенные ветром на 17-00
        Когда выбирает места в зале кинотеатра 5 ряд 4 место
        Тогда получает результат брони вип до покупки

    Сценарий: Попытка купить занятые места на Микки Мауса на завтра
        Дано пользователь на странице "https://qamid.tmweb.ru/"
        Когда переходит на расписание на завтра
        Когда выбирает время сеанса на Микки Маус на 11-00
        Когда выбирает место в зале кинотеатра 4 ряд 3 место
        Тогда место занято и получает результат