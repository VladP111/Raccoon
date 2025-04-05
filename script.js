let levels = { 
    A: ['A1', 'A2'], 
    B: ['B1', 'B2'], 
    C: ['C1', 'C2'] 
};

let words = { 
    A1: [
        { word: 'Apple', options: ['яблуко', 'ананас', 'груша'], correct: 'яблуко' },
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

let currentLevel = null;
let currentQuestionIndex = 0;
let correctAnswersCount = 0;

function showSubMenu(level) {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('sub-menu').classList.remove('hidden');
    let subMenuButtons = document.getElementById('sub-menu-buttons');
    subMenuButtons.innerHTML = '';
    levels[level].forEach(subLevel => {
        let button = document.createElement('button');
        button.className = 'wood-button';  
        button.innerText = subLevel;
        button.onclick = () => startQuiz(subLevel); 
        subMenuButtons.appendChild(button);
    });
}

function startQuiz(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    document.getElementById('sub-menu').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    loadQuiz();
}

function loadQuiz() {
    let quizData = words[currentLevel][currentQuestionIndex];
    document.getElementById('quiz-word').innerText = quizData.word;
    let quizOptions = document.getElementById('quiz-options');
    quizOptions.innerHTML = '';
    
    quizData.options.forEach(option => {
        let button = document.createElement('button');
        button.className = 'wood-button'; 
        button.innerText = option;
        button.onclick = () => checkAnswer(option, quizData.correct);
        quizOptions.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    let buttons = document.querySelectorAll('.wood-button');
    buttons.forEach(function(button) {
        let isCorrect = button.innerText === correct;
        let isSelected = button.innerText === selected;

        anime({
            targets: button,
            backgroundColor: isCorrect ? '#4CAF50' : isSelected ? '#F44336' : button.style.backgroundColor,
            duration: 400,
            easing: 'easeInOutQuad'
        });
    });

    setTimeout(function() {
        if (selected === correct) correctAnswersCount++;
        currentQuestionIndex++;
        if (currentQuestionIndex < words[currentLevel].length) {
            loadQuiz();
        } else {
            endTest();
        }
    }, 1000);
}

function endTest() {
    document.getElementById('quiz').classList.add('hidden');
    let quizResults = document.getElementById('quiz-results');
    quizResults.innerHTML = `
        <p class="text-xl font-bold">Результат: ${correctAnswersCount}/${words[currentLevel].length}</p>
        <button onclick="returnToMainMenu()" class="back-button">Повернутися в меню</button>
    `;
    quizResults.classList.remove('hidden');
}

function returnToMainMenu() {
    document.getElementById('main-menu').classList.remove('hidden');
    document.getElementById('sub-menu').classList.add('hidden');
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
}

function backToMenu() {
    document.getElementById('sub-menu').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
}

function closeQuiz() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
}

function showInfo() {
    alert("Raccoon – це проект для вивчення англійської мови у формі вікторини. Користувач обирає рівень знань (A, B, C) та проходить завдання на переклад слів з англійської на українську. Проєкт створено командою з 3 осіб. 🦝");
}
