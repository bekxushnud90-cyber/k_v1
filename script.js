// Mock data for films, series and cartoons
const filmsData = [
    {
        id: 1,
        title: "O'rmon qo'riqchisi",
        image: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        year: 2023,
        rating: 8.5,
        genre: ["Sarguzasht", "Drama"],
        description: "Yosh o'rmon qo'riqchisining tabiatni himoya qilish uchun kurashi haqida hikoya.",
        comments: [
            {
                id: 1,
                user: "Ali",
                date: "2023-10-15",
                text: "Ajoyib film! Tasvir va sarguzasht ayni birga.",
                likes: 24,
                liked: false,
                replies: [
                    { id: 11, user: "Sara", date: "2023-10-16", text: "Men ham juda yoqdim!" }
                ]
            },
            {
                id: 2,
                user: "Malika",
                date: "2023-10-10",
                text: "Tabiatni himoya qilish mavzusi juda dolzarb.",
                likes: 15,
                liked: true,
                replies: []
            }
        ]
    },
    {
        id: 2,
        title: "Yulduzli kecha",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        year: 2022,
        rating: 7.9,
        genre: ["Romantika", "Drama"],
        description: "Ikki yoshning sevgi va orzular yo'lidagi sarguzashti.",
        comments: [
            {
                id: 3,
                user: "Javohir",
                date: "2023-10-05",
                text: "Romantik filmlar orasida eng yaxshilaridan biri.",
                likes: 18,
                liked: false,
                replies: []
            }
        ]
    },
    {
        id: 3,
        title: "Kod nomi: Qasos",
        image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        year: 2023,
        rating: 8.9,
        genre: ["Jangari", "Triller"],
        description: "Maxsus agentning terror guruhiga qarshi kurashi.",
        comments: [
            {
                id: 4,
                user: "Davron",
                date: "2023-10-12",
                text: "Jangari sahnalar ajoyib edi!",
                likes: 32,
                liked: false,
                replies: []
            }
        ]
    },
    {
        id: 4,
        title: "Sirli orol",
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        year: 2021,
        rating: 8.1,
        genre: ["Sarguzasht", "Fantastika"],
        description: "G'oyib bo'lgan orolni topish uchun safar.",
        comments: []
    }
];

const seriesData = [
    {
        id: 5,
        title: "Qasos",
        image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        year: 2020,
        rating: 8.7,
        genre: ["Drama", "Triller"],
        description: "Oilasi o'ldirilgan yoshning qasos olish yo'lidagi sarguzashti.",
        comments: []
    },
    {
        id: 6,
        title: "Shahar afsonalari",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        year: 2022,
        rating: 8.3,
        genre: ["Drama", "Tarixiy"],
        description: "Shaharning taniqli shaxslari haqida hikoyalar.",
        comments: []
    }
];

const cartoonsData = [
    {
        id: 7,
        title: "Sehrli o'rmon",
        image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        year: 2023,
        rating: 9.1,
        genre: ["Multfilm", "Sarguzasht"],
        description: "Sehrli mavjudotlar yashaydigan o'rmon haqida multfilm.",
        comments: []
    },
    {
        id: 8,
        title: "Kichik robot",
        image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        year: 2022,
        rating: 8.8,
        genre: ["Multfilm", "Fantastika"],
        description: "Kichik robotning insonlar bilan do'stligi haqida.",
        comments: []
    }
];

// Current user state
let currentUser = null;

// DOM elements
const moviesGrid = document.querySelector('.movies-grid');
const seriesGrid = document.querySelector('.series-grid');
const cartoonsGrid = document.querySelector('.cartoons-grid');
const filmModal = document.getElementById('filmModal');
const authModal = document.getElementById('authModal');
const closeModalButtons = document.querySelectorAll('.close-modal');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const authTabs = document.querySelectorAll('.auth-tab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderFilms();
    renderSeries();
    renderCartoons();
    setupEventListeners();
    
    // Check if user is already logged in
    const savedUser = localStorage.getItem('kimbaUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAuthUI();
    }
});

// Render films to the grid
function renderFilms() {
    moviesGrid.innerHTML = '';
    filmsData.forEach(film => {
        const filmCard = createFilmCard(film);
        moviesGrid.appendChild(filmCard);
    });
}

// Render series to the grid
function renderSeries() {
    seriesGrid.innerHTML = '';
    seriesData.forEach(series => {
        const seriesCard = createFilmCard(series);
        seriesGrid.appendChild(seriesCard);
    });
}

// Render cartoons to the grid
function renderCartoons() {
    cartoonsGrid.innerHTML = '';
    cartoonsData.forEach(cartoon => {
        const cartoonCard = createFilmCard(cartoon);
        cartoonsGrid.appendChild(cartoonCard);
    });
}

// Create film card element
function createFilmCard(film) {
    const card = document.createElement('div');
    card.className = 'film-card';
    card.dataset.id = film.id;
    
    // Determine which array the film belongs to
    let filmArray;
    if (filmsData.find(f => f.id === film.id)) filmArray = filmsData;
    else if (seriesData.find(f => f.id === film.id)) filmArray = seriesData;
    else filmArray = cartoonsData;
    
    card.innerHTML = `
        <img src="${film.image}" alt="${film.title}" class="film-img">
        <div class="film-info">
            <h3 class="film-title">${film.title}</h3>
            <div class="film-meta">
                <span class="film-year">${film.year}</span>
                <span class="film-rating">★ ${film.rating}</span>
            </div>
            <div class="film-genre">
                ${film.genre.map(g => `<span class="genre-tag">${g}</span>`).join('')}
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openFilmModal(film, filmArray));
    return card;
}

// Open film modal with details
function openFilmModal(film, filmArray) {
    const filmDetails = document.querySelector('.film-details');
    
    filmDetails.innerHTML = `
        <div class="film-header">
            <div class="film-poster">
                <img src="${film.image}" alt="${film.title}">
            </div>
            <div class="film-main-info">
                <h2>${film.title} (${film.year})</h2>
                <div class="film-rating-large">★ ${film.rating}/10</div>
                <div class="film-genre">
                    ${film.genre.map(g => `<span class="genre-tag">${g}</span>`).join('')}
                </div>
                <p class="film-description">${film.description}</p>
            </div>
        </div>
        
        <div class="comments-section">
            <h3 class="comments-title">Izohlar (${film.comments.length})</h3>
            
            ${currentUser ? `
            <div class="comment-form">
                <textarea id="newCommentText" placeholder="Fikringizni yozing..."></textarea>
                <button id="submitComment" class="btn btn-primary">Yuborish</button>
            </div>
            ` : `<p style="text-align: center; padding: 1rem; background: #f5f5f5; border-radius: var(--radius);">Izoh qoldirish uchun <a href="#" id="loginFromComment">ro'yxatdan o'ting</a> yoki kirish qiling.</p>`}
            
            <div class="comments-list">
                ${renderComments(film.comments)}
            </div>
        </div>
    `;
    
    // Add event listeners for the new comment form
    const submitCommentBtn = document.getElementById('submitComment');
    if (submitCommentBtn) {
        submitCommentBtn.addEventListener('click', () => {
            addComment(film, filmArray);
        });
    }
    
    // Add event listener for login link
    const loginFromComment = document.getElementById('loginFromComment');
    if (loginFromComment) {
        loginFromComment.addEventListener('click', (e) => {
            e.preventDefault();
            filmModal.style.display = 'none';
            openAuthModal();
        });
    }
    
    // Add event listeners for like and reply buttons
    setupCommentInteractions(film, filmArray);
    
    filmModal.style.display = 'block';
}

// Render comments
function renderComments(comments) {
    if (comments.length === 0) {
        return '<p>Hozircha izohlar yoʻq. Birinchi boʻlib fikringizni yozing!</p>';
    }
    
    return comments.map(comment => `
        <div class="comment" data-comment-id="${comment.id}">
            <div class="comment-header">
                <span class="comment-user">${comment.user}</span>
                <span class="comment-date">${comment.date}</span>
            </div>
            <p class="comment-text">${comment.text}</p>
            <div class="comment-actions">
                <button class="comment-like ${comment.liked ? 'liked' : ''}" data-comment-id="${comment.id}">
                    <i class="fas fa-thumbs-up"></i> <span class="like-count">${comment.likes}</span>
                </button>
                <button class="comment-reply" data-comment-id="${comment.id}">
                    <i class="fas fa-reply"></i> Javob berish
                </button>
            </div>
            ${comment.replies && comment.replies.length > 0 ? `
                <div class="replies">
                    ${comment.replies.map(reply => `
                        <div class="comment reply">
                            <div class="comment-header">
                                <span class="comment-user">${reply.user}</span>
                                <span class="comment-date">${reply.date}</span>
                            </div>
                            <p class="comment-text">${reply.text}</p>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Setup comment interactions (like and reply)
function setupCommentInteractions(film, filmArray) {
    // Like buttons
    document.querySelectorAll('.comment-like').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const commentId = parseInt(button.dataset.commentId);
            likeComment(film, filmArray, commentId);
        });
    });
    
    // Reply buttons
    document.querySelectorAll('.comment-reply').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const commentId = parseInt(button.dataset.commentId);
            showReplyForm(film, filmArray, commentId);
        });
    });
}

// Like a comment
function likeComment(film, filmArray, commentId) {
    if (!currentUser) {
        openAuthModal();
        return;
    }
    
    const comment = findComment(film.comments, commentId);
    if (comment) {
        if (comment.liked) {
            comment.likes--;
            comment.liked = false;
        } else {
            comment.likes++;
            comment.liked = true;
        }
        
        // Update the film in the appropriate array
        const filmIndex = filmArray.findIndex(f => f.id === film.id);
        if (filmIndex !== -1) {
            filmArray[filmIndex] = film;
            openFilmModal(film, filmArray);
        }
    }
}

// Find comment by ID (including nested replies)
function findComment(comments, commentId) {
    for (const comment of comments) {
        if (comment.id === commentId) return comment;
        
        if (comment.replies && comment.replies.length > 0) {
            for (const reply of comment.replies) {
                if (reply.id === commentId) return reply;
            }
        }
    }
    return null;
}

// Show reply form
function showReplyForm(film, filmArray, commentId) {
    if (!currentUser) {
        openAuthModal();
        return;
    }
    
    const commentElement = document.querySelector(`.comment[data-comment-id="${commentId}"]`);
    const existingForm = commentElement.querySelector('.reply-form');
    
    if (existingForm) {
        existingForm.remove();
        return;
    }
    
    const replyForm = document.createElement('div');
    replyForm.className = 'reply-form';
    replyForm.innerHTML = `
        <textarea class="reply-text" placeholder="Javobingizni yozing..."></textarea>
        <button class="btn btn-primary btn-sm submit-reply">Yuborish</button>
        <button class="btn btn-outline btn-sm cancel-reply">Bekor qilish</button>
    `;
    
    // Insert after the comment actions
    const commentActions = commentElement.querySelector('.comment-actions');
    commentActions.after(replyForm);
    
    // Add event listeners
    const submitBtn = replyForm.querySelector('.submit-reply');
    const cancelBtn = replyForm.querySelector('.cancel-reply');
    
    submitBtn.addEventListener('click', () => {
        const replyText = replyForm.querySelector('.reply-text').value;
        if (replyText.trim()) {
            addReply(film, filmArray, commentId, replyText);
        }
    });
    
    cancelBtn.addEventListener('click', () => {
        replyForm.remove();
    });
}

// Add a reply to a comment
function addReply(film, filmArray, commentId, replyText) {
    const comment = findComment(film.comments, commentId);
    
    if (comment) {
        if (!comment.replies) comment.replies = [];
        
        const newReply = {
            id: Date.now(), // Simple ID generation
            user: currentUser.username,
            date: new Date().toISOString().split('T')[0],
            text: replyText
        };
        
        comment.replies.push(newReply);
        
        // Update the film in the appropriate array
        const filmIndex = filmArray.findIndex(f => f.id === film.id);
        if (filmIndex !== -1) {
            filmArray[filmIndex] = film;
            openFilmModal(film, filmArray);
        }
    }
}

// Add a new comment
function addComment(film, filmArray) {
    const commentText = document.getElementById('newCommentText').value;
    
    if (!commentText.trim()) {
        alert('Izoh matni bo\'sh bo\'lishi mumkin emas!');
        return;
    }
    
    const newComment = {
        id: Date.now(), // Simple ID generation
        user: currentUser.username,
        date: new Date().toISOString().split('T')[0],
        text: commentText,
        likes: 0,
        liked: false,
        replies: []
    };
    
    film.comments.unshift(newComment);
    
    // Update the film in the appropriate array
    const filmIndex = filmArray.findIndex(f => f.id === film.id);
    if (filmIndex !== -1) {
        filmArray[filmIndex] = film;
        openFilmModal(film, filmArray);
    }
}

// Open authentication modal
function openAuthModal() {
    authModal.style.display = 'block';
    showAuthTab('login');
}

// Show specific auth tab
function showAuthTab(tabName) {
    authTabs.forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    if (tabName === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    } else {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    }
}

// Handle login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation
    if (!email || !password) {
        alert('Iltimos, barcha maydonlarni to\'ldiring!');
        return;
    }
    
    // Mock login - in real app, this would be an API call
    currentUser = {
        username: email.includes('@') ? email.split('@')[0] : email,
        email: email.includes('@') ? email : `${email}@example.com`
    };
    
    // Save to localStorage
    localStorage.setItem('kimbaUser', JSON.stringify(currentUser));
    
    // Update UI
    updateAuthUI();
    
    // Close modal
    authModal.style.display = 'none';
    
    // Clear form
    loginForm.reset();
    
    alert('Muvaffaqiyatli kirdingiz!');
});

// Handle registration
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('regName').value;
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    
    // Simple validation
    if (!name || !username || !email || !password) {
        alert('Iltimos, barcha maydonlarni to\'ldiring!');
        return;
    }
    
    if (password.length < 6) {
        alert('Parol kamida 6 ta belgidan iborat bo\'lishi kerak!');
        return;
    }
    
    // Mock registration - in real app, this would be an API call
    currentUser = {
        name,
        username,
        email
    };
    
    // Save to localStorage
    localStorage.setItem('kimbaUser', JSON.stringify(currentUser));
    
    // Update UI
    updateAuthUI();
    
    // Close modal
    authModal.style.display = 'none';
    
    // Clear form
    registerForm.reset();
    
    alert('Muvaffaqiyatli ro\'yxatdan o\'tdingiz!');
});

// Update authentication UI
function updateAuthUI() {
    if (currentUser) {
        // Replace auth buttons with user info
        document.querySelector('.auth-buttons').innerHTML = `
            <span style="margin-right: 1rem;">Xush kelibsiz, ${currentUser.username}!</span>
            <button id="logoutBtn" class="btn btn-outline">Chiqish</button>
        `;
        
        // Add logout event listener
        document.getElementById('logoutBtn').addEventListener('click', logout);
    } else {
        // Show default auth buttons
        document.querySelector('.auth-buttons').innerHTML = `
            <button id="loginBtn" class="btn btn-outline">Kirish</button>
            <button id="registerBtn" class="btn btn-primary">Ro'yxatdan o'tish</button>
        `;
        
        // Re-add event listeners
        document.getElementById('loginBtn').addEventListener('click', openAuthModal);
        document.getElementById('registerBtn').addEventListener('click', () => {
            openAuthModal();
            showAuthTab('register');
        });
    }
}

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('kimbaUser');
    updateAuthUI();
    alert('Siz tizimdan chiqdingiz.');
}

// Setup event listeners
function setupEventListeners() {
    // Close modals when clicking X
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            filmModal.style.display = 'none';
            authModal.style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === filmModal) {
            filmModal.style.display = 'none';
        }
        if (e.target === authModal) {
            authModal.style.display = 'none';
        }
    });
    
    // Auth button events
    loginBtn.addEventListener('click', openAuthModal);
    registerBtn.addEventListener('click', () => {
        openAuthModal();
        showAuthTab('register');
    });
    
    // Auth tab switching
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            showAuthTab(tab.dataset.tab);
        });
    });
    
    // Search functionality
    const searchBox = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    
    searchButton.addEventListener('click', () => {
        performSearch(searchBox.value);
    });
    
    searchBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchBox.value);
        }
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Adjust menu for responsive design
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            navMenu.style.display = 'flex';
        } else {
            navMenu.style.display = 'none';
        }
    });
}

// Perform search
function performSearch(query) {
    if (!query.trim()) return;
    
    // Combine all films
    const allFilms = [...filmsData, ...seriesData, ...cartoonsData];
    
    // Filter films by query
    const results = allFilms.filter(film => 
        film.title.toLowerCase().includes(query.toLowerCase()) ||
        film.genre.some(g => g.toLowerCase().includes(query.toLowerCase())) ||
        film.description.toLowerCase().includes(query.toLowerCase())
    );
    
    // Display results
    if (results.length > 0) {
        // In a real app, you would show search results in a dedicated section
        alert(`${results.length} ta natifa topildi. Birinchi film: "${results[0].title}"`);
        
        // Open the first result
        let filmArray;
        if (filmsData.find(f => f.id === results[0].id)) filmArray = filmsData;
        else if (seriesData.find(f => f.id === results[0].id)) filmArray = seriesData;
        else filmArray = cartoonsData;
        
        openFilmModal(results[0], filmArray);
    } else {
        alert(`"${query}" bo'yicha hech narsa topilmadi.`);
    }
}
