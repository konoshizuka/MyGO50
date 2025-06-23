// script.js
document.addEventListener('DOMContentLoaded', () => {

    function fixMobileHeight() {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);}
        window.addEventListener('resize', fixMobileHeight);
        window.addEventListener('load', fixMobileHeight);

    // DOM 元素获取
    const screens = {
        home: document.getElementById('home-screen'),
        quiz: document.getElementById('quiz-screen'),
        result: document.getElementById('result-screen'),
        score: document.getElementById('score-screen'),
    };
    const buttons = {
        start: document.getElementById('start-game-btn'),
        authorInfo: document.getElementById('author-info-btn'),
        nextQuestion: document.getElementById('next-question-btn'),
        playAgain: document.getElementById('play-again-btn'),
        toHomeFromResult: document.getElementById('back-to-home-btn-result'),
        toHomeFromScore: document.getElementById('back-to-home-btn-score'),
    };
    const quizElements = {
        progressText: document.getElementById('progress-text'),
        kanaChar: document.getElementById('kana-char'),
        optionsContainer: document.getElementById('options-container'),
    };
    const resultElements = {
        status: document.getElementById('result-status'),
        image: document.getElementById('result-image'),
        sentence: document.getElementById('example-sentence'),
        translation: document.getElementById('chinese-translation'),
        speaker: document.getElementById('speaker-name'),
        audio: document.getElementById('sentence-audio'),
    };
    const scoreElements = {
        finalScore: document.getElementById('final-score'),
    };
    const authorModal = document.getElementById('author-modal');
    const closeModalBtn = document.querySelector('.close-btn');

    // 游戏状态变量
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    const TOTAL_QUESTIONS = 10;

    // --- 核心功能函数 ---

    /**
     * 切换显示的屏幕
     * @param {string} screenName - 'home', 'quiz', 'result', or 'score'
     */
    function showScreen(screenName) {
        Object.values(screens).forEach(screen => screen.classList.remove('active'));
        screens[screenName].classList.add('active');
    }

    /**
     * 随机打乱数组（Fisher-Yates 算法）
     * @param {Array} array 
     * @returns {Array} 打乱后的新数组
     */
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    /**
     * 开始游戏
     */
    function startGame() {
        currentQuestions = shuffleArray(gojuonData).slice(0, TOTAL_QUESTIONS);
        currentQuestionIndex = 0;
        score = 0;
        displayQuestion();
        showScreen('quiz');
    }

    /**
     * 显示当前题目
     */
    function displayQuestion() {
        if (currentQuestionIndex >= currentQuestions.length) {
            showFinalScore();
            return;
        }

        const question = currentQuestions[currentQuestionIndex];
        
        quizElements.progressText.textContent = `第 ${currentQuestionIndex + 1} / ${TOTAL_QUESTIONS} 题`;
        quizElements.kanaChar.textContent = question.kana;

        // 生成选项
        const correctAnswer = question.romaji;
        let options = [correctAnswer];
        
        // 生成三个错误选项
        const wrongAnswers = gojuonData
            .filter(item => item.romaji !== correctAnswer)
            .map(item => item.romaji);
        const shuffledWrong = shuffleArray(wrongAnswers);
        options.push(...shuffledWrong.slice(0, 3));
        
        // 打乱四个选项并显示
        const shuffledOptions = shuffleArray(options);
        quizElements.optionsContainer.innerHTML = '';
        shuffledOptions.forEach(opt => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = opt;
            optionBtn.addEventListener('click', () => selectAnswer(opt));
            quizElements.optionsContainer.appendChild(optionBtn);
        });
    }

    /**
     * 用户选择答案
     * @param {string} selectedRomaji - 用户选择的罗马音
     */
    function selectAnswer(selectedRomaji) {
        const question = currentQuestions[currentQuestionIndex];
        const isCorrect = selectedRomaji === question.romaji;

        if (isCorrect) {
            score++;
            resultElements.status.textContent = "正解";
            resultElements.status.className = "correct";
        } else {
            resultElements.status.textContent = `残念... 正确答案是 ${question.romaji}`;
            resultElements.status.className = "incorrect";
        }

        // 填充结果页信息
        const { example } = question;
        resultElements.image.style.backgroundImage = `url('${example.imageSrc}')`;
        
        // 处理例句高亮
        const highlightedSentence = example.sentenceWithRuby.replace(
            new RegExp(question.kana, 'g'), 
            `<span class="highlight">${question.kana}</span>`
        );
        resultElements.sentence.innerHTML = highlightedSentence;
        
        resultElements.translation.innerHTML = example.chinese;
        resultElements.speaker.textContent = `— ${example.speaker}`;
        resultElements.audio.src = example.audioSrc;
        
        // 自动播放音频
        resultElements.audio.play().catch(e => console.log("浏览器限制了自动播放"));

        // 如果是最后一题，改变按钮文字
        if (currentQuestionIndex === TOTAL_QUESTIONS - 1) {
            buttons.nextQuestion.textContent = "查看得分";
        } else {
            buttons.nextQuestion.textContent = "下一题";
        }

        showScreen('result');
    }

    /**
     * 移动到下一题
     */
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < TOTAL_QUESTIONS) {
            displayQuestion();
            showScreen('quiz');
        } else {
            showFinalScore();
        }
    }

    /**
     * 显示最终得分
     */
    function showFinalScore() {
        scoreElements.finalScore.textContent = `你答对了 ${score} / ${TOTAL_QUESTIONS} 道题！`;
        showScreen('score');
    }

    /**
     * 返回首页
     */
    function backToHome() {
        showScreen('home');
    }

    // --- 事件监听器绑定 ---
    buttons.start.addEventListener('click', startGame);
    buttons.playAgain.addEventListener('click', startGame);
    buttons.nextQuestion.addEventListener('click', nextQuestion);
    buttons.toHomeFromResult.addEventListener('click', backToHome);
    buttons.toHomeFromScore.addEventListener('click', backToHome);
    
    // 作者信息弹窗逻辑
    buttons.authorInfo.addEventListener('click', () => {
        authorModal.style.display = 'block';
    });
    closeModalBtn.addEventListener('click', () => {
        authorModal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target == authorModal) {
            authorModal.style.display = 'none';
        }
    });

    // 初始显示首页
    showScreen('home');
});
