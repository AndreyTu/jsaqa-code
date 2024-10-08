# language: ru

Функционал: Бронь билетов в кино
  Сценарий: Забронировать билет
    Дано пользователь на странице "https://qamid.tmweb.ru/"
    Дано пользователь нажимает кнопку неделя
    Дано пользователь нажимает кнопку фильм
    Когда пользователь выбирает следующий день, 2 ряд и 2 место и нажимает кнопку Забронировать
    Тогда пользователь видит страницу выбранным рядом и местом: '2/2'

  Сценарий: Забронировать билет
    Дано пользователь на странице "https://qamid.tmweb.ru/"
    Дано пользователь нажимает кнопку неделя
    Дано пользователь нажимает кнопку фильм
    Когда пользователь выбирает следующий день, 3 ряд и 4 место затем 3 ряд и 5 место и нажимает кнопку Забронировать
    Тогда пользователь видит страницу выбранным рядом и местом: '3/4, 3/5'

  Сценарий: Забронировать билет
    Дано пользователь на странице "https://qamid.tmweb.ru/"
    Дано пользователь нажимает кнопку неделя
    Дано пользователь нажимает кнопку фильм
    Когда пользователь выбирает следующий день, на 'taken' место и нажимает кнопку Забронировать
    Тогда кнопка Забронировать недоступна