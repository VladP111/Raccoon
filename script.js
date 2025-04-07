// Створюємо об'єкт із рівнями і підрівнями
let levels = { 
    A: ['A1', 'A2'], 
    B: ['B1', 'B2'], 
    C: ['C1', 'C2'] 
};

// Створюємо об'єкт зі словами для кожного підрівня
let words = { 
    A1: [
        { word: 'Apple', options: ['яблуко', 'ананас', 'груша'], correct: 'яблуко' }, // Слово з варіантами і правильною відповіддю
        { word: 'Cat', options: ['кіт', 'собака', 'птиця'], correct: 'кіт' },
        { word: 'Dog', options: ['кіт', 'собака', 'птиця'], correct: 'собака' },
        { word: 'House', options: ['будинок', 'квартира', 'офіс'], correct: 'будинок' },
        { word: 'Book', options: ['книга', 'журнал', 'газета'], correct: 'книга' },
        { word: 'Water', options: ['вода', 'сік', 'молоко'], correct: 'вода' },
        { word: 'Sun', options: ['місяць', 'сонце', 'зірка'], correct: 'сонце' },
        { word: 'Tree', options: ['дерево', 'квітка', 'трава'], correct: 'дерево' },
        { word: 'Fish', options: ['риба', "м'ясо", 'овоч'], correct: 'риба' },
        { word: 'Sky', options: ['небо', 'земля', 'вода'], correct: 'небо' }
    ],
    A2: [
        { word: 'Breakfast', options: ['вечеря', 'сніданок', 'десерт'], correct: 'сніданок' },
        { word: 'Lunch', options: ['сніданок', 'обід', 'вечеря'], correct: 'обід' },
        { word: 'Dinner', options: ['сніданок', 'обід', 'вечеря'], correct: 'вечеря' },
        { word: 'School', options: ['школа', 'університет', 'коледж'], correct: 'школа' },
        { word: 'Teacher', options: ['вчитель', 'учень', 'студент'], correct: 'вчитель' },
        { word: 'Student', options: ['вчитель', 'учень', 'студент'], correct: 'учень' },
        { word: 'Friend', options: ['друг', 'ворог', 'знайомий'], correct: 'друг' },
        { word: 'Family', options: ["сім'я", 'друзі', 'колеги'], correct: "сім'я" },
        { word: 'City', options: ['місто', 'село', 'селище'], correct: 'місто' },
        { word: 'Country', options: ['країна', 'місто', 'село'], correct: 'країна' }
    ],
    B1: [
        { word: 'Experience', options: ['план', 'помилка', 'досвід'], correct: 'досвід' },
        { word: 'Challenge', options: ['виклик', 'завдання', 'проблема'], correct: 'виклик' },
        { word: 'Opportunity', options: ['можливість', 'шанс', 'ризик'], correct: 'можливість' },
        { word: 'Success', options: ['успіх', 'невдача', 'програш'], correct: 'успіх' },
        { word: 'Knowledge', options: ['знання', 'інформація', 'досвід'], correct: 'знання' },
        { word: 'Future', options: ['майбутнє', 'минуле', 'теперішнє'], correct: 'майбутнє' },
        { word: 'Problem', options: ['проблема', 'рішення', 'завдання'], correct: 'проблема' },
        { word: 'Solution', options: ['рішення', 'проблема', 'завдання'], correct: 'рішення' },
        { word: 'Decision', options: ['рішення', 'план', 'ідея'], correct: 'рішення' },
        { word: 'Goal', options: ['мета', 'завдання', 'план'], correct: 'мета' }
    ],
    B2: [
        { word: 'Require', options: ['вимагати', 'віддавати', 'ігнорувати'], correct: 'вимагати' },
        { word: 'Achieve', options: ['досягати', 'втрачати', 'забувати'], correct: 'досягати' },
        { word: 'Improve', options: ['покращувати', 'погіршувати', 'зберігати'], correct: 'покращувати' },
        { word: 'Develop', options: ['розвивати', 'зупиняти', 'знищувати'], correct: 'розвивати' },
        { word: 'Create', options: ['створювати', 'знищувати', 'змінювати'], correct: 'створювати' },
        { word: 'Support', options: ['підтримувати', 'ігнорувати', 'знищувати'], correct: 'підтримувати' },
        { word: 'Analyze', options: ['аналізувати', 'ігнорувати', 'знищувати'], correct: 'аналізувати' },
        { word: 'Evaluate', options: ['оцінювати', 'ігнорувати', 'знищувати'], correct: 'оцінювати' },
        { word: 'Communicate', options: ['спілкуватися', 'ігнорувати', 'знищувати'], correct: 'спілкуватися' },
        { word: 'Collaborate', options: ['співпрацювати', 'ігнорувати', 'знищувати'], correct: 'співпрацювати' }
    ],
    C1: [
        { word: 'Notion', options: ['поняття', 'рух', 'ідея'], correct: 'поняття' },
        { word: 'Concept', options: ['концепція', 'ідея', 'думка'], correct: 'концепція' },
        { word: 'Perspective', options: ['перспектива', 'думка', 'погляд'], correct: 'перспектива' },
        { word: 'Insight', options: ['інсайт', 'знання', 'досвід'], correct: 'інсайт' },
        { word: 'Theory', options: ['теорія', 'практика', 'досвід'], correct: 'теорія' },
        { word: 'Hypothesis', options: ['гіпотеза', 'теорія', 'факт'], correct: 'гіпотеза' },
        { word: 'Phenomenon', options: ['явище', 'факт', 'подія'], correct: 'явище' },
        { word: 'Principle', options: ['принцип', 'правило', 'норма'], correct: 'принцип' },
                { word: 'Framework', options: ['структура', 'основа', 'підстава'], correct: 'структура' },
        { word: 'Paradigm', options: ['парадигма', 'модель', 'система'], correct: 'парадигма' }
    ],
    C2: [
        { word: 'Ephemeral', options: ['постійний', 'вічний', 'короткочасний'], correct: 'короткочасний' },
        { word: 'Transitory', options: ['перехідний', 'постійний', 'вічний'], correct: 'перехідний' },
        { word: 'Ineffable', options: ['невимовний', 'зрозумілий', 'ясний'], correct: 'невимовний' },
        { word: 'Serendipity', options: ['щасливий випадок', 'нещасний випадок', 'план'], correct: 'щасливий випадок' },
        { word: 'Quintessential', options: ['основний', 'додатковий', 'неважливий'], correct: 'основний' },
        { word: 'Ubiquitous', options: ['всепроникний', 'рідкісний', 'непомітний'], correct: 'всепроникний' },
        { word: 'Obfuscate', options: ['затемнювати', 'освітлювати', 'зрозуміти'], correct: 'затемнювати' },
        { word: 'Epiphany', options: ['осяяння', 'забуття', 'недоумство'], correct: 'осяяння' },
        { word: 'Ethereal', options: ['ефірний', 'матеріальний', 'твердий'], correct: 'ефірний' },
        { word: 'Lugubrious', options: ['сумний', 'веселий', 'нейтральний'], correct: 'сумний' }
    ]
};

// Змінна для збереження поточного підрівня
let currentLevel = null;

// Індекс поточного питання
let currentQuestionIndex = 0;

// Кількість правильних відповідей
let correctAnswersCount = 0;

// Функція для показу підменю при виборі рівня
function showSubMenu(level) {
    document.getElementById('main-menu').classList.add('hidden'); // Ховаємо головне меню
    document.getElementById('sub-menu').classList.remove('hidden'); // Показуємо підменю
    let subMenuButtons = document.getElementById('sub-menu-buttons'); // Отримуємо контейнер для кнопок підрівнів
    subMenuButtons.innerHTML = ''; // Очищаємо старі кнопки

    // Створюємо кнопки для кожного підрівня рівня
    levels[level].forEach(subLevel => {
        let button = document.createElement('button'); // Створюємо кнопку
        button.className = 'wood-button';  // Додаємо клас стилю
        button.innerText = subLevel; // Назва підрівня
        button.onclick = () => startQuiz(subLevel); // Запускаємо вікторину при кліку
        subMenuButtons.appendChild(button);
    });
}

// Функція запуску вікторини
function startQuiz(level) {
    currentLevel = level; // Запам'ятовуємо підрівень
    currentQuestionIndex = 0; // Починаємо з першого слова
    correctAnswersCount = 0; // Обнуляємо правильні відповіді
    document.getElementById('sub-menu').classList.add('hidden'); // Ховаємо підменю
    document.getElementById('quiz').classList.remove('hidden'); // Показуємо блок з вікториною
    loadQuiz(); // Завантажуємо перше питання
}

// Завантаження поточного питання
function loadQuiz() {
    let quizData = words[currentLevel][currentQuestionIndex]; // Отримуємо поточне питання
    document.getElementById('quiz-word').innerText = quizData.word; // Виводимо слово для перекладу
    let quizOptions = document.getElementById('quiz-options'); // Отримуємо блок з кнопками варіантів
    quizOptions.innerHTML = ''; // Очищаємо старі варіанти

    // Створюємо кнопки для кожного варіанту перекладу
    quizData.options.forEach(option => {
        let button = document.createElement('button'); // Створюємо кнопку
        button.className = 'wood-button'; // Стиль кнопки
        button.innerText = option; // Текст кнопки — варіант відповіді
        button.onclick = () => checkAnswer(option, quizData.correct); // Перевірка відповіді при кліку
        quizOptions.appendChild(button);
    });
}

// Перевірка відповіді користувача
function checkAnswer(selected, correct) {
    let buttons = document.querySelectorAll('.wood-button'); // Отримуємо всі кнопки варіантів

    // Проходимо по кожній кнопці і змінюємо її колір залежно від правильності
    buttons.forEach(function(button) {
        let isCorrect = button.innerText === correct; // Чи ця кнопка правильна
        let isSelected = button.innerText === selected; // Чи ця кнопка була натиснута

        if (isCorrect) {
            button.style.color = '#38F088'; // Зелений для правильної
        } 
        else if (isSelected && !isCorrect) {
            button.style.color = '#E83737'; // Червоний для хибної відповіді
        }
        else {
            button.style.color = 'FFFFFF';  // Білий для інших (тут краще "#FFFFFF")
        }
    });

    // Через 1 секунду переходимо до наступного питання або завершення
    setTimeout(function() {
        if (selected === correct) correctAnswersCount++; // Збільшуємо рахунок, якщо відповідь правильна
        currentQuestionIndex++; // Переходимо до наступного питання
        if (currentQuestionIndex < words[currentLevel].length) {
            loadQuiz(); // Якщо ще є питання — завантажуємо
        } else {
            endTest(); // Інакше — кінець вікторини
        }
    }, 1000); // Затримка 1 секунда
}

// Кінець вікторини — показ результату
function endTest() {
    document.getElementById('quiz').classList.add('hidden'); // Ховаємо вікторину
    let quizResults = document.getElementById('quiz-results'); // Отримуємо блок результатів

    // Записуємо результат і додаємо кнопку повернення
    quizResults.innerHTML = `
        <p class="text-xl font-bold">Результат: ${correctAnswersCount}/${words[currentLevel].length}</p>
        <button onclick="returnToMainMenu()" class="back-button">Повернутися в меню</button>
    `;
    quizResults.classList.remove('hidden'); // Показуємо блок результату
}

// Повернення до головного меню
function returnToMainMenu() {
    document.getElementById('main-menu').classList.remove('hidden'); // Показуємо головне меню
    document.getElementById('sub-menu').classList.add('hidden'); // Ховаємо підменю
    document.getElementById('quiz').classList.add('hidden'); // Ховаємо вікторину
    document.getElementById('quiz-results').classList.add('hidden'); // Ховаємо результати
}

// Функція повернення з підменю назад у головне меню
function backToMenu() {
    document.getElementById('sub-menu').classList.add('hidden'); // Ховаємо підменю
    document.getElementById('main-menu').classList.remove('hidden'); // Показуємо головне меню
}

// Функція закриття вікторини та повернення до головного меню
function closeQuiz() {
    document.getElementById('quiz').classList.add('hidden'); // Ховаємо вікторину
    document.getElementById('quiz-results').classList.add('hidden'); // Ховаємо результати
    document.getElementById('main-menu').classList.remove('hidden'); // Показуємо головне меню
}

// Інформація про проєкт
function showInfo() {
    alert("Raccoon – це проект для вивчення англійської мови у формі вікторини. Користувач обирає рівень знань (A, B, C) та проходить завдання на переклад слів з англійської на українську. Проєкт створено командою з 4 осіб. 🦝");
}

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo");
    logo.style.transition = "transform 0.3s ease, filter 0.3s ease";
    logo.addEventListener("mouseenter", function() {
        logo.style.transform = "scale(1.1)";
        logo.style.filter = "brightness(1.2)";
    });
    logo.addEventListener("mouseleave", function() {
        logo.style.transform = "scale(1)";
        logo.style.filter = "brightness(1)";
    });
});
