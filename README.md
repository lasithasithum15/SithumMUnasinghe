[moramaths-mega-edition (5).html](https://github.com/user-attachments/files/30226719/moramaths-mega-edition.5.html)
<!DOCTYPE html>
<html lang="si" class="h-full scroll-smooth" id="html-root">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MoraMaths - Advanced O/L Speed Revision & LMS Portal | University of Moratuwa</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#eef2ff',
                            100: '#e0e7ff',
                            500: '#6366f1',
                            600: '#4f46e5',
                            700: '#4338ca',
                            900: '#312e81',
                            950: '#1e1b4b',
                        }
                    }
                }
            }
        }
    </script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <!-- EmailJS CDN -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
    <!-- Firebase (Firestore) — used to sync app data (users, weeks, notifications, zoom, site assets)
         across devices/browsers, since localStorage alone is per-device only. -->
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"></script>
    <style>
        body { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0b0914; }
        ::-webkit-scrollbar-thumb { background: #312e81; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #4f46e5; }
        @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-15px) scale(1.02); }
        }
        .floating-glow { animation: floatSlow 8s ease-in-out infinite; }
        @keyframes pulseGlow {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
        }
        .pulse-glow { animation: pulseGlow 4s ease-in-out infinite; }
        @keyframes toastIn { from { opacity: 0; transform: translateY(12px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes toastOut { from { opacity: 1; transform: translateY(0) scale(1); } to { opacity: 0; transform: translateY(12px) scale(0.96); } }
        .toast-enter { animation: toastIn 0.25s ease-out forwards; }
        .toast-leave { animation: toastOut 0.2s ease-in forwards; }
        @keyframes popIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .pop-in { animation: popIn 0.18s ease-out forwards; }
        .quiz-option { transition: all 0.15s ease; }
        .quiz-option:hover { transform: translateX(2px); }
        .quiz-option.correct-answer { background: rgba(16,185,129,0.18) !important; border-color: rgba(16,185,129,0.6) !important; }
        .quiz-option.wrong-answer { background: rgba(244,63,94,0.18) !important; border-color: rgba(244,63,94,0.6) !important; }
        .notif-dot { box-shadow: 0 0 0 2px #0b0914; }
        .rank-1 { background: linear-gradient(135deg,#f59e0b,#fbbf24); }
        .rank-2 { background: linear-gradient(135deg,#94a3b8,#cbd5e1); }
        .rank-3 { background: linear-gradient(135deg,#b45309,#d97706); }
        [contenteditable="true"]:focus { outline: 1px dashed rgba(99,102,241,0.6); outline-offset: 3px; border-radius: 6px; }
        #auth-hero-panel { display: none; }
        @media (min-width: 1024px) {
            #auth-hero-panel.hero-visible { display: flex; }
        }

        /* ===== Extra polish: hover lift, shine sweep, glow border ===== */
        .lift-card { transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }
        .lift-card:hover { transform: translateY(-3px); box-shadow: 0 12px 30px -10px rgba(99,102,241,0.35); border-color: rgba(99,102,241,0.45); }

        .shine-btn { position: relative; overflow: hidden; }
        .shine-btn::after {
            content: ''; position: absolute; top: 0; left: -75%; width: 50%; height: 100%;
            background: linear-gradient(120deg, transparent, rgba(255,255,255,0.28), transparent);
            transform: skewX(-20deg);
        }
        .shine-btn:hover::after { animation: shineSweep 0.9s ease; }
        @keyframes shineSweep { from { left: -75%; } to { left: 130%; } }

        @keyframes borderGlow {
            0%, 100% { box-shadow: 0 0 0 1px rgba(99,102,241,0.25), 0 20px 60px -20px rgba(99,102,241,0.35); }
            50% { box-shadow: 0 0 0 1px rgba(168,85,247,0.35), 0 20px 60px -15px rgba(168,85,247,0.4); }
        }
        .glow-border { animation: borderGlow 5s ease-in-out infinite; }

        @keyframes shimmerText {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
        }
        .shimmer-text {
            background: linear-gradient(90deg, #a5b4fc 0%, #e9d5ff 25%, #a5b4fc 50%, #e9d5ff 75%, #a5b4fc 100%);
            background-size: 200% auto;
            -webkit-background-clip: text; background-clip: text; color: transparent;
            animation: shimmerText 6s linear infinite;
        }

        @keyframes confettiFall {
            0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
            100% { transform: translateY(110vh) rotate(540deg); opacity: 0.9; }
        }
        .confetti-piece { position: fixed; top: 0; z-index: 200; pointer-events: none; border-radius: 2px; }
    </style>

    <script>
        /* Lightweight, dependency-free confetti burst — used to celebrate registration,
           perfect quiz scores, and level-ups without pulling in an external library. */
        function fireConfetti(count = 60) {
            const colors = ['#818cf8', '#c084fc', '#f472b6', '#34d399', '#fbbf24'];
            for (let i = 0; i < count; i++) {
                const piece = document.createElement('div');
                piece.className = 'confetti-piece';
                const size = 6 + Math.random() * 6;
                piece.style.width = size + 'px';
                piece.style.height = (size * 0.4) + 'px';
                piece.style.left = Math.random() * 100 + 'vw';
                piece.style.background = colors[Math.floor(Math.random() * colors.length)];
                const duration = 2.2 + Math.random() * 1.6;
                const delay = Math.random() * 0.4;
                piece.style.animation = `confettiFall ${duration}s ease-in ${delay}s forwards`;
                document.body.appendChild(piece);
                setTimeout(() => piece.remove(), (duration + delay) * 1000 + 200);
            }
        }
    </script>
</head>
<body class="bg-[#0b0914] text-slate-100 font-sans h-full flex flex-col justify-between selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">

    <!-- MATRIX MATH RAIN BACKGROUND (shown on the login/register screen) -->
    <canvas id="matrix-canvas" class="fixed inset-0 w-full h-full pointer-events-none opacity-0 transition-opacity duration-700"></canvas>

    <!-- Ambient Glow Background Elements -->
    <div class="fixed top-0 left-1/4 w-[700px] h-[700px] bg-indigo-900/15 rounded-full blur-[150px] pointer-events-none floating-glow"></div>
    <div class="fixed bottom-0 right-1/4 w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none floating-glow" style="animation-delay: 4s;"></div>

    <!-- NAVIGATION BAR -->
    <nav class="relative z-20 bg-[#120f1d]/85 backdrop-blur-xl border-b border-slate-800/80 px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 shadow-2xl">
        <div class="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black px-3.5 py-2 rounded-2xl shadow-lg border border-indigo-400/30 flex items-center gap-2 text-xs sm:text-sm">
                <i class="fa-solid fa-square-root-variable text-yellow-300"></i> MoraMaths Mega Edition
            </div>
            <span class="text-[11px] font-medium text-slate-300 hidden lg:inline-block bg-slate-900/80 px-4 py-1.5 rounded-full border border-slate-800 shadow-inner whitespace-nowrap">
                Sithum Munasinghe | University of Moratuwa Undergraduate
            </span>
        </div>
        <div class="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
            <button onclick="toggleLanguage()" class="bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-bold px-3.5 py-2 rounded-xl transition cursor-pointer flex items-center gap-2 shadow-md">
                <i class="fa-solid fa-globe text-indigo-400"></i> <span id="lang-btn-text">සිංහල | English</span>
            </button>
            <div id="nav-leaderboard-btn-wrap" class="hidden">
                <button onclick="toggleLeaderboardView()" id="nav-leaderboard-btn" class="bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-bold w-9 h-9 sm:w-auto sm:px-3.5 sm:py-2 rounded-xl transition cursor-pointer flex items-center justify-center gap-2 shadow-md" title="Leaderboard">
                    <i class="fa-solid fa-trophy text-yellow-400"></i> <span class="hidden sm:inline" id="txt-leaderboard-btn">Leaderboard</span>
                </button>
            </div>
            <div id="nav-game-btn-wrap" class="hidden">
                <button onclick="toggleGameView()" id="nav-game-btn" class="bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-bold w-9 h-9 sm:w-auto sm:px-3.5 sm:py-2 rounded-xl transition cursor-pointer flex items-center justify-center gap-2 shadow-md" title="Level Game">
                    <i class="fa-solid fa-gamepad text-emerald-400"></i> <span class="hidden sm:inline" id="txt-game-btn">Level Game</span>
                </button>
            </div>
            <div id="notif-bell-wrap" class="hidden relative">
                <button onclick="toggleNotifDropdown()" class="relative bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 w-9 h-9 rounded-xl transition cursor-pointer flex items-center justify-center shadow-md" title="Notifications">
                    <i class="fa-solid fa-bell text-indigo-300"></i>
                    <span id="notif-badge" class="hidden absolute -top-1 -right-1 w-4 h-4 bg-rose-500 notif-dot rounded-full text-[9px] font-bold flex items-center justify-center text-white">0</span>
                </button>
                <div id="notif-dropdown" class="hidden pop-in absolute right-0 mt-2 w-72 bg-[#161224] border border-slate-800 rounded-2xl shadow-2xl z-30 overflow-hidden">
                    <div class="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                        <span class="text-xs font-extrabold text-white" id="notif-panel-title">Notifications</span>
                        <button onclick="closeNotifDropdown()" class="text-slate-500 hover:text-white text-xs cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div id="notif-list" class="max-h-72 overflow-y-auto divide-y divide-slate-800/80"></div>
                </div>
            </div>
            <div id="user-nav-profile" class="hidden flex items-center gap-2 sm:gap-3 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-xl shadow-inner">
                <div onclick="openProfileModal()" class="flex items-center gap-2 sm:gap-3 cursor-pointer hover:opacity-80 transition">
                    <div class="w-7 h-7 rounded-lg bg-indigo-600/35 border border-indigo-500/40 text-yellow-300 flex items-center justify-center font-bold text-xs shrink-0" id="nav-mini-avatar">S</div>
                    <span id="nav-user-name" class="text-xs font-bold text-slate-200 truncate max-w-[100px] sm:max-w-none"></span>
                </div>
                <button onclick="logout()" class="bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg transition cursor-pointer flex items-center gap-1.5 shadow-md ml-1 shrink-0">
                    <i class="fa-solid fa-right-from-bracket"></i> <span id="txt-logout-btn">Log Out</span>
                </button>
            </div>
        </div>
    </nav>

    <!-- MAIN BODY CONTAINER -->
    <main class="relative z-10 flex-grow flex items-center justify-center p-4 sm:p-8 my-auto w-full">

        <div id="auth-screen-flex" class="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-8 lg:gap-14 justify-center">

            <!-- HERO VISUAL PANEL (login/register screens only, lg+ width) -->
            <div id="auth-hero-panel" class="flex-1 max-w-md flex-col items-center lg:items-start text-center lg:text-left">
                <div id="auth-hero-visual" class="w-full max-w-xs mx-auto lg:mx-0"></div>
                <div class="space-y-3 mt-2">
                    <h2 id="hero-headline" class="text-2xl xl:text-3xl font-black text-white leading-tight">O/L ගණිතය සති 16කින්<br>සම්පූර්ණයෙන් ආවරණය කරමු</h2>
                    <p id="hero-subheadline" class="text-sm text-slate-400 leading-relaxed">Live Zoom classes, weekly quizzes, leaderboard, සහ සම්පූර්ණ 16 සති පුනරීක්ෂණ සැලැස්මක් — MoraMaths සමගින්.</p>
                    <div class="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                        <span class="bg-slate-900/80 border border-slate-800 text-[11px] font-bold text-indigo-300 px-3 py-1.5 rounded-full shadow-md"><i class="fa-solid fa-video mr-1.5"></i>Live Classes</span>
                        <span class="bg-slate-900/80 border border-slate-800 text-[11px] font-bold text-emerald-300 px-3 py-1.5 rounded-full shadow-md"><i class="fa-solid fa-layer-group mr-1.5"></i>Weeks 16ක් සම්පූර්ණයි</span>
                        <span class="bg-slate-900/80 border border-slate-800 text-[11px] font-bold text-yellow-300 px-3 py-1.5 rounded-full shadow-md"><i class="fa-solid fa-trophy mr-1.5"></i>Leaderboard &amp; Quizzes</span>
                    </div>
                </div>
            </div>

            <div class="w-full max-w-md space-y-4 shrink-0">
                <div id="file-protocol-warning" class="hidden w-full bg-amber-500/10 border border-amber-500/40 text-amber-200 text-[11px] leading-relaxed rounded-2xl p-4 flex gap-2.5">
                    <i class="fa-solid fa-triangle-exclamation mt-0.5 shrink-0"></i>
                    <span id="file-protocol-warning-text"></span>
                </div>

                <!-- AUTH BOX -->
                <div id="auth-container" class="w-full bg-[#161224]/90 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden glow-border">
            <div class="text-center space-y-2">
                <div class="w-12 h-12 bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 rounded-2xl mx-auto flex items-center justify-center text-xl shadow-inner mb-3">
                    <i class="fa-solid fa-graduation-cap"></i>
                </div>
                <h1 id="txt-welcome" class="text-2xl sm:text-3xl font-black shimmer-text tracking-tight break-words">ආයුබෝවන්!</h1>
                <p id="txt-portal-sub" class="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">MoraMaths Mega O/L Speed Revision Portal වෙත පිවිසෙන්න</p>
            </div>

            <!-- TABS -->
            <div class="flex bg-[#0f0c1a] p-1.5 rounded-2xl border border-slate-800/80 text-xs font-bold shadow-inner">
                <button id="tab-login-btn" onclick="switchTab('login')" class="flex-1 py-3 rounded-xl text-indigo-400 bg-slate-800/90 shadow-md transition-all cursor-pointer whitespace-nowrap">Login</button>
                <button id="tab-register-btn" onclick="switchTab('register')" class="flex-1 py-3 rounded-xl text-slate-400 hover:text-indigo-400 transition-all cursor-pointer whitespace-nowrap">Register</button>
            </div>

            <!-- LOGIN -->
            <form id="login-form" onsubmit="handleLogin(event)" class="space-y-4">
                <div class="space-y-1.5">
                    <label id="lbl-login-id" class="text-[11px] font-bold text-slate-300 uppercase tracking-wider block whitespace-nowrap overflow-hidden text-ellipsis">Username හෝ Email</label>
                    <input type="text" id="login-id" required class="w-full bg-[#0f0c1a] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500 transition shadow-inner" placeholder="Enter username/email">
                </div>
                <div class="space-y-1.5">
                    <label id="lbl-login-pass" class="text-[11px] font-bold text-slate-300 uppercase tracking-wider block whitespace-nowrap overflow-hidden text-ellipsis">Password</label>
                    <input type="password" id="login-password" required class="w-full bg-[#0f0c1a] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500 transition shadow-inner" placeholder="••••••••">
                </div>
                <button type="submit" id="btn-login-submit" class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold py-3.5 rounded-xl transition shadow-xl cursor-pointer tracking-wide mt-2 shine-btn">Login Now</button>
            </form>

            <!-- REGISTER -->
            <form id="register-form" onsubmit="handleRegister(event)" class="space-y-3.5 hidden">
                <div class="space-y-1">
                    <label id="lbl-reg-name" class="text-[11px] font-bold text-slate-300 uppercase tracking-wider block whitespace-nowrap overflow-hidden text-ellipsis">සම්පූර්ණ නම</label>
                    <input type="text" id="reg-fullname" required class="w-full bg-[#0f0c1a] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 transition shadow-inner" placeholder="Sithum Munasinghe">
                </div>
                <div class="space-y-1">
                    <label id="lbl-reg-email" class="text-[11px] font-bold text-slate-300 uppercase tracking-wider block whitespace-nowrap overflow-hidden text-ellipsis">විද්‍යුත් තැපෑලය (Email)</label>
                    <input type="email" id="reg-email" required class="w-full bg-[#0f0c1a] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 transition shadow-inner" placeholder="student@example.com">
                </div>
                <div class="space-y-1">
                    <label id="lbl-reg-user" class="text-[11px] font-bold text-slate-300 uppercase tracking-wider block whitespace-nowrap overflow-hidden text-ellipsis">Username එකක්</label>
                    <input type="text" id="reg-username" required class="w-full bg-[#0f0c1a] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 transition shadow-inner" placeholder="sithum24">
                </div>
                <div class="space-y-1">
                    <label id="lbl-reg-pass" class="text-[11px] font-bold text-slate-300 uppercase tracking-wider block whitespace-nowrap overflow-hidden text-ellipsis">මුරපදය (Password)</label>
                    <input type="password" id="reg-password" required class="w-full bg-[#0f0c1a] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 transition shadow-inner" placeholder="••••••••">
                </div>
                <button type="submit" id="btn-reg-submit" class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold py-3 rounded-xl transition shadow-xl cursor-pointer tracking-wide mt-2 shine-btn">Register & Send OTP</button>
            </form>
                </div>
            </div>
        </div>

        <!-- STUDENT DASHBOARD -->
        <div id="student-dashboard" class="hidden w-full max-w-6xl space-y-6">
            <div class="bg-gradient-to-r from-[#181329] via-[#161224] to-[#211736] border border-slate-800/80 rounded-3xl p-6 sm:p-8 text-white shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
                <div id="dashboard-banner-layer" class="absolute inset-0 pointer-events-none"></div>
                <div class="relative flex items-center space-x-5 cursor-pointer hover:bg-white/5 p-4 rounded-2xl transition border border-transparent hover:border-slate-800/80 group z-10 w-full md:w-auto" onclick="openProfileModal()">
                    <div class="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 border border-indigo-400/40 text-yellow-300 rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-105 transition shrink-0" id="student-avatar">S</div>
                    <div class="space-y-1 min-w-0">
                        <h2 class="text-xl sm:text-3xl font-black tracking-tight truncate" id="welcome-student-name">ආයුබෝවන්</h2>
                        <p class="text-xs text-indigo-300 font-semibold flex flex-wrap items-center gap-2">
                            <span id="student-portal-subtitle">O/L Speed Revision Student Portal</span>
                            <span class="text-[9px] bg-indigo-900/60 text-indigo-200 border border-indigo-700/50 px-2 py-0.5 rounded-md whitespace-nowrap"><i class="fa-solid fa-hand-pointer mr-1"></i>View Profile</span>
                        </p>
                    </div>
                </div>
                <div id="student-zoom-box" class="relative bg-[#120f1d]/90 backdrop-blur-md border border-indigo-500/40 p-5 rounded-2xl w-full md:w-80 shadow-2xl z-10"></div>
            </div>

            <!-- QUOTES BANNER -->
            <div class="bg-indigo-950/40 border border-indigo-500/30 p-5 rounded-3xl backdrop-blur-md flex items-center gap-4 shadow-xl">
                <div class="w-10 h-10 rounded-2xl bg-indigo-600/30 border border-indigo-500/50 text-yellow-300 flex items-center justify-center shrink-0 text-sm">
                    <i class="fa-solid fa-quote-left"></i>
                </div>
                <div class="space-y-1 min-w-0">
                    <p id="quote-text" class="text-sm sm:text-base font-bold text-indigo-200 italic break-words leading-relaxed">"Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding."</p>
                    <p id="quote-author" class="text-xs sm:text-sm text-slate-400 font-semibold">— William Paul Thurston</p>
                </div>
            </div>

            <!-- ANALYTICS SECTION -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 bg-[#161224]/90 backdrop-blur-2xl border border-slate-800/80 p-6 rounded-3xl shadow-xl space-y-4">
                    <h3 id="chart-box-title" class="text-sm font-extrabold text-indigo-300 flex items-center gap-2"><i class="fa-solid fa-chart-line"></i> සතිපතා ලකුණු ප්‍රගතිය සහ විස්තරාත්මක විශ්ලේෂණය</h3>
                    <div class="h-64 relative">
                        <canvas id="studentProgressChart"></canvas>
                    </div>
                </div>
                <div class="bg-[#161224]/90 backdrop-blur-2xl border border-slate-800/80 p-6 rounded-3xl shadow-xl space-y-4 flex flex-col justify-between">
                    <div>
                        <h3 id="goals-title" class="text-sm font-extrabold text-indigo-300 flex items-center gap-2 mb-3"><i class="fa-solid fa-bullseye"></i> ඉලක්ක සහ ජයග්‍රහණ</h3>
                        <p id="goals-sub" class="text-xs text-slate-400 mb-4">ඔබේ O/L ගණිතය ඉහළම සාමාර්ථයක් සඳහා සූදානම් වීම.</p>
                        <div class="space-y-3">
                            <div>
                                <div class="flex justify-between text-[11px] font-bold text-slate-300 mb-1">
                                    <span id="label-rev-comp">Revision Completed</span>
                                    <span>40%</span>
                                </div>
                                <div class="w-full bg-[#0f0c1a] h-2 rounded-full overflow-hidden border border-slate-800">
                                    <div class="bg-indigo-600 h-full w-2/5 rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-between text-[11px] font-bold text-slate-300 mb-1">
                                    <span id="label-past-papers">Past Papers Solved</span>
                                    <span>8 / 20</span>
                                </div>
                                <div class="w-full bg-[#0f0c1a] h-2 rounded-full overflow-hidden border border-slate-800">
                                    <div class="bg-emerald-500 h-full w-2/5 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="study-streak-box" class="bg-orange-500/10 border border-orange-500/30 p-3.5 rounded-2xl text-[11px] text-orange-200 flex items-center justify-between">
                        <span><i class="fa-solid fa-fire mr-1.5 text-orange-400"></i><span id="study-streak-text">Study Streak: 1 day</span></span>
                        <span id="study-streak-emoji" class="text-base">🔥</span>
                    </div>
                    <div id="goals-footer-box" class="bg-indigo-600/10 border border-indigo-500/30 p-3.5 rounded-2xl text-[11px] text-indigo-200">
                        <i class="fa-solid fa-circle-info mr-1 text-indigo-400"></i> අමතර ප්‍රශ්න පත්‍ර සහ Model Papers සඳහා පහත සති පරීක්ෂා කරන්න.
                    </div>
                </div>
            </div>

            <!-- MEGA REVISION SCHEDULE GRID -->
            <div class="flex justify-between items-center pt-2">
                <h3 id="sec-schedule-title" class="text-base sm:text-lg font-extrabold text-slate-100 flex items-center gap-2">
                    <i class="fa-solid fa-calendar-days text-indigo-400"></i> සති 16 ක පුනරීක්ෂණ සැලැස්ම (Revision Weeks)
                </h3>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" id="weeks-grid"></div>
        </div>

        <!-- LEADERBOARD SECTION -->
        <div id="leaderboard-section" class="hidden w-full max-w-6xl space-y-6">
            <div class="bg-[#161224]/90 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
                <div class="flex items-center justify-between border-b border-slate-800 pb-4">
                    <h2 class="text-lg font-black text-white flex items-center gap-2"><i class="fa-solid fa-trophy text-yellow-400"></i> <span id="leaderboard-title">Quiz Leaderboard</span></h2>
                    <button onclick="toggleLeaderboardView()" class="bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-bold px-3 py-1.5 rounded-xl cursor-pointer transition"><i class="fa-solid fa-arrow-left mr-1"></i> <span id="leaderboard-back">Back</span></button>
                </div>
                <div id="leaderboard-list" class="space-y-2.5"></div>
                <p id="leaderboard-empty" class="hidden text-center text-xs text-slate-500 py-8">No quiz attempts yet — be the first!</p>
            </div>
        </div>

        <!-- MATH GAME SECTION (16-Level O/L Syllabus Game) -->
        <div id="game-section" class="hidden w-full max-w-6xl space-y-6">
            <div class="bg-[#161224]/90 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
                <div class="flex items-center justify-between border-b border-slate-800 pb-4 gap-3">
                    <h2 class="text-lg font-black text-white flex items-center gap-2"><i class="fa-solid fa-gamepad text-emerald-400"></i> <span id="game-title">O/L Maths Level Game — 16 Levels</span></h2>
                    <button onclick="toggleGameView()" class="bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-bold px-3 py-1.5 rounded-xl cursor-pointer transition"><i class="fa-solid fa-arrow-left mr-1"></i> <span id="game-back">Back</span></button>
                </div>
                <p id="game-sub" class="text-xs text-slate-400 -mt-2">සිංහල මාධ්‍යයෙන් O/L ගණිත විෂය නිර්දේශයට අනුව සකසන ලද මට්ටම් 16ක ක්‍රීඩාවකි. එක් එක් මට්ටම සමත් වී ඊළඟ මට්ටම අගුළු හරින්න!</p>

                <!-- LEVEL SELECT GRID -->
                <div id="game-levels-grid" class="grid grid-cols-2 sm:grid-cols-4 gap-3"></div>

                <!-- GAME PLAY AREA -->
                <div id="game-play-area" class="hidden space-y-5">
                    <div class="flex items-center justify-between text-[11px] sm:text-xs font-bold text-slate-300">
                        <span id="game-level-label">Level 1</span>
                        <span id="game-progress-label">ප්‍රශ්නය 1/3</span>
                        <span id="game-score-label" class="text-emerald-400">ලකුණු: 0</span>
                    </div>
                    <div class="w-full bg-[#0f0c1a] h-1.5 rounded-full overflow-hidden border border-slate-800">
                        <div id="game-progress-bar" class="bg-emerald-500 h-full rounded-full transition-all" style="width:0%"></div>
                    </div>
                    <div class="bg-indigo-600/10 border border-indigo-500/30 rounded-2xl px-5 py-5">
                        <p id="game-question-text" class="text-sm sm:text-base font-bold text-indigo-100"></p>
                    </div>
                    <div id="game-options" class="space-y-3"></div>
                    <div id="game-next-wrap" class="hidden">
                        <button onclick="nextGameQuestion()" id="game-next-btn" class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold py-3 rounded-xl transition shadow-xl cursor-pointer">ඊළඟ ප්‍රශ්නය →</button>
                    </div>
                </div>

                <!-- GAME RESULT AREA -->
                <div id="game-result-area" class="hidden text-center space-y-4 py-6">
                    <div id="game-result-icon" class="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-2xl"></div>
                    <h3 id="game-result-title" class="text-lg font-black text-white"></h3>
                    <p id="game-result-score" class="text-sm text-slate-300"></p>
                    <div class="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                        <button onclick="retryGameLevel()" class="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-5 py-3 rounded-xl transition cursor-pointer"><i class="fa-solid fa-rotate-right mr-1.5"></i> නැවත උත්සාහ කරන්න</button>
                        <button onclick="goToNextGameLevel()" id="game-next-level-btn" class="hidden bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-3 rounded-xl transition cursor-pointer"><i class="fa-solid fa-unlock mr-1.5"></i> ඊළඟ මට්ටමට යන්න</button>
                        <button onclick="backToGameLevels()" class="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-5 py-3 rounded-xl transition cursor-pointer"><i class="fa-solid fa-th-large mr-1.5"></i> මට්ටම් ලැයිස්තුවට</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- ADMIN PANEL -->
        <div id="admin-panel" class="hidden w-full max-w-6xl space-y-6">
            <div class="bg-[#161224]/90 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-6 sm:p-8 text-white shadow-2xl space-y-6">
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                    <div>
                        <h2 class="text-xl font-black flex items-center gap-2"><i class="fa-solid fa-shield-halved text-indigo-400"></i> MoraMaths Admin Control Center</h2>
                        <p class="text-xs text-slate-400 mt-1">සති 16 ක සම්පූර්ණ ප්ලෑන් එක, පාඩම්, PDFs සහ Zoom විස්තර පාලනය කිරීම</p>
                    </div>
                    <span id="admin-role-badge" class="bg-indigo-600/20 text-indigo-400 text-xs font-extrabold px-3 py-1.5 rounded-xl border border-indigo-500/30 whitespace-nowrap">Admin</span>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="bg-[#0f0c1a] border border-slate-800 p-5 rounded-2xl space-y-4 shadow-inner">
                        <h3 class="text-xs font-extrabold text-indigo-300 flex items-center gap-2"><i class="fa-solid fa-video"></i> Zoom Live Class විස්තර</h3>
                        <div class="space-y-3">
                            <div>
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Zoom Meeting Link</label>
                                <input type="text" id="admin-zoom-link" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white mt-1 focus:border-indigo-500 focus:outline-none transition">
                            </div>
                            <div>
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Meeting ID</label>
                                <input type="text" id="admin-zoom-id" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white mt-1 focus:border-indigo-500 focus:outline-none transition">
                            </div>
                            <div>
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Password</label>
                                <input type="text" id="admin-zoom-pass" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white mt-1 focus:border-indigo-500 focus:outline-none transition">
                            </div>
                            <button onclick="saveZoomDetails()" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 rounded-xl transition cursor-pointer shadow-lg mt-2">Update Zoom</button>
                        </div>
                    </div>

                    <div class="lg:col-span-2 space-y-6">
                        <div class="bg-[#0f0c1a] border border-slate-800 p-5 rounded-2xl space-y-4 shadow-inner">
                            <h3 class="text-xs font-extrabold text-indigo-300 flex items-center gap-2"><i class="fa-solid fa-book-medical"></i> සතියකට අලුත් පාඩමක් හෝ PDF එකක් එක් කරන්න</h3>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">අදාළ සතිය තෝරන්න</label>
                                    <select id="admin-target-week" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white mt-1 focus:border-indigo-500 focus:outline-none transition"></select>
                                </div>
                                <div>
                                    <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">පාඩමේ නම</label>
                                    <input type="text" id="admin-lesson-title" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white mt-1 focus:border-indigo-500 focus:outline-none transition" placeholder="උදා: ත්‍රිකෝණමිතිය">
                                </div>
                                <div>
                                    <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">PDF / Tutorial Link</label>
                                    <input type="text" id="admin-pdf-link" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white mt-1 focus:border-indigo-500 focus:outline-none transition" placeholder="Google Drive Link">
                                    <label class="mt-1.5 flex items-center gap-1.5 text-[10px] font-bold text-indigo-300 hover:text-indigo-200 cursor-pointer transition w-fit">
                                        <i class="fa-solid fa-upload"></i> <span id="admin-pdf-upload-label">PDF file එකක් upload කරන්න (optional)</span>
                                        <input type="file" accept="application/pdf" class="hidden" onchange="handlePdfFileSelect(this, 'admin-pdf-link', 'admin-pdf-upload-label')">
                                    </label>
                                </div>
                                <div>
                                    <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Activities / Quiz Link</label>
                                    <input type="text" id="admin-activity-link" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white mt-1 focus:border-indigo-500 focus:outline-none transition" placeholder="Online Quiz Link">
                                </div>
                            </div>
                            <div class="space-y-1">
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">පාඩම HTML / UI Code (Full-Screen Viewer) — ඕනෑනම් පමණයි</label>
                                <textarea id="admin-lesson-code" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white mt-1 focus:border-indigo-500 focus:outline-none transition h-20" placeholder="Paste HTML for a full-screen lesson viewer (optional)..."></textarea>
                            </div>
                            <button onclick="addLessonToWeek()" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-3 rounded-xl transition cursor-pointer shadow-lg mt-2">පාඩම සතියට එකතු කරන්න</button>
                        </div>

                        <!-- ANNOUNCEMENT -->
                        <div class="bg-[#0f0c1a] border border-slate-800 p-5 rounded-2xl space-y-4 shadow-inner">
                            <h3 class="text-xs font-extrabold text-indigo-300 flex items-center gap-2"><i class="fa-solid fa-bullhorn"></i> සිසුන් සියලුදෙනාට Notification එකක් යවන්න</h3>
                            <input type="text" id="admin-notif-text" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500 focus:outline-none transition" placeholder="උදා: New lesson added to Week 3!">
                            <button onclick="sendAdminNotification()" class="w-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold py-3 rounded-xl transition cursor-pointer shadow-lg"><i class="fa-solid fa-paper-plane mr-1"></i> Send Announcement</button>
                        </div>
                    </div>
                </div>

                <!-- SITE APPEARANCE (Master Admin only) -->
                <div class="master-admin-only hidden border-t border-slate-800 pt-6 space-y-4">
                    <h3 class="text-xs font-extrabold text-indigo-300 flex items-center gap-2"><i class="fa-solid fa-image"></i> අඩවියේ පින්තූර කළමනාකරණය (Site Appearance) <span class="text-[9px] bg-yellow-500/15 text-yellow-300 border border-yellow-500/30 px-2 py-0.5 rounded-md">Master Admin Only</span></h3>
                    <div class="bg-[#0f0c1a] border border-slate-800 p-5 rounded-2xl space-y-4 shadow-inner">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="space-y-1">
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Login Screen Hero Image URL</label>
                                <input type="text" id="admin-hero-image" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500 focus:outline-none transition" placeholder="හිස්ව තියන්න default illustration එකට">
                            </div>
                            <div class="space-y-1">
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Dashboard Banner Image URL</label>
                                <input type="text" id="admin-dashboard-banner" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500 focus:outline-none transition" placeholder="හිස්ව තියන්න default pattern එකට">
                            </div>
                        </div>
                        <button onclick="saveSiteAppearance()" class="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-6 py-3 rounded-xl transition cursor-pointer shadow-lg"><i class="fa-solid fa-floppy-disk mr-1"></i> Save Appearance</button>
                    </div>
                </div>

                <!-- ADMIN ACCOUNTS (Master Admin only) -->
                <div class="master-admin-only hidden border-t border-slate-800 pt-6 space-y-4">
                    <h3 class="text-xs font-extrabold text-indigo-300 flex items-center gap-2"><i class="fa-solid fa-user-shield"></i> Admin ගිණුම් කළමනාකරණය <span class="text-[9px] bg-yellow-500/15 text-yellow-300 border border-yellow-500/30 px-2 py-0.5 rounded-md">Master Admin Only</span></h3>
                    <div class="bg-[#0f0c1a] border border-slate-800 p-5 rounded-2xl space-y-4 shadow-inner">
                        <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
                            <input type="text" id="new-admin-name" placeholder="Full Name" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500 focus:outline-none transition">
                            <input type="text" id="new-admin-username" placeholder="Username" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500 focus:outline-none transition">
                            <input type="text" id="new-admin-password" placeholder="Password" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500 focus:outline-none transition">
                            <button onclick="createAdminAccount()" class="w-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold py-2.5 rounded-xl transition cursor-pointer shadow-lg"><i class="fa-solid fa-user-plus mr-1"></i> Add Admin</button>
                        </div>
                        <div id="admin-accounts-list" class="space-y-2 pt-2"></div>
                    </div>
                </div>

                <!-- BACKUP & RESTORE (Master Admin only) -->
                <div class="master-admin-only hidden border-t border-slate-800 pt-6 space-y-4">
                    <h3 class="text-xs font-extrabold text-indigo-300 flex items-center gap-2"><i class="fa-solid fa-database"></i> Backup &amp; Restore <span class="text-[9px] bg-yellow-500/15 text-yellow-300 border border-yellow-500/30 px-2 py-0.5 rounded-md">Master Admin Only</span></h3>
                    <div class="bg-[#0f0c1a] border border-slate-800 p-5 rounded-2xl space-y-3 shadow-inner">
                        <p class="text-[11px] text-slate-400 leading-relaxed">සම්පූර්ණ site data (users, weeks, quizzes, notifications, appearance) JSON file එකක් විදිහට download කරගන්න, හෝ backup එකකින් restore කරන්න.</p>
                        <div class="flex flex-col sm:flex-row gap-3">
                            <button onclick="exportSiteData()" class="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 rounded-xl transition cursor-pointer shadow-lg"><i class="fa-solid fa-download mr-1.5"></i> Export Backup (JSON)</button>
                            <label class="flex-1 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-3 rounded-xl transition cursor-pointer shadow-lg text-center">
                                <i class="fa-solid fa-upload mr-1.5"></i> Restore from Backup
                                <input type="file" accept="application/json" class="hidden" onchange="importSiteData(this)">
                            </label>
                        </div>
                    </div>
                </div>

                <!-- WEEKS & LESSONS MANAGER -->
                <div class="border-t border-slate-800 pt-6 space-y-4">
                    <h3 class="text-xs font-extrabold text-indigo-300 flex items-center gap-2"><i class="fa-solid fa-layer-group"></i> සති සහ පාඩම් කළමනාකරණය (Manage Weeks &amp; Lessons)</h3>
                    <div id="admin-weeks-manager" class="grid grid-cols-1 lg:grid-cols-2 gap-4"></div>
                </div>

                <!-- QUIZ BUILDER -->
                <div class="border-t border-slate-800 pt-6 space-y-4">
                    <h3 class="text-xs font-extrabold text-indigo-300 flex items-center gap-2"><i class="fa-solid fa-circle-question"></i> ප්‍රශ්නාවලි නිර්මාණය (Quiz Builder)</h3>
                    <div class="bg-[#0f0c1a] border border-slate-800 p-5 rounded-2xl space-y-4 shadow-inner">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">සතිය තෝරන්න</label>
                                <select id="quiz-target-week" onchange="populateQuizLessonSelect()" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white mt-1 focus:border-indigo-500 focus:outline-none transition"></select>
                            </div>
                            <div>
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">පාඩම තෝරන්න</label>
                                <select id="quiz-target-lesson" onchange="renderQuizQuestionsList()" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white mt-1 focus:border-indigo-500 focus:outline-none transition"></select>
                            </div>
                        </div>
                        <div class="space-y-2.5">
                            <input type="text" id="quiz-q-text" placeholder="ප්‍රශ්නය (Question)" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500 focus:outline-none transition">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                <input type="text" id="quiz-opt-0" placeholder="Option A" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-indigo-500 focus:outline-none transition">
                                <input type="text" id="quiz-opt-1" placeholder="Option B" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-indigo-500 focus:outline-none transition">
                                <input type="text" id="quiz-opt-2" placeholder="Option C" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-indigo-500 focus:outline-none transition">
                                <input type="text" id="quiz-opt-3" placeholder="Option D" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:border-indigo-500 focus:outline-none transition">
                            </div>
                            <div>
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">නිවැරදි පිළිතුර (Correct Option)</label>
                                <select id="quiz-correct-idx" class="w-full bg-[#161224] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500 focus:outline-none transition">
                                    <option value="0">Option A</option>
                                    <option value="1">Option B</option>
                                    <option value="2">Option C</option>
                                    <option value="3">Option D</option>
                                </select>
                            </div>
                            <button onclick="addQuizQuestion()" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-3 rounded-xl transition cursor-pointer shadow-lg">ප්‍රශ්නය එකතු කරන්න (Add Question)</button>
                        </div>
                        <div id="quiz-questions-list" class="space-y-2 pt-2"></div>
                    </div>
                </div>

                <!-- USERS MANAGER -->
                <div class="border-t border-slate-800 pt-6 space-y-4">
                    <h3 class="text-xs font-extrabold text-indigo-300 flex items-center gap-2"><i class="fa-solid fa-users"></i> ලියාපදිංචි සිසුන් (Registered Students) — <span id="admin-user-count">0</span></h3>
                    <div id="admin-users-list" class="space-y-2"></div>
                </div>
            </div>
        </div>

    </main>

    <!-- PROFILE MODAL -->
    <div id="profile-modal" class="hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
        <div class="bg-[#161224] border border-slate-800 p-6 sm:p-8 rounded-3xl w-full max-w-sm space-y-5 shadow-2xl relative">
            <button onclick="closeProfileModal()" class="absolute top-4 right-4 w-8 h-8 rounded-xl bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-xs cursor-pointer transition"><i class="fa-solid fa-xmark"></i></button>
            <div class="text-center space-y-2.5 mt-2">
                <div class="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 border border-indigo-400/40 text-yellow-300 rounded-2xl mx-auto flex items-center justify-center text-3xl font-black shadow-lg" id="modal-profile-avatar">S</div>
                <h3 id="modal-profile-name" class="text-lg font-black text-white mt-2 break-words">Name</h3>
                <p id="modal-profile-email" class="text-xs text-slate-400 break-words">email@example.com</p>
            </div>
            <div class="bg-[#0f0c1a] border border-slate-800 rounded-2xl p-4 space-y-3.5 shadow-inner">
                <div class="flex justify-between items-center border-b border-slate-800/80 pb-2.5 gap-2">
                    <span class="text-[10px] font-bold text-slate-400 uppercase whitespace-nowrap"><i class="fa-regular fa-user mr-1.5 text-indigo-400"></i> Username</span>
                    <span id="modal-profile-user" class="text-xs font-bold text-slate-200 truncate">username</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-[10px] font-bold text-slate-400 uppercase whitespace-nowrap"><i class="fa-solid fa-user-graduate mr-1.5 text-emerald-400"></i> Role</span>
                    <span class="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md whitespace-nowrap">Student</span>
                </div>
            </div>
        </div>
    </div>

    <!-- OTP MODAL -->
    <div id="otp-modal" class="hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
        <div class="bg-[#161224] border border-slate-800 p-6 sm:p-8 rounded-3xl w-full max-w-sm space-y-4 text-center shadow-2xl relative">
            <button onclick="closeOtpModal()" class="absolute top-4 right-4 w-8 h-8 rounded-xl bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-xs cursor-pointer transition"><i class="fa-solid fa-xmark"></i></button>
            <h3 id="otp-title" class="text-sm font-black text-white">විද්‍යුත් තැපෑලය සත්‍යාපනය (OTP Verification)</h3>
            <p id="otp-desc" class="text-xs text-slate-400 leading-relaxed">ඔබේ Email ලිපිනයට ලැබුණු OTP අංකය මෙහි ඇතුළත් කරන්න.</p>
            <input type="text" id="otp-input" inputmode="numeric" maxlength="6" class="w-full bg-[#0f0c1a] border border-slate-800 rounded-2xl px-4 py-3 text-center text-xl tracking-widest text-white font-black focus:border-indigo-500 focus:outline-none shadow-inner" placeholder="123456">
            <button onclick="verifyAndRegister()" id="otp-btn-text" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 rounded-xl transition shadow-lg cursor-pointer">Verify & Register</button>
            <button onclick="resendOtp()" id="otp-resend-btn" class="text-[11px] font-bold text-indigo-400 hover:text-indigo-300 transition cursor-pointer"><i class="fa-solid fa-rotate-right mr-1"></i> <span id="txt-otp-resend">Resend OTP</span></button>
        </div>
    </div>

    <!-- WEEK LESSONS MODAL -->
    <div id="week-modal" class="hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
        <div class="bg-[#161224] border border-slate-800 p-6 sm:p-7 rounded-3xl w-full max-w-lg space-y-5 shadow-2xl relative">
            <div class="flex justify-between items-center border-b border-slate-800 pb-3.5 gap-2">
                <h3 id="modal-week-title" class="text-sm font-black text-white truncate">Week Lessons</h3>
                <button onclick="closeWeekModal()" class="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-xs cursor-pointer transition shrink-0"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div id="modal-lessons-list" class="space-y-3 max-h-80 overflow-y-auto pr-1"></div>
        </div>
    </div>

    <!-- QUIZ MODAL -->
    <div id="quiz-modal" class="hidden fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
        <div class="bg-[#161224] border border-slate-800 p-6 sm:p-7 rounded-3xl w-full max-w-lg space-y-5 shadow-2xl relative pop-in">
            <div class="flex justify-between items-center border-b border-slate-800 pb-3.5 gap-2">
                <h3 id="quiz-modal-title" class="text-sm font-black text-white truncate">Quiz</h3>
                <button onclick="closeQuizModal()" class="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-xs cursor-pointer transition shrink-0"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div id="quiz-body" class="space-y-5 max-h-[60vh] overflow-y-auto pr-1"></div>
            <div id="quiz-footer" class="flex gap-3">
                <button onclick="submitQuiz()" id="quiz-submit-btn" class="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold py-3 rounded-xl transition shadow-xl cursor-pointer">Submit Answers</button>
            </div>
        </div>
    </div>

    <!-- LESSON EDIT MODAL -->
    <div id="lesson-edit-modal" class="hidden fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
        <div class="bg-[#161224] border border-slate-800 p-6 sm:p-7 rounded-3xl w-full max-w-md space-y-4 shadow-2xl relative pop-in">
            <div class="flex justify-between items-center border-b border-slate-800 pb-3.5 gap-2">
                <h3 class="text-sm font-black text-white">Edit Lesson</h3>
                <button onclick="closeLessonEditModal()" class="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-xs cursor-pointer transition shrink-0"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="space-y-1">
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Lesson Title</label>
                <input type="text" id="edit-lesson-title" class="w-full bg-[#0f0c1a] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white mt-1 focus:border-indigo-500 focus:outline-none transition">
            </div>
            <div class="space-y-1">
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">PDF / Tutorial Link</label>
                <input type="text" id="edit-lesson-pdf" class="w-full bg-[#0f0c1a] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white mt-1 focus:border-indigo-500 focus:outline-none transition">
                <label class="mt-1.5 flex items-center gap-1.5 text-[10px] font-bold text-indigo-300 hover:text-indigo-200 cursor-pointer transition w-fit">
                    <i class="fa-solid fa-upload"></i> <span id="edit-pdf-upload-label">PDF file එකක් upload කරන්න (optional)</span>
                    <input type="file" accept="application/pdf" class="hidden" onchange="handlePdfFileSelect(this, 'edit-lesson-pdf', 'edit-pdf-upload-label')">
                </label>
            </div>
            <div class="space-y-1">
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">පාඩම HTML / UI Code (Full-Screen Viewer)</label>
                <textarea id="edit-lesson-code" class="w-full bg-[#0f0c1a] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white mt-1 focus:border-indigo-500 focus:outline-none transition h-24" placeholder="Paste HTML for a full-screen lesson viewer (optional)..."></textarea>
            </div>
            <button onclick="saveLessonEdit()" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 rounded-xl transition cursor-pointer shadow-lg mt-1">Save Changes</button>
        </div>
    </div>

    <!-- LESSON CODE VIEWER MODAL (Full-Screen) -->
    <div id="lesson-code-modal" class="hidden fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
        <div id="lesson-modal-box" class="bg-[#161224] border border-slate-800 p-4 sm:p-6 rounded-3xl w-[98vw] h-[95vh] max-w-none flex flex-col shadow-2xl relative pop-in transition-all duration-300">
            <div class="flex justify-between items-center border-b border-slate-800 pb-3 mb-3 gap-2">
                <h3 id="lesson-code-title" class="text-sm sm:text-base font-black text-white truncate">Lesson Viewer</h3>
                <div class="flex items-center gap-2">
                    <button onclick="toggleModalExpand()" class="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-xs cursor-pointer transition shrink-0" title="Full Screen Toggle"><i class="fa-solid fa-expand" id="expand-icon"></i></button>
                    <button onclick="closeLessonCodeModal()" class="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-xs cursor-pointer transition shrink-0"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
            <div id="lesson-code-content" class="flex-grow overflow-y-auto pr-2 text-slate-200 text-sm w-full bg-[#0f0c1a] rounded-2xl p-5 border border-slate-800 shadow-inner">
            </div>
        </div>
    </div>

    <!-- TOAST CONTAINER -->
    <div id="toast-container" class="fixed bottom-5 right-5 z-[100] flex flex-col gap-2.5 items-end"></div>

    <!-- FOOTER -->
    <footer class="relative z-10 text-center py-5 text-xs text-slate-500 border-t border-slate-900 bg-[#0f0c1a]/50 px-4">
        © 2026 MoraMaths Mega Edition by Sithum Munasinghe. All Rights Reserved.
    </footer>

    <!-- App JavaScript Logic & Mega Data Payload to ensure 1MB+ capacity -->
    <script>
        /* ============ EMAILJS CONFIG (Real OTP Email Sending) ============
           Service, Template and Public Key taken from your EmailJS dashboard.
           NOTE: Open your "Password Reset" template in EmailJS and make sure
           it contains at least these merge fields so the OTP actually shows
           up in the email body: {{passcode}} (the 6-digit code) and
           {{to_email}} / {{to_name}}. This code sends several common aliases
           (passcode, otp, otp_code, code) together so it will work no matter
           which variable name your template uses. */
        const EMAILJS_PUBLIC_KEY  = "yAXUIje-0rBrWtcBG";
        const EMAILJS_SERVICE_ID  = "service_yp68x8i";
        const EMAILJS_TEMPLATE_ID = "template_hww95dg";
        if (window.emailjs) { emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY }); }

        /* ============ CLOUD SYNC (Firebase Firestore) ============
           Keeps the same account's data (users, weeks/lessons, quiz scores,
           zoom details, notifications, site assets) consistent across every
           device/browser the account is opened on. Without this, each device
           only sees its own localStorage copy. */
        const firebaseConfig = {
            apiKey: "AIzaSyB16uygXIzyFXF1aWHspZBeRzfi6wgRx90",
            authDomain: "sithum-munasinghe.firebaseapp.com",
            projectId: "sithum-munasinghe",
            storageBucket: "sithum-munasinghe.firebasestorage.app",
            messagingSenderId: "142284803117",
            appId: "1:142284803117:web:b4d5a1bbddd3a2090d3ca4",
            measurementId: "G-8TCT87WJJ6"
        };

        let firebaseReady = false;
        let suppressCloudPush = false; // true while we're applying an incoming cloud update, so we don't immediately re-push it
        let appInitialized = false;    // true once initApp() has run at least once (so early snapshots don't call renderers too soon)
        let cloudDocRef = null;
        const CLOUD_SYNC_TIMEOUT_MS = 4000; // don't let a slow/offline connection block the app from loading

        function initFirebaseSync() {
            try {
                if (!firebaseConfig.apiKey || firebaseConfig.apiKey.includes('YOUR_')) {
                    console.warn('Firebase config not set — running in local-only (this device only) mode.');
                    return;
                }
                firebase.initializeApp(firebaseConfig);
                window.db = firebase.firestore();
                cloudDocRef = db.collection('moramaths').doc('sharedState');
                firebaseReady = true;

                cloudDocRef.onSnapshot(doc => {
                    if (!doc.exists) return;
                    applyCloudSnapshot(doc.data());
                }, err => console.warn('Cloud sync listener error:', err));
            } catch (e) {
                console.warn('Firebase init failed — running in local-only (this device only) mode.', e);
                firebaseReady = false;
            }
        }

        function applyCloudSnapshot(data) {
            suppressCloudPush = true;
            if (data.users) { users = data.users; localStorage.setItem('moramaths_users', JSON.stringify(users)); }
            if (data.weeksData) { weeksData = data.weeksData; localStorage.setItem('moramaths_weeks', JSON.stringify(weeksData)); }
            if (data.zoomData) { zoomData = data.zoomData; localStorage.setItem('moramaths_zoom', JSON.stringify(zoomData)); }
            if (data.notifications) { notifications = data.notifications; localStorage.setItem('moramaths_notifications', JSON.stringify(notifications)); }
            if (data.siteAssets) { siteAssets = data.siteAssets; localStorage.setItem('moramaths_site_assets', JSON.stringify(siteAssets)); }
            // Keep the logged-in user's own record (quiz scores, streak, game progress) fresh too,
            // in case it changed from another device.
            if (typeof currentUser !== 'undefined' && currentUser) {
                const freshMe = users.find(u => u.username === currentUser.username);
                if (freshMe) { currentUser = freshMe; localStorage.setItem('moramaths_current_user', JSON.stringify(currentUser)); }
            }
            suppressCloudPush = false;
            if (appInitialized) refreshUIAfterCloudSync();
        }

        function cloudPush() {
            if (!firebaseReady || suppressCloudPush || !cloudDocRef) return;
            cloudDocRef.set({
                users, weeksData, zoomData, notifications, siteAssets,
                updatedAt: Date.now()
            }, { merge: true }).catch(err => console.warn('Cloud sync push failed:', err));
        }

        function refreshUIAfterCloudSync() {
            // Re-render whatever is currently on screen so a change made on another
            // device (e.g. admin adding a lesson) shows up here live, without a refresh.
            if (typeof renderWeeksGrid === 'function') renderWeeksGrid();
            if (typeof currentUser !== 'undefined' && currentUser) {
                if (currentUser.username === 'admin') {
                    if (typeof renderAdminWeeksManager === 'function') renderAdminWeeksManager();
                    if (typeof renderAdminUsersList === 'function') renderAdminUsersList();
                } else {
                    if (typeof setupStudentDashboard === 'function') setupStudentDashboard();
                    if (typeof renderChart === 'function') renderChart();
                }
                if (typeof renderNotifBell === 'function') renderNotifBell();
            }
        }

        /* One-time fetch of the latest cloud data before the app first renders, so the
           very first paint already reflects what other devices have saved — then hands
           off to initApp(). Falls back to whatever is in localStorage if offline/slow. */
        function bootstrapApp() {
            initFirebaseSync();
            if (!firebaseReady || !cloudDocRef) { initApp(); return; }

            let started = false;
            const startOnce = () => {
                if (started) return;
                started = true;
                initApp();
            };

            cloudDocRef.get({ source: 'server' }).then(doc => {
                if (doc.exists) applyCloudSnapshot(doc.data());
                startOnce();
            }).catch(err => {
                console.warn('Initial cloud fetch failed, using local data:', err);
                startOnce();
            });

            setTimeout(startOnce, CLOUD_SYNC_TIMEOUT_MS);
        }

        function generateOtpCode() {
            return String(Math.floor(100000 + Math.random() * 900000));
        }

        /* Sends the OTP email through EmailJS. Returns a Promise that
           resolves on success and rejects (with the EmailJS error) on failure. */
        function sendOtpEmail(toEmail, toName, otpCode) {
            const params = {
                to_email: toEmail,
                email: toEmail,
                to_name: toName,
                name: toName,
                from_name: "MoraMaths Mega Edition",
                passcode: otpCode,
                otp: otpCode,
                otp_code: otpCode,
                code: otpCode,
                time: new Date().toLocaleString()
            };
            return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
        }

        /* Builds a specific, actionable error message for an OTP-send failure.
           The #1 cause in practice: the HTML file was opened directly by double-click
           (address bar shows "file:///C:/...") instead of being served over http(s).
           Browsers send Origin: null for file:// pages, which EmailJS (and most APIs)
           reject — so the request never really reaches Gmail at all. */
        function getOtpFailureMessage(err) {
            let base;
            if (location.protocol === 'file:') {
                base = currentLang === 'si'
                    ? "OTP email එවීම අසාර්ථකයි — meka wenne mē file eka 'file:///...' විදිහට කෙලින්ම browser එකේ open කර ඇති නිසා (double-click කරලා). EmailJS වැඩ කරන්නේ http/https හරහා විවෘත කළ page එකකින් විතරයි. මේක fix කරන්න: (1) VS Code Live Server, hari (2) 'python -m http.server' වගේ local server එකකින් run කරන්න, නැත්නම් (3) Netlify/GitHub Pages වගේ තැනකට host කරන්න."
                    : "Failed to send OTP email — this is almost certainly because the file is open directly as 'file:///...' (double-clicked) instead of being served over http/https. EmailJS only works from a page opened via http(s). Fix: (1) use VS Code's Live Server extension, (2) run a local server e.g. 'python -m http.server', or (3) host it on Netlify/GitHub Pages, then open it from that http(s) URL.";
            } else {
                const status = err && err.status;
                if (status === 400 || status === 422) {
                    base = currentLang === 'si'
                        ? "OTP email එවීම අසාර්ථකයි — Template එකේ 'To Email' field එක {{to_email}} ලෙස set කර ඇත්ද කියලා Content tab එකේ check කරන්න, නැත්නම් Service/Template ID වැරදියි."
                        : "Failed to send OTP email — check the template's 'To Email' field (Content tab) is set to {{to_email}}, or the Service/Template ID is wrong.";
                } else if (status === 403) {
                    base = currentLang === 'si'
                        ? "OTP email එවීම අසාර්ථකයි — EmailJS Account → Security eke 'Allowed origins' whitelist eka mema site domain eka allow karanawada balanna."
                        : "Failed to send OTP email — check EmailJS Account → Security → 'Allowed origins' whitelist and make sure this site's domain is allowed.";
                } else {
                    base = currentLang === 'si'
                        ? "OTP එවීම අසාර්ථකයි! Internet එක සහ EmailJS සැකසුම් පරීක්ෂා කරන්න."
                        : "Failed to send OTP email! Check your connection / EmailJS setup.";
                }
            }
            // Surface EmailJS's own error text directly (avoids needing devtools to debug).
            const detail = err && (err.text || err.message);
            return detail ? `${base}\n(${detail})` : base;
        }

        const megaQuotesDataset = [
            { id: 1, quote: "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.", author: "William Paul Thurston" },
            { id: 2, quote: "Pure mathematics is, in its way, the poetry of logical ideas.", author: "Albert Einstein" },
            { id: 3, quote: "Without mathematics, there's nothing you can do. Everything around you is mathematics. Everything around you is numbers.", author: "Shakuntala Devi" },
            { id: 4, quote: "Logic will get you from A to B. Imagination will take you everywhere.", author: "Albert Einstein" },
            { id: 5, quote: "Mathematics is the queen of the sciences.", author: "Carl Friedrich Gauss" },
            { id: 6, quote: "Do not worry about your difficulties in mathematics; I can assure you mine are still greater.", author: "Albert Einstein" },
            { id: 7, quote: "The essence of mathematics is not to make simple things complicated, but to make complicated things simple.", author: "Stan Gudder" },
            { id: 8, quote: "Mathematics is the most beautiful and most powerful creation of the human spirit.", author: "Stefan Banach" },
            { id: 9, quote: "In mathematics you don't understand things. You just get used to them.", author: "John von Neumann" },
            { id: 10, quote: "Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.", author: "David Hilbert" },
            { id: 11, quote: "Mathematics is the language in which God has written the universe.", author: "Galileo Galilei" },
            { id: 12, quote: "Mathematics possesses not only truth, but supreme beauty.", author: "Bertrand Russell" },
            { id: 13, quote: "There is no branch of mathematics, however abstract, that may not someday be applied to the phenomena of the real world.", author: "Nikolai Lobachevsky" },
            { id: 14, quote: "The study of mathematics is apt to commence in disappointment.", author: "Alfred North Whitehead" },
            { id: 15, quote: "A mathematician is a device for turning coffee into theorems.", author: "Paul Erdős" },
            { id: 16, quote: "God created the integers; all else is the work of man.", author: "Leopold Kronecker" },
            { id: 17, quote: "Mathematics is the music of reason.", author: "James Joseph Sylvester" },
            { id: 18, quote: "It is not enough to have a good mind; the main thing is to use it well.", author: "René Descartes" },
            { id: 19, quote: "Mathematics compares the most diverse phenomena and discovers the secret analogies that unite them.", author: "Joseph Fourier" },
            { id: 20, quote: "A mathematician, like a painter or a poet, is a maker of patterns.", author: "G. H. Hardy" },
            { id: 21, quote: "As far as the laws of mathematics refer to reality, they are not certain.", author: "Albert Einstein" },
            { id: 22, quote: "Obvious is the most dangerous word in mathematics.", author: "Eric Temple Bell" },
            { id: 23, quote: "The essence of mathematics lies in its freedom.", author: "Georg Cantor" },
            { id: 24, quote: "Mathematics is a game played according to certain simple rules with meaningless marks on paper.", author: "David Hilbert" },
            { id: 25, quote: "An equation means nothing to me unless it expresses a thought of God.", author: "Srinivasa Ramanujan" },
            { id: 26, quote: "Wherever there is number, there is beauty.", author: "Proclus" },
            { id: 27, quote: "The only way to learn mathematics is to do mathematics.", author: "Paul Halmos" },
            { id: 28, quote: "Life is good for only two things: discovering mathematics and teaching mathematics.", author: "Siméon Poisson" },
            { id: 29, quote: "Mathematics is the art of giving the same name to different things.", author: "Henri Poincaré" },
            { id: 30, quote: "It is impossible to be a mathematician without being a poet in soul.", author: "Sofia Kovalevskaya" },
            { id: 31, quote: "Mathematics is the gate and key of the sciences.", author: "Roger Bacon" },
            { id: 32, quote: "Mathematics is the science of quantity.", author: "Francis Bacon" },
            { id: 33, quote: "Number theory is the queen of mathematics.", author: "Carl Friedrich Gauss" },
            { id: 34, quote: "Whoever despises the high wisdom of mathematics is nourishing himself on delusion.", author: "Leonardo da Vinci" },
            { id: 35, quote: "To understand God's thoughts, we must study statistics.", author: "Florence Nightingale" },
            { id: 36, quote: "Mathematics is a language plus reasoning; it is like a language plus logic.", author: "Richard Feynman" },
            { id: 37, quote: "There is no royal road to geometry.", author: "Euclid" },
            { id: 38, quote: "There is geometry in the humming of the strings, there is music in the spacing of the spheres.", author: "Pythagoras" },
            { id: 39, quote: "The whole is greater than the sum of its parts.", author: "Aristotle" },
            { id: 40, quote: "Give me a place to stand, and I shall move the earth.", author: "Archimedes" },
            { id: 41, quote: "Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.", author: "Isaac Newton" },
            { id: 42, quote: "The moving power of mathematical invention is not reasoning, but imagination.", author: "Augustus De Morgan" },
            { id: 43, quote: "The knowledge of which geometry aims is the knowledge of the eternal.", author: "Plato" },
            { id: 44, quote: "The mathematical sciences particularly exhibit order, symmetry, and limitation; and these are the greatest forms of the beautiful.", author: "Aristotle" },
            { id: 45, quote: "Numbers rule the universe.", author: "Pythagoras" },
            { id: 46, quote: "The advancement and perfection of mathematics are intimately connected with the prosperity of the State.", author: "Napoleon Bonaparte" },
            { id: 47, quote: "The Analytical Engine has no pretensions whatever to originate anything.", author: "Ada Lovelace" },
            { id: 48, quote: "Errors using inadequate data are much less than those using no data at all.", author: "Charles Babbage" },
            { id: 49, quote: "If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.", author: "John von Neumann" },
            { id: 50, quote: "Mathematics consists of proving the most obvious thing in the least obvious way.", author: "George Pólya" },
            { id: 51, quote: "The eternal silence of these infinite spaces frightens me.", author: "Blaise Pascal" },
            { id: 52, quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.", author: "Alan Turing" },
            { id: 53, quote: "Each problem that I solved became a rule which served afterwards to solve other problems.", author: "René Descartes" },
            { id: 54, quote: "Mathematicians have tried in vain to this day to discover some order in the sequence of prime numbers.", author: "Leonhard Euler" },
            { id: 55, quote: "It is not knowledge, but the act of learning, which grants the greatest enjoyment.", author: "Carl Friedrich Gauss" },
            { id: 56, quote: "Science is built up of facts, as a house is built of stones; but an accumulation of facts is no more a science than a heap of stones is a house.", author: "Henri Poincaré" },
            { id: 57, quote: "Pure mathematics is the class of all propositions of the form 'p implies q'.", author: "Bertrand Russell" },
            { id: 58, quote: "We must know. We will know.", author: "David Hilbert" },
            { id: 59, quote: "Why are numbers beautiful? It's like asking why is Beethoven's Ninth Symphony beautiful.", author: "Paul Erdős" },
            { id: 60, quote: "God does not care about our mathematical difficulties. He integrates empirically.", author: "Albert Einstein" }
        ];

        /* ============ 16-LEVEL O/L MATHS SYLLABUS GAME DATASET ============ */
        const mathGameLevels = [
            { titleSi: "සංඛ්‍යා පද්ධතිය", titleEn: "Number System", icon: "fa-hashtag", questions: [
                { q: "√49 හි අගය කුමක්ද?", options: ["6", "7", "8", "5"], correct: 1 },
                { q: "-8 සහ 5 එකතු කළහොත් ලැබෙන අගය කුමක්ද?", options: ["-13", "-3", "3", "13"], correct: 1 },
                { q: "පහත සංඛ්‍යා අතරින් අභාජ්‍ය සංඛ්‍යාව කුමක්ද?", options: ["9", "15", "17", "21"], correct: 2 }
            ]},
            { titleSi: "භාග සහ දශම", titleEn: "Fractions & Decimals", icon: "fa-divide", questions: [
                { q: "1/2 + 1/4 = ?", options: ["1/6", "3/4", "2/6", "1/8"], correct: 1 },
                { q: "0.75 ක් භාගයක් ලෙස ලිවීමේදී ලැබෙන්නේ කුමක්ද?", options: ["3/4", "7/5", "3/5", "7/4"], correct: 0 },
                { q: "2/5 ක් ප්‍රතිශතයක් ලෙස ලිවීමේදී ලැබෙන්නේ කුමක්ද?", options: ["20%", "40%", "25%", "50%"], correct: 1 }
            ]},
            { titleSi: "ප්‍රතිශත", titleEn: "Percentages", icon: "fa-percent", questions: [
                { q: "200 ක 15% කුමක්ද?", options: ["15", "20", "30", "45"], correct: 2 },
                { q: "40 සංඛ්‍යාවෙන් 25% කුමක්ද?", options: ["8", "10", "12", "15"], correct: 1 },
                { q: "භාණ්ඩයක මිල රු.500 සිට රු.600 දක්වා වැඩි වුවහොත් වර්ධන ප්‍රතිශතය කීයද?", options: ["10%", "15%", "20%", "25%"], correct: 2 }
            ]},
            { titleSi: "සරල සමීකරණ", titleEn: "Simple Equations", icon: "fa-equals", questions: [
                { q: "2x + 5 = 15 නම්, x හි අගය කොපමණද?", options: ["4", "5", "6", "7"], correct: 1 },
                { q: "3(x - 2) = 12 නම්, x = ?", options: ["4", "6", "8", "10"], correct: 1 },
                { q: "x/4 = 7 නම්, x = ?", options: ["11", "21", "28", "35"], correct: 2 }
            ]},
            { titleSi: "වීජීය ප්‍රකාශන හා සාධකකරණය", titleEn: "Algebra & Factorization", icon: "fa-superscript", questions: [
                { q: "(x + 3)(x + 2) දිග හැරුවහොත් ලැබෙන්නේ කුමක්ද?", options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 5x + 5", "x² + x + 6"], correct: 0 },
                { q: "x² - 9 සාධකකරණය කළහොත් ලැබෙන්නේ කුමක්ද?", options: ["(x-3)(x+3)", "(x-9)(x+1)", "(x+9)(x-1)", "(x-3)²"], correct: 0 },
                { q: "3x + 6 හි පොදු සාධකය ගත් විට ලැබෙන්නේ කුමක්ද?", options: ["3(x+2)", "3(x+6)", "x(3+6)", "6(x+3)"], correct: 0 }
            ]},
            { titleSi: "දර්ශක", titleEn: "Indices", icon: "fa-superscript", questions: [
                { q: "2³ × 2² = ?", options: ["2⁵", "2⁶", "4⁵", "2¹"], correct: 0 },
                { q: "(x²)³ = ?", options: ["x⁵", "x⁶", "x⁸", "x⁹"], correct: 1 },
                { q: "5⁰ = ?", options: ["0", "1", "5", "නිර්වචනය නොකළ"], correct: 1 }
            ]},
            { titleSi: "අනුපාත හා සමානුපාත", titleEn: "Ratios & Proportions", icon: "fa-scale-balanced", questions: [
                { q: "2:3 අනුපාතයේ මුළු කොටස් 20 නම්, විශාල කොටස කීයද?", options: ["8", "10", "12", "15"], correct: 2 },
                { q: "a:b = 3:4 සහ a = 9 නම්, b = ?", options: ["10", "12", "14", "16"], correct: 1 },
                { q: "පුද්ගලයන් 4කට වැඩක් නිම කිරීමට පැය 6ක් ගතවේ නම්, පුද්ගලයන් 8කට එම වැඩය නිම කිරීමට ගතවන කාලය කීයද?", options: ["2 පැය", "3 පැය", "4 පැය", "12 පැය"], correct: 1 }
            ]},
            { titleSi: "සරල හා සංයුක්ත පොලිය", titleEn: "Simple & Compound Interest", icon: "fa-sack-dollar", questions: [
                { q: "රු.1000ක් 10% වාර්ෂික සරල පොලියට වසර 2ක් තැන්පත් කළහොත් ලැබෙන පොලිය කීයද?", options: ["රු.100", "රු.150", "රු.200", "රු.250"], correct: 2 },
                { q: "සරල පොලී සූත්‍රය කුමක්ද? (I=පොලිය, P=මුල් මුදල, R=පොලී අනුපාතය, T=කාලය)", options: ["I = PRT/100", "I = P(1+R)ᵀ", "I = PR/T", "I = P + RT"], correct: 0 },
                { q: "රු.2000ක් 5% වාර්ෂික සරල පොලියට වසරක් තැන්පත් කළහොත් ලැබෙන පොලිය කීයද?", options: ["රු.50", "රු.100", "රු.150", "රු.200"], correct: 1 }
            ]},
            { titleSi: "කුලක", titleEn: "Sets", icon: "fa-circle-nodes", questions: [
                { q: "A = {1,2,3}, B = {2,3,4} නම්, A∩B = ?", options: ["{1,2,3,4}", "{2,3}", "{1,4}", "{ }"], correct: 1 },
                { q: "A = {1,2,3}, B = {2,3,4} නම්, A∪B = ?", options: ["{1,2,3,4}", "{2,3}", "{1,2,3}", "{2,3,4}"], correct: 0 },
                { q: "හිස් කුලකය සංකේතවත් කරන්නේ කුමක් ලෙසද?", options: ["{0}", "∅", "{∅}", "N"], correct: 1 }
            ]},
            { titleSi: "කෝණ හා ත්‍රිකෝණ", titleEn: "Angles & Triangles", icon: "fa-draw-polygon", questions: [
                { q: "ත්‍රිකෝණයක අභ්‍යන්තර කෝණ තුනේ එකතුව කීයද?", options: ["90°", "180°", "270°", "360°"], correct: 1 },
                { q: "සමපාද ත්‍රිකෝණයක එක් කෝණයක් කීයද?", options: ["45°", "60°", "90°", "30°"], correct: 1 },
                { q: "ත්‍රිකෝණයක කෝණ 50° සහ 60° නම්, තුන්වන කෝණය කීයද?", options: ["60°", "70°", "80°", "90°"], correct: 1 }
            ]},
            { titleSi: "පයිතගරස් ප්‍රමේයය", titleEn: "Pythagoras' Theorem", icon: "fa-shapes", questions: [
                { q: "සෘජුකෝණී ත්‍රිකෝණයක පාද 3cm සහ 4cm නම්, කර්ණය කීයද?", options: ["5cm", "6cm", "7cm", "8cm"], correct: 0 },
                { q: "කර්ණය 13cm, එක් පාදයක් 5cm නම්, අනෙක් පාදය කීයද?", options: ["10cm", "11cm", "12cm", "14cm"], correct: 2 },
                { q: "පාද 6cm සහ 8cm ඇති සෘජුකෝණී ත්‍රිකෝණයක කර්ණය කීයද?", options: ["9cm", "10cm", "11cm", "12cm"], correct: 1 }
            ]},
            { titleSi: "වර්ගඵලය හා පරිමිතිය", titleEn: "Area & Perimeter", icon: "fa-vector-square", questions: [
                { q: "දිග 8cm පළල 5cm සෘජාස්‍රයක වර්ගඵලය කීයද?", options: ["13cm²", "26cm²", "40cm²", "45cm²"], correct: 2 },
                { q: "පාද 6cm ඇති සමචතුරස්‍රයක පරිමිතිය කීයද?", options: ["12cm", "18cm", "24cm", "36cm"], correct: 2 },
                { q: "අරය 7cm වෘත්තයක වර්ගඵලය කීයද? (π=22/7 ලෙස ගන්න)", options: ["132cm²", "154cm²", "144cm²", "164cm²"], correct: 1 }
            ]},
            { titleSi: "පරිමාව (ත්‍රිමාන රූප)", titleEn: "Volume (3D Shapes)", icon: "fa-cube", questions: [
                { q: "පාද 4cm ඇති ඝනකයක පරිමාව කීයද?", options: ["16cm³", "32cm³", "48cm³", "64cm³"], correct: 3 },
                { q: "දිග 5cm, පළල 4cm, උස 3cm ඝනාකාරයක පරිමාව කීයද?", options: ["12cm³", "60cm³", "45cm³", "20cm³"], correct: 1 },
                { q: "අරය 3cm, උස 7cm සිලින්ඩරයක පරිමාව කීයද? (π≈22/7)", options: ["132cm³", "176cm³", "198cm³", "231cm³"], correct: 2 }
            ]},
            { titleSi: "ත්‍රිකෝණමිතිය", titleEn: "Trigonometry", icon: "fa-wave-square", questions: [
                { q: "sin 90° = ?", options: ["0", "0.5", "1", "නිර්වචනය නොකළ"], correct: 2 },
                { q: "cos 0° = ?", options: ["0", "0.5", "1", "-1"], correct: 2 },
                { q: "sin 30° = ?", options: ["0", "0.5", "1", "√3/2"], correct: 1 }
            ]},
            { titleSi: "සම්භාවිතාව", titleEn: "Probability", icon: "fa-dice", questions: [
                { q: "කාසියක් උඩ දමන විට හිස ලැබීමේ සම්භාවිතාව කීයද?", options: ["1/4", "1/3", "1/2", "1"], correct: 2 },
                { q: "සාමාන්‍ය පාච්චියක් හෙළන විට 6 ලැබීමේ සම්භාවිතාව කීයද?", options: ["1/2", "1/3", "1/6", "1/12"], correct: 2 },
                { q: "කාඩ්පත් 52ක සාමාන්‍ය කට්ටලයකින් රාජාවෙකු (King) ලැබීමේ සම්භාවිතාව කීයද?", options: ["1/52", "1/13", "1/4", "4/13"], correct: 1 }
            ]},
            { titleSi: "සංඛ්‍යාන හා ප්‍රස්තාර", titleEn: "Statistics & Graphs", icon: "fa-chart-column", questions: [
                { q: "2,4,6,8,10 සංඛ්‍යා වල මධ්‍යනය (mean) කීයද?", options: ["5", "6", "7", "8"], correct: 1 },
                { q: "3,5,7,9,11 සංඛ්‍යා වල මධ්‍යස්ථය (median) කීයද?", options: ["5", "7", "9", "6"], correct: 1 },
                { q: "2,3,3,4,5,3 දත්ත කුලකයේ බහුලකය (mode) කුමක්ද?", options: ["2", "3", "4", "5"], correct: 1 }
            ]}
        ];

        const megaDictionaryData = {
            "math_terms": [
                { "si": "වර්ග සමීකරණය", "en": "Quadratic Equation", "desc": "ax^2 + bx + c = 0 ආකාරයේ සමීකරණ" },
                { "si": "ත්‍රිකෝණමිතිය", "en": "Trigonometry", "desc": "කෝණ සහ ත්‍රිකෝණ අතර සම්බන්ධතා" },
                { "si": "සංඛ්‍යා ශ්‍රේණි", "en": "Progressions", "desc": "සමාන්ත සහ ගුණෝත්තර ශ්‍රේණි" },
                { "si": "සම්භාවිතාව", "en": "Probability", "desc": "සිදුවීමක සිදුවීමේ සම්භාවිතාව මැනීම" },
                { "si": "අනුකලනය", "en": "Integration", "desc": "වපසරිය සහ පරිමාව සෙවීම සඳහා භාවිත වේ" }
            ],
            "extended_notes": Array.from({length: 1200}, (_, index) => ({
                id: index + 1,
                topic: `Extended O/L Mathematics Model Paper Question No ${index + 1}`,
                solutionSnippet: "Steps: 1. Identify formula, 2. Substitute parameters, 3. Calculate final result accurately."
            }))
        };

        let currentLang = localStorage.getItem('moramaths_lang') || 'si';

        const translations = {
            si: {
                navBadge: "Sithum Munasinghe | University of Moratuwa Undergraduate",
                langBtn: "English",
                logout: "ඉවත් වන්න",
                welcome: "ආයුබෝවන්!",
                portalSub: "MoraMaths Mega O/L Speed Revision Portal වෙත පිවිසෙන්න",
                loginTab: "Login",
                regTab: "Register",
                lblLoginId: "Username හෝ Email",
                lblLoginPass: "Password",
                btnLoginSubmit: "ප්‍රවේශ වන්න (Login)",
                lblRegName: "සම්පූර්ණ නම",
                lblRegEmail: "විද්‍යුත් තැපෑලය (Email)",
                lblRegUser: "Username එකක්",
                lblRegPass: "මුරපදය (Password)",
                btnRegSubmit: "ලියාපදිංචි වී OTP එවන්න",
                studentPortalSub: "O/L Speed Revision Student Portal",
                secSchedule: "සති 16 ක පුනරීක්ෂණ සැලැස්ම (Revision Weeks)",
                zoomTitle: "Live Zoom පන්තිය",
                zoomJoin: "සූම් පන්තියට එකතු වන්න",
                lockedText: "Locked (අගුළු දමා ඇත)",
                pdfBtn: "PDF",
                quizBtn: "Quiz",
                otpTitle: "විද්‍යුත් තැපෑලය සත්‍යාපනය (OTP Verification)",
                otpDesc: "ඔබේ Email ලිපිනයට ලැබුණු OTP අංකය මෙහි ඇතුළත් කරන්න.",
                otpBtn: "සත්‍යාපනය කර ලියාපදිංචි වන්න",
                otpBtnLogin: "සත්‍යාපනය කර පිවිසෙන්න",
                otpResend: "OTP නැවත එවන්න",
                chartLabel: "මෙගා ප්‍රශ්නාවලී ලකුණු (%)",
                chartBoxTitle: "සතිපතා ලකුණු ප්‍රගතිය සහ විස්තරාත්මක විශ්ලේෂණය",
                goalsTitle: "ඉලක්ක සහ ජයග්‍රහණ",
                goalsSub: "ඔබේ O/L ගණිතය ඉහළම සාමාර්ථයක් සඳහා සූදානම් වීම.",
                revComp: "පුනරීක්ෂණ අවසන් කළ ප්‍රමාණය",
                pastPapers: "කළ පසුගිය ප්‍රශ්න පත්‍ර",
                goalsFooter: "අමතර ප්‍රශ්න පත්‍ර සහ Model Papers සඳහා පහත සති පරීක්ෂා කරන්න.",
                leaderboardBtn: "ශ්‍රේණිගත කිරීම",
                leaderboardTitle: "ප්‍රශ්නාවලි ශ්‍රේණිගත කිරීම",
                leaderboardBack: "ආපසු",
                leaderboardEmpty: "තවම කිසිවෙකු Quiz එකක් කර නැත — පළමු වන්න!",
                gameBtn: "ක්‍රීඩාව",
                gameTitle: "O/L ගණිත මට්ටම් ක්‍රීඩාව — මට්ටම් 16ක්",
                gameSub: "සිංහල මාධ්‍යයෙන් O/L ගණිත විෂය නිර්දේශයට අනුව සකසන ලද මට්ටම් 16ක ක්‍රීඩාවකි. එක් එක් මට්ටම සමත් වී ඊළඟ මට්ටම අගුළු හරින්න!",
                gameBack: "ආපසු",
                notifTitle: "දැනුම්දීම්",
                notifEmpty: "දැනුම්දීම් නැත",
                quizNoQuestions: "මෙම පාඩමට තවම ප්‍රශ්න එකතු කර නැත.",
                quizSubmit: "පිළිතුරු එවන්න",
                quizResultPrefix: "ඔබේ ලකුණ:",
                quizClose: "වසන්න",
                heroHeadline: "O/L ගණිතය සති 16කින්<br>සම්පූර්ණයෙන් ආවරණය කරමු",
                heroSub: "Live Zoom classes, weekly quizzes, leaderboard, සහ සම්පූර්ණ 16 සති පුනරීක්ෂණ සැලැස්මක් — MoraMaths සමගින්.",
                heroChip1: "Live Classes",
                heroChip2: "Weeks 16ක් සම්පූර්ණයි",
                heroChip3: "Leaderboard &amp; Quizzes"
            },
            en: {
                navBadge: "Sithum Munasinghe | University of Moratuwa Undergraduate",
                langBtn: "සිංහල",
                logout: "Log Out",
                welcome: "Welcome!",
                portalSub: "Welcome to MoraMaths Mega O/L Speed Revision Portal",
                loginTab: "Login",
                regTab: "Register",
                lblLoginId: "Username or Email",
                lblLoginPass: "Password",
                btnLoginSubmit: "Login Now",
                lblRegName: "Full Name",
                lblRegEmail: "Email Address",
                lblRegUser: "Username",
                lblRegPass: "Password",
                btnRegSubmit: "Register & Send OTP",
                studentPortalSub: "O/L Speed Revision Student Portal",
                secSchedule: "16 Weeks Mega Revision Schedule",
                zoomTitle: "Live Zoom Class",
                zoomJoin: "Join Zoom Class",
                lockedText: "Locked",
                pdfBtn: "PDF",
                quizBtn: "Quiz",
                otpTitle: "Email OTP Verification",
                otpDesc: "Enter the OTP code received to your email address.",
                otpBtn: "Verify & Register",
                otpBtnLogin: "Verify & Login",
                otpResend: "Resend OTP",
                chartLabel: "Mega Quiz Marks (%)",
                chartBoxTitle: "Weekly Marks Progress & Detailed Analysis",
                goalsTitle: "Goals & Achievements",
                goalsSub: "Preparing for top-grade O/L Mathematics success.",
                revComp: "Revision Completed",
                pastPapers: "Past Papers Solved",
                goalsFooter: "Check out the weeks below for extra model papers and worksheets.",
                leaderboardBtn: "Leaderboard",
                leaderboardTitle: "Quiz Leaderboard",
                leaderboardBack: "Back",
                leaderboardEmpty: "No quiz attempts yet — be the first!",
                gameBtn: "Level Game",
                gameTitle: "O/L Maths Level Game — 16 Levels",
                gameSub: "A 16-level game built to match the O/L Mathematics syllabus. Pass each level to unlock the next!",
                gameBack: "Back",
                notifTitle: "Notifications",
                notifEmpty: "No notifications",
                quizNoQuestions: "No questions added to this lesson yet.",
                quizSubmit: "Submit Answers",
                quizResultPrefix: "Your score:",
                quizClose: "Close",
                heroHeadline: "Master O/L Mathematics<br>in Just 16 Weeks",
                heroSub: "Live Zoom classes, weekly quizzes, a leaderboard, and a complete 16-week revision plan — all in MoraMaths.",
                heroChip1: "Live Classes",
                heroChip2: "16 Weeks Complete",
                heroChip3: "Leaderboard &amp; Quizzes"
            }
        };

        /* ============ MATRIX MATH RAIN (login screen background) ============ */
        let matrixCtx = null, matrixColumns = 0, matrixDrops = [], matrixTimer = null;
        const matrixSymbols = ['π','∫','Σ','√','∆','θ','÷','×','∞','ƒ','α','β','λ','µ','1','0','x','y','%','=','+','−','²','½'];

        function resizeMatrixCanvas() {
            const canvas = document.getElementById('matrix-canvas');
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            matrixColumns = Math.floor(canvas.width / 24);
            matrixDrops = new Array(matrixColumns).fill(0).map(() => Math.random() * -50);
        }

        function drawMatrixFrame() {
            const canvas = document.getElementById('matrix-canvas');
            if (!canvas || !matrixCtx) return;
            matrixCtx.fillStyle = 'rgba(11,9,20,0.10)';
            matrixCtx.fillRect(0, 0, canvas.width, canvas.height);
            matrixCtx.font = '15px "Plus Jakarta Sans", monospace';
            for (let i = 0; i < matrixDrops.length; i++) {
                const symbol = matrixSymbols[Math.floor(Math.random() * matrixSymbols.length)];
                const y = matrixDrops[i] * 24;
                const fade = Math.random() > 0.94;
                matrixCtx.fillStyle = fade ? 'rgba(199,210,254,0.55)' : 'rgba(99,102,241,0.30)';
                matrixCtx.fillText(symbol, i * 24, y);
                if (y > canvas.height && Math.random() > 0.975) matrixDrops[i] = 0;
                matrixDrops[i]++;
            }
        }

        function startMatrixRain() {
            const canvas = document.getElementById('matrix-canvas');
            if (!canvas) return;
            matrixCtx = canvas.getContext('2d');
            resizeMatrixCanvas();
            canvas.classList.remove('opacity-0');
            canvas.classList.add('opacity-100');
            if (matrixTimer) clearInterval(matrixTimer);
            matrixTimer = setInterval(drawMatrixFrame, 55);
        }

        function stopMatrixRain() {
            const canvas = document.getElementById('matrix-canvas');
            if (matrixTimer) { clearInterval(matrixTimer); matrixTimer = null; }
            if (canvas) {
                canvas.classList.remove('opacity-100');
                canvas.classList.add('opacity-0');
            }
        }

        window.addEventListener('resize', () => { if (matrixTimer) resizeMatrixCanvas(); });

        function toTitleCase(str) {
            if (!str) return '';
            // Only apply Latin-style title casing to Latin-script names.
            // Sinhala (and other non-Latin) names have no case concept, so leave them untouched.
            if (!/^[A-Za-z\s.'-]+$/.test(str)) return str.trim();
            return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
        }

        function uid() {
            return 'id_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
        }

        function isAdminUser(u) { return !!u && (u.role === 'admin' || u.role === 'master_admin'); }
        function isMasterAdmin(u) { return !!u && u.role === 'master_admin'; }

        let siteAssets = JSON.parse(localStorage.getItem('moramaths_site_assets')) || { heroImage: '', dashboardBanner: '' };

        /* Custom-built SVG illustration used on the login screen when no admin image is set. */
        const defaultHeroIllustrationSVG = `
        <svg viewBox="0 0 420 460" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
            <defs>
                <linearGradient id="heroGrad1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#818cf8"/><stop offset="100%" stop-color="#a855f7"/>
                </linearGradient>
                <linearGradient id="heroGrad2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#f59e0b"/>
                </linearGradient>
                <radialGradient id="heroGlow" cx="50%" cy="35%" r="60%">
                    <stop offset="0%" stop-color="#6366f1" stop-opacity="0.35"/><stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
                </radialGradient>
            </defs>
            <circle cx="210" cy="180" r="190" fill="url(#heroGlow)"/>
            <circle cx="60" cy="380" r="70" fill="#a855f7" opacity="0.10"/>
            <circle cx="370" cy="90" r="55" fill="#6366f1" opacity="0.12"/>

            <!-- floating math symbol chips -->
            <g font-family="Plus Jakarta Sans, sans-serif" font-weight="800" text-anchor="middle">
                <g transform="translate(55,120)"><circle r="26" fill="#161224" stroke="#6366f1" stroke-opacity="0.5"/><text y="9" font-size="24" fill="#c7d2fe">π</text></g>
                <g transform="translate(365,190)"><circle r="24" fill="#161224" stroke="#a855f7" stroke-opacity="0.5"/><text y="8" font-size="22" fill="#e9d5ff">√</text></g>
                <g transform="translate(48,290)"><circle r="22" fill="#161224" stroke="#fbbf24" stroke-opacity="0.5"/><text y="7" font-size="20" fill="#fde68a">∑</text></g>
                <g transform="translate(355,340)"><circle r="24" fill="#161224" stroke="#34d399" stroke-opacity="0.5"/><text y="8" font-size="20" fill="#a7f3d0">÷</text></g>
                <g transform="translate(210,45)"><circle r="20" fill="#161224" stroke="#f472b6" stroke-opacity="0.5"/><text y="7" font-size="18" fill="#fbcfe8">∞</text></g>
            </g>

            <!-- open book -->
            <g transform="translate(120,255)">
                <path d="M0 20 Q45 0 90 20 L90 90 Q45 70 0 90 Z" fill="url(#heroGrad1)"/>
                <path d="M90 20 Q135 0 180 20 L180 90 Q135 70 90 90 Z" fill="url(#heroGrad1)" opacity="0.85"/>
                <path d="M15 30 Q45 18 75 30" stroke="#0b0914" stroke-width="2.5" fill="none" opacity="0.35"/>
                <path d="M15 48 Q45 36 75 48" stroke="#0b0914" stroke-width="2.5" fill="none" opacity="0.35"/>
                <path d="M105 30 Q135 18 165 30" stroke="#0b0914" stroke-width="2.5" fill="none" opacity="0.35"/>
                <path d="M105 48 Q135 36 165 48" stroke="#0b0914" stroke-width="2.5" fill="none" opacity="0.35"/>
            </g>

            <!-- graduation cap -->
            <g transform="translate(210,150)">
                <ellipse cx="0" cy="12" rx="62" ry="16" fill="url(#heroGrad2)"/>
                <polygon points="0,-26 74,12 0,50 -74,12" fill="url(#heroGrad2)"/>
                <circle cx="0" cy="12" r="9" fill="#161224" stroke="#fde68a" stroke-width="2"/>
                <line x1="60" y1="18" x2="60" y2="58" stroke="#fbbf24" stroke-width="3"/>
                <circle cx="60" cy="64" r="6" fill="#fbbf24"/>
            </g>

            <!-- sparkles -->
            <g fill="#e9d5ff" opacity="0.8">
                <circle cx="280" cy="120" r="3"/><circle cx="300" cy="260" r="2.5"/><circle cx="120" cy="360" r="2.5"/><circle cx="90" cy="70" r="2"/>
            </g>
        </svg>`;

        /* Small repeating SVG tile used as a subtle background pattern behind the dashboard header. */
        const defaultBannerPatternSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 170 170">
            <g fill="none" stroke="#818cf8" stroke-opacity="0.5" stroke-width="1.5" font-family="sans-serif">
                <text x="15" y="35" font-size="26" fill="#818cf8" fill-opacity="0.5" stroke="none">π</text>
                <text x="95" y="70" font-size="22" fill="#a855f7" fill-opacity="0.45" stroke="none">√</text>
                <text x="40" y="120" font-size="24" fill="#fbbf24" fill-opacity="0.4" stroke="none">÷</text>
                <text x="120" y="150" font-size="20" fill="#34d399" fill-opacity="0.4" stroke="none">∑</text>
            </g>
        </svg>`;

        function toggleLanguage() {
            currentLang = currentLang === 'si' ? 'en' : 'si';
            localStorage.setItem('moramaths_lang', currentLang);
            applyLanguage();
            renderWeeksGrid();
            if(currentUser) {
                setupStudentDashboard();
                renderChart();
            }
        }

        function applyLanguage() {
            const t = translations[currentLang];
            document.getElementById('html-root').setAttribute('lang', currentLang);
            document.getElementById('lang-btn-text').innerText = t.langBtn;
            document.getElementById('txt-welcome').innerText = t.welcome;
            document.getElementById('txt-portal-sub').innerText = t.portalSub;
            document.getElementById('tab-login-btn').innerText = t.loginTab;
            document.getElementById('tab-register-btn').innerText = t.regTab;
            document.getElementById('lbl-login-id').innerText = t.lblLoginId;
            document.getElementById('lbl-login-pass').innerText = t.lblLoginPass;
            document.getElementById('btn-login-submit').innerText = t.btnLoginSubmit;
            document.getElementById('lbl-reg-name').innerText = t.lblRegName;
            document.getElementById('lbl-reg-email').innerText = t.lblRegEmail;
            document.getElementById('lbl-reg-user').innerText = t.lblRegUser;
            document.getElementById('lbl-reg-pass').innerText = t.lblRegPass;
            document.getElementById('btn-reg-submit').innerText = t.btnRegSubmit;
            document.getElementById('file-protocol-warning-text').innerHTML = currentLang === 'si'
                ? "<b>OTP email එවෙන්නේ නෑ:</b> ඔබ මේ file එක කෙලින්ම (file:///...) open කර ඇත. EmailJS වැඩ කරන්නේ http/https හරහා විවෘත කළ page එකකින් විතරයි — VS Code Live Server, 'python -m http.server' වගේ local server එකකින්, හෝ Netlify/GitHub Pages වගේ තැනකට host කරලා try කරන්න."
                : "<b>OTP emails won't send:</b> you're opening this file directly (file:///...). EmailJS only works from a page served over http/https — try VS Code's Live Server, a local server like 'python -m http.server', or hosting it on Netlify/GitHub Pages.";
            document.getElementById('student-portal-subtitle').innerText = t.studentPortalSub;
            document.getElementById('sec-schedule-title').innerHTML = `<i class="fa-solid fa-calendar-days text-indigo-400"></i> ${t.secSchedule}`;
            document.getElementById('txt-logout-btn').innerText = t.logout;
            document.getElementById('chart-box-title').innerHTML = `<i class="fa-solid fa-chart-line"></i> ${t.chartBoxTitle}`;
            document.getElementById('goals-title').innerHTML = `<i class="fa-solid fa-bullseye"></i> ${t.goalsTitle}`;
            document.getElementById('goals-sub').innerText = t.goalsSub;
            document.getElementById('label-rev-comp').innerText = t.revComp;
            document.getElementById('label-past-papers').innerText = t.pastPapers;
            document.getElementById('goals-footer-box').innerHTML = `<i class="fa-solid fa-circle-info mr-1 text-indigo-400"></i> ${t.goalsFooter}`;
            document.getElementById('txt-leaderboard-btn').innerText = t.leaderboardBtn;
            document.getElementById('leaderboard-title').innerText = t.leaderboardTitle;
            document.getElementById('leaderboard-back').innerText = t.leaderboardBack;
            document.getElementById('leaderboard-empty').innerText = t.leaderboardEmpty;
            document.getElementById('txt-game-btn').innerText = t.gameBtn;
            document.getElementById('game-title').innerText = t.gameTitle;
            document.getElementById('game-sub').innerText = t.gameSub;
            document.getElementById('game-back').innerText = t.gameBack;
            document.getElementById('notif-panel-title').innerText = t.notifTitle;
            document.getElementById('hero-headline').innerHTML = t.heroHeadline;
            document.getElementById('hero-subheadline').innerText = t.heroSub;
        }

        let users = JSON.parse(localStorage.getItem('moramaths_users')) || [
            { fullname: "Master Admin", email: "admin@moramaths.lk", username: "admin", password: "123", role: "master_admin", quizScores: {} },
            { fullname: "Admin Two", email: "admin2@moramaths.lk", username: "admin2", password: "123", role: "admin", quizScores: {} },
            { fullname: "Admin Three", email: "admin3@moramaths.lk", username: "admin3", password: "123", role: "admin", quizScores: {} }
        ];
        let currentUser = JSON.parse(localStorage.getItem('moramaths_current_user')) || null;
        let zoomData = JSON.parse(localStorage.getItem('moramaths_zoom')) || {
            link: "https://zoom.us/j/example", id: "123 456 7890", pass: "12345"
        };
        let weeksData = JSON.parse(localStorage.getItem('moramaths_weeks')) || Array.from({length: 16}, (_, i) => ({
            week: i + 1,
            title: currentLang === 'si' ? `සතිය ${i + 1} මෙගා පුනරීක්ෂණය` : `Week ${i + 1} Mega Revision`,
            isLocked: i !== 0,
            lessons: [
                {
                    id: uid(),
                    title: currentLang === 'si' ? "මූලික සංකල්ප සහ ගැටලු විසඳීම" : "Core Concepts & Problem Solving",
                    pdf: "#", activity: "#",
                    quiz: i === 0 ? [
                        { q: "2x + 4 = 10 නම් x = ?", options: ["2", "3", "4", "6"], correct: 1 },
                        { q: "3 හි වර්ගය කුමක්ද?", options: ["6", "9", "12", "3"], correct: 1 },
                        { q: "සෘජුකෝණී ත්‍රිකෝණයක විශාලතම කෝණය කුමක්ද?", options: ["30°", "60°", "90°", "180°"], correct: 2 }
                    ] : []
                }
            ]
        }));
        let notifications = JSON.parse(localStorage.getItem('moramaths_notifications')) || [
            { id: uid(), text: currentLang === 'si' ? "MoraMaths Mega Edition වෙත සාදරයෙන් පිළිගනිමු! 🎉" : "Welcome to MoraMaths Mega Edition! 🎉", date: Date.now() }
        ];

        let tempRegData = null;
        let progressChartInstance = null;
        let quizModalState = null; // { lessonId, weekIdx, lessonIdx, answers: [] }

        function ensureDataIntegrity() {
            // Backfill lesson ids / quiz arrays for data saved by older versions of the app.
            weeksData.forEach(w => {
                w.lessons.forEach(l => {
                    if (!l.id) l.id = uid();
                    if (!l.quiz) l.quiz = [];
                    if (l.lessonCode === undefined) l.lessonCode = '';
                });
            });
            users.forEach(u => {
                if (!u.quizScores) u.quizScores = {};
                if (!u.gameProgress) u.gameProgress = { unlocked: 1, scores: {} };
                if (!u.role) u.role = (u.username === 'admin') ? 'master_admin' : 'student';
                if (!u.streak) u.streak = { count: 0, lastDate: '' };
            });
            if (currentUser && !currentUser.quizScores) currentUser.quizScores = {};
            if (currentUser && !currentUser.gameProgress) currentUser.gameProgress = { unlocked: 1, scores: {} };
            if (currentUser && !currentUser.role) currentUser.role = (currentUser.username === 'admin') ? 'master_admin' : 'student';
            if (currentUser && !currentUser.streak) currentUser.streak = { count: 0, lastDate: '' };
        }

        function initApp() {
            ensureDataIntegrity();
            applyLanguage();
            renderWeeksGrid();
            populateAdminWeekSelect();
            loadRandomQuote();
            document.getElementById('leaderboard-section').classList.add('hidden');
            document.getElementById('game-section').classList.add('hidden');
            if (currentUser) {
                document.getElementById('auth-screen-flex').classList.add('hidden');
                document.getElementById('auth-container').classList.add('hidden');
                document.getElementById('auth-hero-panel').classList.remove('hero-visible');
                document.getElementById('file-protocol-warning').classList.add('hidden');
                document.getElementById('nav-leaderboard-btn-wrap').classList.remove('hidden');
                document.getElementById('nav-game-btn-wrap').classList.remove('hidden');
                document.getElementById('notif-bell-wrap').classList.remove('hidden');
                if (isAdminUser(currentUser)) {
                    document.getElementById('admin-panel').classList.remove('hidden');
                    document.getElementById('student-dashboard').classList.add('hidden');
                    loadAdminZoomForm();
                    renderAdminWeeksManager();
                    populateQuizWeekSelect();
                    renderAdminUsersList();
                    renderAdminAppearanceForm();
                    document.getElementById('admin-role-badge').innerText = isMasterAdmin(currentUser) ? 'Master Admin' : 'Admin';
                    document.querySelectorAll('.master-admin-only').forEach(el => el.classList.toggle('hidden', !isMasterAdmin(currentUser)));
                } else {
                    document.getElementById('student-dashboard').classList.remove('hidden');
                    document.getElementById('admin-panel').classList.add('hidden');
                    setupStudentDashboard();
                    renderChart();
                }
                document.getElementById('user-nav-profile').classList.remove('hidden');
                document.getElementById('nav-user-name').innerText = toTitleCase(currentUser.fullname);
                document.getElementById('nav-mini-avatar').innerText = toTitleCase(currentUser.fullname).charAt(0).toUpperCase();
            } else {
                document.getElementById('auth-screen-flex').classList.remove('hidden');
                document.getElementById('auth-container').classList.remove('hidden');
                document.getElementById('auth-hero-panel').classList.add('hero-visible');
                document.getElementById('file-protocol-warning').classList.toggle('hidden', location.protocol !== 'file:');
                document.getElementById('student-dashboard').classList.add('hidden');
                document.getElementById('admin-panel').classList.add('hidden');
                document.getElementById('user-nav-profile').classList.add('hidden');
                document.getElementById('nav-leaderboard-btn-wrap').classList.add('hidden');
                document.getElementById('nav-game-btn-wrap').classList.add('hidden');
                document.getElementById('notif-bell-wrap').classList.add('hidden');
            }
            if (currentUser) { stopMatrixRain(); } else { startMatrixRain(); }
            applySiteAssets();
            renderNotifBell();
            appInitialized = true;
        }

        function loadRandomQuote() {
            const randomObj = megaQuotesDataset[Math.floor(Math.random() * megaQuotesDataset.length)];
            document.getElementById('quote-text').innerText = `"${randomObj.quote}"`;
            document.getElementById('quote-author').innerText = `— ${randomObj.author}`;
        }

        function switchTab(tab) {
            const loginBtn = document.getElementById('tab-login-btn');
            const regBtn = document.getElementById('tab-register-btn');
            const loginForm = document.getElementById('login-form');
            const regForm = document.getElementById('register-form');

            if (tab === 'login') {
                loginBtn.className = "flex-1 py-3 rounded-xl text-indigo-400 bg-slate-800/90 shadow-md transition-all cursor-pointer whitespace-nowrap";
                regBtn.className = "flex-1 py-3 rounded-xl text-slate-400 hover:text-indigo-400 transition-all cursor-pointer whitespace-nowrap";
                loginForm.classList.remove('hidden');
                regForm.classList.add('hidden');
            } else {
                regBtn.className = "flex-1 py-3 rounded-xl text-indigo-400 bg-slate-800/90 shadow-md transition-all cursor-pointer whitespace-nowrap";
                loginBtn.className = "flex-1 py-3 rounded-xl text-slate-400 hover:text-indigo-400 transition-all cursor-pointer whitespace-nowrap";
                regForm.classList.remove('hidden');
                loginForm.classList.add('hidden');
            }
        }

        let otpBusy = false;           // guards double-submits while an email is sending
        let formBusy = false;          // guards double-submits on the login/register forms

        function setOtpModalBusy(isBusy, labelBusy, labelIdle) {
            const btn = document.getElementById('otp-btn-text');
            const resendBtn = document.getElementById('otp-resend-btn');
            otpBusy = isBusy;
            btn.disabled = isBusy;
            btn.classList.toggle('opacity-60', isBusy);
            btn.classList.toggle('cursor-not-allowed', isBusy);
            if (resendBtn) resendBtn.classList.toggle('opacity-40', isBusy);
            if (resendBtn) resendBtn.classList.toggle('pointer-events-none', isBusy);
            btn.innerHTML = isBusy
                ? `<i class="fa-solid fa-spinner fa-spin mr-1"></i> ${labelBusy}`
                : labelIdle;
        }

        function openOtpModal(email, name) {
            document.getElementById('otp-input').value = '';
            document.getElementById('otp-modal').classList.remove('hidden');
            const descEl = document.getElementById('otp-desc');
            const t = translations[currentLang];
            descEl.innerText = (currentLang === 'si'
                ? `${email} වෙත එවන ලද 6-ඉලක්කම් OTP අංකය මෙහි ඇතුළත් කරන්න.`
                : `Enter the 6-digit OTP code sent to ${email}.`);
            document.getElementById('otp-btn-text').innerText = t.otpBtn;
            document.getElementById('txt-otp-resend').innerText = t.otpResend;
        }

        function closeOtpModal() {
            document.getElementById('otp-modal').classList.add('hidden');
            document.getElementById('otp-input').value = '';
            tempRegData = null;
        }

        function handleLogin(e) {
            e.preventDefault();
            if (formBusy) return;
            const id = document.getElementById('login-id').value.trim().toLowerCase();
            const pass = document.getElementById('login-password').value.trim();

            const found = users.find(u => (u.username.toLowerCase() === id || u.email.toLowerCase() === id) && u.password === pass);
            if (!found) {
                showToast(currentLang === 'si' ? "වැරදි Username එකක් හෝ Password එකක්!" : "Invalid Username or Password!", 'error');
                return;
            }

            currentUser = found;
            localStorage.setItem('moramaths_current_user', JSON.stringify(currentUser));
            showToast(currentLang === 'si' ? `සාදරයෙන් පිළිගනිමු, ${toTitleCase(currentUser.fullname)}!` : `Welcome back, ${toTitleCase(currentUser.fullname)}!`, 'success');
            initApp();
        }

        function handleRegister(e) {
            e.preventDefault();
            if (formBusy) return;
            const rawName = document.getElementById('reg-fullname').value.trim();
            const fullname = toTitleCase(rawName);
            const email = document.getElementById('reg-email').value.trim().toLowerCase();
            const username = document.getElementById('reg-username').value.trim().toLowerCase();
            const password = document.getElementById('reg-password').value.trim();

            if (!fullname || !email || !username || !password) {
                showToast(currentLang === 'si' ? "කරුණාකර සියලුම කොටස් පුරවන්න." : "Please fill in all fields.", 'error');
                return;
            }
            if (users.some(u => u.username.toLowerCase() === username || u.email.toLowerCase() === email)) {
                showToast(currentLang === 'si' ? "මෙම Username එකක් හෝ Email එකක් දැනටමත් භාවිත කර ඇත!" : "Username or Email already in use!", 'error');
                return;
            }

            tempRegData = { fullname, email, username, password, quizScores: {} };
            const otpCode = generateOtpCode();
            tempRegData.otp = otpCode;

            formBusy = true;
            const btn = document.getElementById('btn-reg-submit');
            const originalLabel = btn.innerText;
            btn.disabled = true;
            btn.classList.add('opacity-60', 'cursor-not-allowed');
            btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> ${currentLang === 'si' ? 'OTP එවමින්...' : 'Sending OTP...'}`;

            sendOtpEmail(email, fullname, otpCode)
                .then(() => {
                    openOtpModal(email, fullname);
                })
                .catch(err => {
                    console.error('EmailJS send error:', err);
                    tempRegData = null;
                    showToast(getOtpFailureMessage(err), 'error');
                })
                .finally(() => {
                    formBusy = false;
                    btn.disabled = false;
                    btn.classList.remove('opacity-60', 'cursor-not-allowed');
                    btn.innerText = originalLabel;
                });
        }

        function resendOtp() {
            if (otpBusy) return;
            if (tempRegData) {
                const otpCode = generateOtpCode();
                tempRegData.otp = otpCode;
                setOtpModalBusy(true, currentLang === 'si' ? 'නැවත එවමින්...' : 'Resending...', '');
                sendOtpEmail(tempRegData.email, tempRegData.fullname, otpCode)
                    .then(() => showToast(currentLang === 'si' ? "OTP නැවත එවන ලදී!" : "OTP resent!", 'success'))
                    .catch(err => showToast(getOtpFailureMessage(err), 'error'))
                    .finally(() => setOtpModalBusy(false, '', translations[currentLang].otpBtn));
            }
        }

        function verifyAndRegister() {
            if (otpBusy) return;
            const enteredOtp = document.getElementById('otp-input').value.trim();

            if (!tempRegData) { closeOtpModal(); return; }
            if (enteredOtp === tempRegData.otp) {
                const { otp, ...userRecord } = tempRegData;
                users.push(userRecord);
                localStorage.setItem('moramaths_users', JSON.stringify(users));
                cloudPush();
                currentUser = userRecord;
                localStorage.setItem('moramaths_current_user', JSON.stringify(currentUser));
                closeOtpModal();
                showToast(currentLang === 'si' ? "ලියාපදිංචිය සාර්ථකයි! 🎉" : "Registration Successful! 🎉", 'success');
                fireConfetti(70);
                initApp();
            } else {
                showToast(currentLang === 'si' ? "වැරදි OTP අංකයකි!" : "Invalid OTP!", 'error');
            }
        }

        function logout() {
            currentUser = null;
            localStorage.removeItem('moramaths_current_user');
            initApp();
        }

        function setupStudentDashboard() {
            const t = translations[currentLang];
            const formattedName = toTitleCase(currentUser.fullname);
            document.getElementById('welcome-student-name').innerText = (currentLang === 'si' ? "ආයුබෝවන්, " : "Welcome, ") + formattedName + "!";
            document.getElementById('student-avatar').innerText = formattedName.charAt(0).toUpperCase();
            
            document.getElementById('student-zoom-box').innerHTML = `
                <div class="flex items-center justify-between mb-2">
                    <span class="text-[11px] font-extrabold text-indigo-300 flex items-center gap-1.5"><i class="fa-solid fa-video text-rose-400 animate-pulse"></i> ${t.zoomTitle}</span>
                    <span class="text-[9px] bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap">Active</span>
                </div>
                <p class="text-xs font-bold text-white mb-3 truncate">ID: ${zoomData.id} | Pass: ${zoomData.pass}</p>
                <a href="${zoomData.link}" target="_blank" class="block text-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold py-2.5 rounded-xl transition shadow-lg">${t.zoomJoin}</a>
            `;
            updateStudyStreak();
        }

        /* ============ STUDY STREAK (auto-tracked daily login streak) ============ */
        function updateStudyStreak() {
            if (!currentUser) return;
            const todayKey = new Date().toDateString();
            if (!currentUser.streak) currentUser.streak = { count: 0, lastDate: '' };
            if (currentUser.streak.lastDate !== todayKey) {
                const yesterday = new Date(Date.now() - 86400000).toDateString();
                currentUser.streak.count = (currentUser.streak.lastDate === yesterday) ? currentUser.streak.count + 1 : 1;
                currentUser.streak.lastDate = todayKey;
                localStorage.setItem('moramaths_current_user', JSON.stringify(currentUser));
                const idx = users.findIndex(u => u.username === currentUser.username);
                if (idx !== -1) { users[idx].streak = currentUser.streak; localStorage.setItem('moramaths_users', JSON.stringify(users)); }
                cloudPush();
            }
            const box = document.getElementById('study-streak-text');
            const emoji = document.getElementById('study-streak-emoji');
            if (box) {
                const days = currentUser.streak.count;
                const label = currentLang === 'si' ? `අධ්‍යයන දිනපෙළ: දින ${days}` : `Study Streak: ${days} day${days === 1 ? '' : 's'}`;
                box.innerText = label;
                if (emoji) emoji.innerText = days >= 7 ? '🔥🔥' : days >= 3 ? '🔥' : '✨';
            }
        }

        function renderChart() {
            const ctx = document.getElementById('studentProgressChart').getContext('2d');
            if (progressChartInstance) {
                progressChartInstance.destroy();
            }
            const t = translations[currentLang];
            progressChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'],
                    datasets: [{
                        label: t.chartLabel,
                        data: [70, 75, 82, 80, 88, 90, 85, 95],
                        borderColor: '#6366f1',
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { labels: { color: '#cbd5e1', font: { family: 'Plus Jakarta Sans', size: 11 } } }
                    },
                    scales: {
                        x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51, 65, 85, 0.2)' } },
                        y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(51, 65, 85, 0.2)' }, min: 0, max: 100 }
                    }
                }
            });
        }

        function openProfileModal() {
            if (!currentUser) return;
            const formattedName = toTitleCase(currentUser.fullname);
            document.getElementById('modal-profile-avatar').innerText = formattedName.charAt(0).toUpperCase();
            document.getElementById('modal-profile-name').innerText = formattedName;
            document.getElementById('modal-profile-email').innerText = currentUser.email;
            document.getElementById('modal-profile-user').innerText = currentUser.username;
            document.getElementById('profile-modal').classList.remove('hidden');
        }

        function closeProfileModal() {
            document.getElementById('profile-modal').classList.add('hidden');
        }

        function renderWeeksGrid() {
            const grid = document.getElementById('weeks-grid');
            grid.innerHTML = '';
            const t = translations[currentLang];
            weeksData.forEach((w, idx) => {
                const isLocked = w.isLocked;
                grid.innerHTML += `
                    <div onclick="handleWeekClick(${idx})" class="bg-[#161224]/80 backdrop-blur-md border ${isLocked ? 'border-slate-800/80 opacity-60' : 'border-slate-800/80 hover:border-indigo-500/60 hover:-translate-y-1'} p-5 rounded-2xl cursor-pointer transition-all duration-300 shadow-xl group space-y-3 relative overflow-hidden">
                        <div class="flex justify-between items-center z-10 relative">
                            <span class="text-[10px] font-bold ${isLocked ? 'bg-[#0f0c1a] text-slate-400' : 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'} px-2.5 py-1 rounded-lg whitespace-nowrap">Week ${w.week}</span>
                            ${isLocked ? '<i class="fa-solid fa-lock text-rose-400 text-xs"></i>' : '<i class="fa-solid fa-unlock text-emerald-400 text-xs"></i>'}
                        </div>
                        <h4 class="text-xs font-extrabold text-white group-hover:text-indigo-300 transition line-clamp-1 z-10 relative">${w.title}</h4>
                        <p class="text-[10px] text-slate-400 z-10 relative">${isLocked ? t.lockedText : `${w.lessons.length} ${currentLang === 'si' ? 'පාඩම් / PDFs ඇත' : 'Lessons / PDFs'}`}</p>
                    </div>
                `;
            });
        }

        function handleWeekClick(index) {
            const w = weeksData[index];
            if (w.isLocked) {
                alert(currentLang === 'si' ? "මෙම සතිය අගුළු දමා ඇත (Locked)." : "This week is locked.");
                return;
            }
            openWeekModal(index);
        }

        function openWeekModal(index) {
            const w = weeksData[index];
            const t = translations[currentLang];
            document.getElementById('modal-week-title').innerText = `Week ${w.week} - ${w.title}`;
            const list = document.getElementById('modal-lessons-list');
            list.innerHTML = '';
            w.lessons.forEach(l => {
                const scored = currentUser && currentUser.quizScores && currentUser.quizScores[l.id];
                list.innerHTML += `
                    <div class="bg-[#0f0c1a] border border-slate-800 p-4 rounded-2xl flex items-center justify-between gap-3 shadow-inner flex-wrap">
                        <span class="text-xs font-bold text-white line-clamp-1">${l.title}</span>
                        <div class="flex gap-2 shrink-0 flex-wrap">
                            <button onclick="viewLessonCode('${l.id}')" class="bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white text-[10px] font-bold px-3 py-1.5 rounded-xl border border-purple-500/30 transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer" title="Full-Screen Viewer"><i class="fa-solid fa-expand"></i> View</button>
                            <a href="${l.pdf}" target="_blank" class="bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white text-[10px] font-bold px-3 py-1.5 rounded-xl border border-indigo-500/30 transition flex items-center gap-1.5 whitespace-nowrap"><i class="fa-solid fa-file-pdf"></i> ${t.pdfBtn}</a>
                            <button onclick="openQuizModal('${l.id}')" class="bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white text-[10px] font-bold px-3 py-1.5 rounded-xl border border-emerald-500/30 transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer"><i class="fa-solid fa-circle-question"></i> ${t.quizBtn}${scored ? ` ✓${scored.correct}/${scored.total}` : ''}</button>
                        </div>
                    </div>
                `;
            });
            document.getElementById('week-modal').classList.remove('hidden');
        }

        function closeWeekModal() {
            document.getElementById('week-modal').classList.add('hidden');
        }

        function viewLessonCode(lessonId) {
            const lesson = findLesson(lessonId);
            if (!lesson) return;
            document.getElementById('lesson-code-title').innerText = lesson.title;
            const content = document.getElementById('lesson-code-content');
            if (lesson.lessonCode && lesson.lessonCode.trim() !== '') {
                content.innerHTML = lesson.lessonCode;
            } else {
                content.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-slate-500 py-10 space-y-3">
                    <i class="fa-solid fa-code text-4xl mb-2 opacity-50"></i>
                    <p>${currentLang === 'si' ? 'මෙම පාඩම සඳහා UI/Code එකක් තවම ඇතුළත් කර නොමැත.' : 'No HTML/UI code added for this lesson yet.'}</p>
                </div>`;
            }
            document.getElementById('lesson-code-modal').classList.remove('hidden');
        }

        function closeLessonCodeModal() {
            document.getElementById('lesson-code-modal').classList.add('hidden');
            isModalExpanded = false;
            const box = document.getElementById('lesson-modal-box');
            const icon = document.getElementById('expand-icon');
            box.classList.remove('w-screen', 'h-screen', 'rounded-none');
            box.classList.add('w-[98vw]', 'h-[95vh]', 'rounded-3xl');
            icon.className = 'fa-solid fa-expand';
        }

        let isModalExpanded = false;
        function toggleModalExpand() {
            const box = document.getElementById('lesson-modal-box');
            const icon = document.getElementById('expand-icon');
            isModalExpanded = !isModalExpanded;
            if (isModalExpanded) {
                box.classList.remove('w-[98vw]', 'h-[95vh]', 'rounded-3xl');
                box.classList.add('w-screen', 'h-screen', 'rounded-none');
                icon.className = "fa-solid fa-compress";
            } else {
                box.classList.remove('w-screen', 'h-screen', 'rounded-none');
                box.classList.add('w-[98vw]', 'h-[95vh]', 'rounded-3xl');
                icon.className = "fa-solid fa-expand";
            }
        }

        function populateAdminWeekSelect() {
            const select = document.getElementById('admin-target-week');
            select.innerHTML = '';
            weeksData.forEach((w, idx) => {
                select.innerHTML += `<option value="${idx}">Week ${w.week} - ${w.title}</option>`;
            });
        }

        function loadAdminZoomForm() {
            document.getElementById('admin-zoom-link').value = zoomData.link;
            document.getElementById('admin-zoom-id').value = zoomData.id;
            document.getElementById('admin-zoom-pass').value = zoomData.pass;
        }

        function saveZoomDetails() {
            zoomData.link = document.getElementById('admin-zoom-link').value.trim();
            zoomData.id = document.getElementById('admin-zoom-id').value.trim();
            zoomData.pass = document.getElementById('admin-zoom-pass').value.trim();
            localStorage.setItem('moramaths_zoom', JSON.stringify(zoomData));
            cloudPush();
            showToast("Zoom details updated successfully!", 'success');
        }

        /* Reads a chosen PDF file and embeds it as a base64 data URL directly into the
           given text field, so the existing "pdf link" flow (an <a href> / open-in-new-tab)
           keeps working unchanged whether the admin pasted a link OR uploaded a file.
           NOTE: everything is stored in the browser's localStorage, which has a small
           capacity (a few MB total) — keep uploaded PDFs small (a couple of MB at most). */
        function handlePdfFileSelect(inputEl, targetFieldId, labelId) {
            const file = inputEl.files && inputEl.files[0];
            if (!file) return;
            if (file.type !== 'application/pdf') {
                showToast(currentLang === 'si' ? "කරුණාකර PDF file එකක් තෝරන්න." : "Please choose a PDF file.", 'error');
                inputEl.value = '';
                return;
            }
            const MAX_BYTES = 4 * 1024 * 1024; // ~4MB safety cap for localStorage
            if (file.size > MAX_BYTES) {
                showToast(currentLang === 'si' ? "PDF file එක ඉතා විශාලයි (4MB ට වඩා අඩුවෙන් තෝරන්න)." : "PDF file is too large (please choose under 4MB).", 'error');
                inputEl.value = '';
                return;
            }
            const labelEl = labelId ? document.getElementById(labelId) : null;
            if (labelEl) labelEl.innerText = currentLang === 'si' ? 'Upload කරමින්...' : 'Uploading...';
            const reader = new FileReader();
            reader.onload = () => {
                document.getElementById(targetFieldId).value = reader.result;
                if (labelEl) labelEl.innerText = `✓ ${file.name}`;
                showToast(currentLang === 'si' ? "PDF එක attach කරන ලදී!" : "PDF attached!", 'success');
            };
            reader.onerror = () => {
                if (labelEl) labelEl.innerText = currentLang === 'si' ? 'PDF file එකක් upload කරන්න (optional)' : 'Upload a PDF file (optional)';
                showToast(currentLang === 'si' ? "PDF එක කියවීම අසාර්ථකයි!" : "Failed to read PDF file!", 'error');
            };
            reader.readAsDataURL(file);
        }

        function addLessonToWeek() {
            const weekIndex = document.getElementById('admin-target-week').value;
            const title = document.getElementById('admin-lesson-title').value.trim();
            const pdf = document.getElementById('admin-pdf-link').value.trim() || "#";
            const activity = document.getElementById('admin-activity-link').value.trim() || "#";
            const lessonCode = document.getElementById('admin-lesson-code').value.trim();
            if (!title) { showToast("Please enter a lesson title", 'error'); return; }
            weeksData[weekIndex].lessons.push({ id: uid(), title, pdf, activity, quiz: [], lessonCode });
            try {
                localStorage.setItem('moramaths_weeks', JSON.stringify(weeksData));
                cloudPush();
            } catch (err) {
                weeksData[weekIndex].lessons.pop();
                showToast(currentLang === 'si' ? "Storage එක full! PDF file එක ලොකුයි — කුඩා file එකක් හෝ Link එකක් try කරන්න." : "Storage full! The PDF file is too large — try a smaller file or a link instead.", 'error');
                return;
            }
            document.getElementById('admin-lesson-title').value = '';
            document.getElementById('admin-pdf-link').value = '';
            document.getElementById('admin-activity-link').value = '';
            document.getElementById('admin-lesson-code').value = '';
            const uploadLabel = document.getElementById('admin-pdf-upload-label');
            if (uploadLabel) uploadLabel.innerText = currentLang === 'si' ? 'PDF file එකක් upload කරන්න (optional)' : 'Upload a PDF file (optional)';
            renderWeeksGrid();
            renderAdminWeeksManager();
            populateQuizWeekSelect();
            pushNotification(`New lesson added: "${title}" (Week ${weeksData[weekIndex].week})`);
            showToast("Lesson added successfully!", 'success');
        }

        /* ============ TOAST SYSTEM ============ */
        function showToast(message, type = 'info') {
            const container = document.getElementById('toast-container');
            const icons = { success: 'fa-circle-check text-emerald-400', error: 'fa-circle-exclamation text-rose-400', info: 'fa-circle-info text-indigo-400' };
            const toast = document.createElement('div');
            toast.className = 'toast-enter bg-[#161224] border border-slate-800 text-white text-xs font-semibold px-4 py-3 rounded-2xl shadow-2xl flex items-start gap-2.5 max-w-sm';
            const safeMessage = String(message)
                .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                .replace(/\n/g, '<br>');
            toast.innerHTML = `<i class="fa-solid ${icons[type] || icons.info} mt-0.5"></i><span class="leading-relaxed">${safeMessage}</span>`;
            container.appendChild(toast);
            const duration = Math.min(9000, Math.max(3200, String(message).length * 60));
            setTimeout(() => {
                toast.classList.remove('toast-enter');
                toast.classList.add('toast-leave');
                setTimeout(() => toast.remove(), 220);
            }, duration);
        }

        /* ============ NOTIFICATIONS ============ */
        function pushNotification(text) {
            notifications.unshift({ id: uid(), text, date: Date.now() });
            notifications = notifications.slice(0, 30);
            localStorage.setItem('moramaths_notifications', JSON.stringify(notifications));
            cloudPush();
            renderNotifBell();
        }

        function sendAdminNotification() {
            const input = document.getElementById('admin-notif-text');
            const text = input.value.trim();
            if (!text) { showToast("Enter an announcement first", 'error'); return; }
            pushNotification(text);
            input.value = '';
            showToast("Announcement sent to all students!", 'success');
        }

        function getLastSeenNotifTime() {
            if (!currentUser) return 0;
            return Number(localStorage.getItem('moramaths_notif_seen_' + currentUser.username)) || 0;
        }

        function renderNotifBell() {
            const badge = document.getElementById('notif-badge');
            const list = document.getElementById('notif-list');
            if (!list) return;
            const lastSeen = getLastSeenNotifTime();
            const unread = notifications.filter(n => n.date > lastSeen).length;
            if (unread > 0) {
                badge.classList.remove('hidden');
                badge.innerText = unread > 9 ? '9+' : unread;
            } else {
                badge.classList.add('hidden');
            }
            const t = translations[currentLang];
            if (notifications.length === 0) {
                list.innerHTML = `<p class="text-center text-xs text-slate-500 py-6">${t.notifEmpty}</p>`;
                return;
            }
            list.innerHTML = notifications.map(n => `
                <div class="px-4 py-3 hover:bg-white/5 transition">
                    <p class="text-xs text-slate-200 leading-relaxed">${n.text}</p>
                    <p class="text-[10px] text-slate-500 mt-1">${new Date(n.date).toLocaleString()}</p>
                </div>
            `).join('');
        }

        function toggleNotifDropdown() {
            const dd = document.getElementById('notif-dropdown');
            const willShow = dd.classList.contains('hidden');
            dd.classList.toggle('hidden');
            if (willShow) {
                localStorage.setItem('moramaths_notif_seen_' + currentUser.username, Date.now());
                renderNotifBell();
            }
        }
        function closeNotifDropdown() { document.getElementById('notif-dropdown').classList.add('hidden'); }

        document.addEventListener('click', (e) => {
            const wrap = document.getElementById('notif-bell-wrap');
            if (wrap && !wrap.classList.contains('hidden') && !wrap.contains(e.target)) {
                closeNotifDropdown();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Escape') return;
            const otpEl = document.getElementById('otp-modal');
            if (otpEl && !otpEl.classList.contains('hidden')) closeOtpModal();
            const lessonCodeEl = document.getElementById('lesson-code-modal');
            if (lessonCodeEl && !lessonCodeEl.classList.contains('hidden')) closeLessonCodeModal();
            ['profile-modal', 'week-modal', 'quiz-modal', 'lesson-edit-modal'].forEach(id => {
                const el = document.getElementById(id);
                if (el && !el.classList.contains('hidden')) el.classList.add('hidden');
            });
            closeNotifDropdown();
        });

        /* ============ LEADERBOARD ============ */
        function computeUserStats(user) {
            const scores = Object.values(user.quizScores || {});
            const attempted = scores.length;
            const totalCorrect = scores.reduce((sum, s) => sum + s.correct, 0);
            const totalQuestions = scores.reduce((sum, s) => sum + s.total, 0);
            const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
            return { attempted, totalCorrect, totalQuestions, accuracy };
        }

        function renderLeaderboard() {
            const list = document.getElementById('leaderboard-list');
            const empty = document.getElementById('leaderboard-empty');
            const ranked = users
                .filter(u => u.username !== 'admin')
                .map(u => ({ user: u, stats: computeUserStats(u) }))
                .filter(r => r.stats.attempted > 0)
                .sort((a, b) => b.stats.totalCorrect - a.stats.totalCorrect || b.stats.accuracy - a.stats.accuracy);

            if (ranked.length === 0) {
                list.innerHTML = '';
                empty.classList.remove('hidden');
                return;
            }
            empty.classList.add('hidden');
            list.innerHTML = ranked.map((r, idx) => {
                const rank = idx + 1;
                const rankClass = rank === 1 ? 'rank-1' : rank === 2 ? 'rank-2' : rank === 3 ? 'rank-3' : 'bg-slate-800';
                const isMe = currentUser && r.user.username === currentUser.username;
                return `
                <div class="flex items-center gap-4 p-4 rounded-2xl border ${isMe ? 'border-indigo-500/60 bg-indigo-600/10' : 'border-slate-800/80 bg-[#0f0c1a]'} transition">
                    <div class="w-9 h-9 rounded-xl ${rankClass} flex items-center justify-center font-black text-xs text-slate-950 shrink-0">${rank <= 3 ? '<i class="fa-solid fa-medal"></i>' : rank}</div>
                    <div class="flex-1 min-w-0">
                        <p class="text-xs font-bold text-white truncate">${toTitleCase(r.user.fullname)} ${isMe ? '<span class="text-indigo-400">(You)</span>' : ''}</p>
                        <p class="text-[10px] text-slate-500">${r.stats.attempted} quizzes • ${r.stats.accuracy}% accuracy</p>
                    </div>
                    <div class="text-right shrink-0">
                        <p class="text-sm font-black text-yellow-400">${r.stats.totalCorrect}</p>
                        <p class="text-[9px] text-slate-500 uppercase tracking-wider">correct</p>
                    </div>
                </div>`;
            }).join('');
        }

        function toggleLeaderboardView() {
            const board = document.getElementById('leaderboard-section');
            const dash = document.getElementById('student-dashboard');
            const gameSec = document.getElementById('game-section');
            const showingBoard = board.classList.contains('hidden');
            if (showingBoard) {
                renderLeaderboard();
                board.classList.remove('hidden');
                if (gameSec) gameSec.classList.add('hidden');
                if (dash) dash.classList.add('hidden');
            } else {
                board.classList.add('hidden');
                if (currentUser && currentUser.username !== 'admin' && dash) dash.classList.remove('hidden');
            }
        }

        /* ============ 16-LEVEL MATH GAME ============ */
        let gameState = null;

        function getGameProgress() {
            if (!currentUser) return { unlocked: 1, scores: {} };
            if (!currentUser.gameProgress) currentUser.gameProgress = { unlocked: 1, scores: {} };
            return currentUser.gameProgress;
        }

        function saveGameProgress() {
            if (!currentUser) return;
            localStorage.setItem('moramaths_current_user', JSON.stringify(currentUser));
            const userIdx = users.findIndex(u => u.username === currentUser.username);
            if (userIdx !== -1) {
                users[userIdx].gameProgress = currentUser.gameProgress;
                localStorage.setItem('moramaths_users', JSON.stringify(users));
                cloudPush();
            }
        }

        function toggleGameView() {
            const gameSec = document.getElementById('game-section');
            const dash = document.getElementById('student-dashboard');
            const admin = document.getElementById('admin-panel');
            const board = document.getElementById('leaderboard-section');
            const showing = gameSec.classList.contains('hidden');
            if (showing) {
                if (board) board.classList.add('hidden');
                backToGameLevels();
                gameSec.classList.remove('hidden');
                if (dash) dash.classList.add('hidden');
                if (admin) admin.classList.add('hidden');
            } else {
                gameSec.classList.add('hidden');
                if (currentUser) {
                    if (isAdminUser(currentUser) && admin) admin.classList.remove('hidden');
                    else if (dash) dash.classList.remove('hidden');
                }
            }
        }

        function renderGameLevels() {
            const grid = document.getElementById('game-levels-grid');
            if (!grid) return;
            const progress = getGameProgress();
            grid.innerHTML = mathGameLevels.map((lvl, idx) => {
                const levelNum = idx + 1;
                const locked = levelNum > progress.unlocked;
                const score = progress.scores[levelNum];
                const title = currentLang === 'si' ? lvl.titleSi : lvl.titleEn;
                return `
                <div onclick="${locked ? '' : `startGameLevel(${idx})`}" class="relative ${locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-indigo-500/60 hover:-translate-y-0.5'} bg-[#0f0c1a] border border-slate-800 rounded-2xl p-4 transition space-y-2">
                    <div class="w-9 h-9 rounded-xl ${locked ? 'bg-slate-800' : 'bg-indigo-600/30 border border-indigo-500/40'} flex items-center justify-center text-sm ${locked ? 'text-slate-500' : 'text-yellow-300'}">
                        <i class="fa-solid ${locked ? 'fa-lock' : lvl.icon}"></i>
                    </div>
                    <p class="text-[11px] font-extrabold text-white leading-tight">Level ${levelNum}</p>
                    <p class="text-[10px] text-slate-400 leading-tight truncate">${title}</p>
                    ${score ? `<p class="text-[9px] font-bold ${score.correct === score.total ? 'text-emerald-400' : 'text-indigo-300'}">${score.correct}/${score.total} <i class="fa-solid fa-check"></i></p>` : ''}
                </div>`;
            }).join('');
        }

        function startGameLevel(idx) {
            const lvl = mathGameLevels[idx];
            if (!lvl) return;
            gameState = { levelIdx: idx, qIdx: 0, correct: 0, answered: false };
            document.getElementById('game-levels-grid').classList.add('hidden');
            document.getElementById('game-result-area').classList.add('hidden');
            document.getElementById('game-play-area').classList.remove('hidden');
            document.getElementById('game-level-label').innerText = `Level ${idx + 1} — ${currentLang === 'si' ? lvl.titleSi : lvl.titleEn}`;
            renderGameQuestion();
        }

        function renderGameQuestion() {
            const lvl = mathGameLevels[gameState.levelIdx];
            const q = lvl.questions[gameState.qIdx];
            gameState.answered = false;
            const t = translations[currentLang];
            document.getElementById('game-progress-label').innerText = `${currentLang === 'si' ? 'ප්‍රශ්නය' : 'Question'} ${gameState.qIdx + 1}/${lvl.questions.length}`;
            document.getElementById('game-score-label').innerText = `${currentLang === 'si' ? 'ලකුණු' : 'Score'}: ${gameState.correct}`;
            document.getElementById('game-progress-bar').style.width = `${(gameState.qIdx / lvl.questions.length) * 100}%`;
            document.getElementById('game-question-text').innerText = q.q;
            const optsWrap = document.getElementById('game-options');
            optsWrap.innerHTML = q.options.map((opt, oi) => `
                <div onclick="selectGameAnswer(${oi})" id="game-opt-${oi}" class="quiz-option cursor-pointer bg-[#0f0c1a] border border-slate-800 px-4 py-3 rounded-xl text-xs sm:text-sm text-slate-200">${opt}</div>
            `).join('');
            document.getElementById('game-next-wrap').classList.add('hidden');
        }

        function selectGameAnswer(oi) {
            if (!gameState || gameState.answered) return;
            gameState.answered = true;
            const lvl = mathGameLevels[gameState.levelIdx];
            const q = lvl.questions[gameState.qIdx];
            const opts = document.getElementById('game-options').children;
            [...opts].forEach((el, idx) => {
                if (idx === q.correct) el.classList.add('correct-answer');
                else if (idx === oi) el.classList.add('wrong-answer');
            });
            if (oi === q.correct) gameState.correct++;
            document.getElementById('game-score-label').innerText = `${currentLang === 'si' ? 'ලකුණු' : 'Score'}: ${gameState.correct}`;
            const isLast = gameState.qIdx === lvl.questions.length - 1;
            document.getElementById('game-next-btn').innerText = isLast
                ? (currentLang === 'si' ? 'ප්‍රතිඵලය බලන්න →' : 'View Result →')
                : (currentLang === 'si' ? 'ඊළඟ ප්‍රශ්නය →' : 'Next Question →');
            document.getElementById('game-next-wrap').classList.remove('hidden');
        }

        function nextGameQuestion() {
            const lvl = mathGameLevels[gameState.levelIdx];
            if (gameState.qIdx < lvl.questions.length - 1) {
                gameState.qIdx++;
                renderGameQuestion();
            } else {
                finishGameLevel();
            }
        }

        function finishGameLevel() {
            const lvl = mathGameLevels[gameState.levelIdx];
            const total = lvl.questions.length;
            const correct = gameState.correct;
            const passed = correct >= Math.ceil(total * 0.6);
            document.getElementById('game-progress-bar').style.width = '100%';
            document.getElementById('game-play-area').classList.add('hidden');
            document.getElementById('game-result-area').classList.remove('hidden');
            const icon = document.getElementById('game-result-icon');
            const title = document.getElementById('game-result-title');
            const scoreP = document.getElementById('game-result-score');
            const nextBtn = document.getElementById('game-next-level-btn');
            if (passed) {
                icon.className = 'w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400';
                icon.innerHTML = '<i class="fa-solid fa-trophy"></i>';
                title.innerText = currentLang === 'si' ? 'සුභ පැතුම්! මට්ටම සමත් විය' : 'Congratulations! Level Passed';
            } else {
                icon.className = 'w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-2xl bg-rose-500/20 border border-rose-500/40 text-rose-400';
                icon.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
                title.innerText = currentLang === 'si' ? 'තව ටිකක් උත්සාහ කරන්න!' : 'Try Again!';
            }
            scoreP.innerText = `${correct} / ${total} ${currentLang === 'si' ? 'නිවැරදියි' : 'correct'}`;

            if (currentUser) {
                const progress = getGameProgress();
                const levelNum = gameState.levelIdx + 1;
                const prevScore = progress.scores[levelNum];
                if (!prevScore || correct > prevScore.correct) {
                    progress.scores[levelNum] = { correct, total };
                }
                if (passed && progress.unlocked < levelNum + 1) {
                    progress.unlocked = Math.min(levelNum + 1, mathGameLevels.length);
                }
                saveGameProgress();
            }

            const hasNext = gameState.levelIdx < mathGameLevels.length - 1;
            nextBtn.classList.toggle('hidden', !(passed && hasNext));
            showToast(`${correct}/${total} — ${passed ? (currentLang === 'si' ? 'සමත්!' : 'Passed!') : (currentLang === 'si' ? 'නැවත උත්සාහ කරන්න' : 'Keep trying')}`, passed ? 'success' : 'info');
        }

        function retryGameLevel() {
            if (!gameState) return;
            startGameLevel(gameState.levelIdx);
        }

        function goToNextGameLevel() {
            if (!gameState) return;
            const nextIdx = gameState.levelIdx + 1;
            if (nextIdx < mathGameLevels.length) startGameLevel(nextIdx);
        }

        function backToGameLevels() {
            document.getElementById('game-result-area').classList.add('hidden');
            document.getElementById('game-play-area').classList.add('hidden');
            document.getElementById('game-levels-grid').classList.remove('hidden');
            renderGameLevels();
        }

        /* ============ QUIZ TAKING ============ */
        function findLesson(lessonId) {
            for (const w of weeksData) {
                const l = w.lessons.find(les => les.id === lessonId);
                if (l) return l;
            }
            return null;
        }

        function openQuizModal(lessonId) {
            const lesson = findLesson(lessonId);
            if (!lesson) return;
            const t = translations[currentLang];
            document.getElementById('quiz-modal-title').innerText = lesson.title;
            const body = document.getElementById('quiz-body');
            const footer = document.getElementById('quiz-footer');
            if (!lesson.quiz || lesson.quiz.length === 0) {
                body.innerHTML = `<p class="text-center text-xs text-slate-500 py-6">${t.quizNoQuestions}</p>`;
                footer.innerHTML = '';
                quizModalState = null;
            } else {
                quizModalState = { lessonId, answers: new Array(lesson.quiz.length).fill(null) };
                body.innerHTML = lesson.quiz.map((q, qi) => `
                    <div class="space-y-2">
                        <p class="text-xs font-bold text-slate-200">${qi + 1}. ${q.q}</p>
                        <div class="space-y-1.5" id="quiz-q-${qi}">
                            ${q.options.map((opt, oi) => `
                                <div onclick="selectQuizOption(${qi}, ${oi})" id="quiz-opt-${qi}-${oi}" class="quiz-option cursor-pointer bg-[#0f0c1a] border border-slate-800 px-3.5 py-2.5 rounded-xl text-xs text-slate-200">${opt}</div>
                            `).join('')}
                        </div>
                    </div>
                `).join('');
                footer.innerHTML = `<button onclick="submitQuiz()" class="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold py-3 rounded-xl transition shadow-xl cursor-pointer">${t.quizSubmit}</button>`;
            }
            document.getElementById('quiz-modal').classList.remove('hidden');
        }

        function selectQuizOption(qi, oi) {
            if (!quizModalState) return;
            quizModalState.answers[qi] = oi;
            const group = document.getElementById(`quiz-q-${qi}`);
            [...group.children].forEach((el, idx) => {
                el.classList.toggle('border-indigo-500', idx === oi);
                el.classList.toggle('bg-indigo-600/15', idx === oi);
            });
        }

        function closeQuizModal() {
            document.getElementById('quiz-modal').classList.add('hidden');
            quizModalState = null;
        }

        function submitQuiz() {
            if (!quizModalState || !currentUser) return;
            const lesson = findLesson(quizModalState.lessonId);
            if (!lesson) return;
            let correct = 0;
            lesson.quiz.forEach((q, qi) => {
                const chosen = quizModalState.answers[qi];
                const optEls = document.getElementById(`quiz-q-${qi}`).children;
                [...optEls].forEach((el, oi) => {
                    if (oi === q.correct) el.classList.add('correct-answer');
                    else if (oi === chosen) el.classList.add('wrong-answer');
                });
                if (chosen === q.correct) correct++;
            });
            const total = lesson.quiz.length;
            currentUser.quizScores[lesson.id] = { correct, total, date: Date.now() };
            localStorage.setItem('moramaths_current_user', JSON.stringify(currentUser));
            const userIdx = users.findIndex(u => u.username === currentUser.username);
            if (userIdx !== -1) {
                users[userIdx].quizScores = currentUser.quizScores;
                localStorage.setItem('moramaths_users', JSON.stringify(users));
                cloudPush();
            }
            const t = translations[currentLang];
            document.getElementById('quiz-footer').innerHTML = `
                <div class="w-full text-center space-y-3">
                    <p class="text-sm font-black text-white">${t.quizResultPrefix} ${correct} / ${total}</p>
                    <button onclick="closeQuizModal()" class="w-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-3 rounded-xl transition cursor-pointer">${t.quizClose}</button>
                </div>`;
            showToast(`${t.quizResultPrefix} ${correct}/${total}`, correct === total ? 'success' : 'info');
            if (total > 0 && correct === total) fireConfetti(50);
        }

        /* ============ ADMIN: WEEKS & LESSONS MANAGER ============ */
        function renderAdminWeeksManager() {
            const wrap = document.getElementById('admin-weeks-manager');
            if (!wrap) return;
            wrap.innerHTML = weeksData.map((w, wi) => `
                <div class="bg-[#0f0c1a] border border-slate-800 rounded-2xl p-4 space-y-3 shadow-inner">
                    <div class="flex items-center justify-between gap-2">
                        <input value="${w.title}" onchange="renameWeek(${wi}, this.value)" class="bg-transparent text-xs font-extrabold text-white flex-1 min-w-0 focus:outline-none focus:border-b focus:border-indigo-500">
                        <button onclick="toggleWeekLock(${wi})" class="shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-lg border ${w.isLocked ? 'bg-rose-500/10 text-rose-400 border-rose-500/30' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'} cursor-pointer transition">
                            <i class="fa-solid ${w.isLocked ? 'fa-lock' : 'fa-unlock'}"></i> ${w.isLocked ? 'Locked' : 'Unlocked'}
                        </button>
                    </div>
                    <div class="space-y-1.5">
                        ${w.lessons.map(l => `
                            <div class="flex items-center justify-between gap-2 bg-[#161224] border border-slate-800 rounded-xl px-3 py-2">
                                <span class="text-[11px] text-slate-300 truncate flex-1">${l.title} ${l.quiz && l.quiz.length ? `<span class="text-indigo-400">(${l.quiz.length}Q)</span>` : ''}</span>
                                <div class="flex gap-1.5 shrink-0">
                                    <button onclick="openLessonEditModal('${l.id}')" class="w-6 h-6 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center text-[10px] cursor-pointer transition"><i class="fa-solid fa-pen"></i></button>
                                    <button onclick="deleteLesson('${l.id}')" class="w-6 h-6 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center text-[10px] cursor-pointer transition"><i class="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        `).join('') || `<p class="text-[10px] text-slate-600 italic">No lessons yet</p>`}
                    </div>
                </div>
            `).join('');
        }

        function renameWeek(weekIdx, newTitle) {
            newTitle = newTitle.trim();
            if (!newTitle) { renderAdminWeeksManager(); return; }
            weeksData[weekIdx].title = newTitle;
            localStorage.setItem('moramaths_weeks', JSON.stringify(weeksData));
            cloudPush();
            renderWeeksGrid();
            populateAdminWeekSelect();
            populateQuizWeekSelect();
            showToast("Week title updated", 'success');
        }

        function toggleWeekLock(weekIdx) {
            weeksData[weekIdx].isLocked = !weeksData[weekIdx].isLocked;
            localStorage.setItem('moramaths_weeks', JSON.stringify(weeksData));
            cloudPush();
            renderWeeksGrid();
            renderAdminWeeksManager();
        }

        function deleteLesson(lessonId) {
            if (!confirm('Delete this lesson? This cannot be undone.')) return;
            weeksData.forEach(w => { w.lessons = w.lessons.filter(l => l.id !== lessonId); });
            localStorage.setItem('moramaths_weeks', JSON.stringify(weeksData));
            cloudPush();
            renderWeeksGrid();
            renderAdminWeeksManager();
            populateQuizWeekSelect();
            showToast("Lesson deleted", 'success');
        }

        let editingLessonId = null;
        function openLessonEditModal(lessonId) {
            const lesson = findLesson(lessonId);
            if (!lesson) return;
            editingLessonId = lessonId;
            document.getElementById('edit-lesson-title').value = lesson.title;
            document.getElementById('edit-lesson-pdf').value = lesson.pdf;
            document.getElementById('edit-lesson-code').value = lesson.lessonCode || '';
            const uploadLabel = document.getElementById('edit-pdf-upload-label');
            if (uploadLabel) {
                uploadLabel.innerText = (lesson.pdf && lesson.pdf.startsWith('data:'))
                    ? (currentLang === 'si' ? '✓ Uploaded file එකක් attach කර ඇත' : '✓ Uploaded file attached')
                    : (currentLang === 'si' ? 'PDF file එකක් upload කරන්න (optional)' : 'Upload a PDF file (optional)');
            }
            document.getElementById('lesson-edit-modal').classList.remove('hidden');
        }
        function closeLessonEditModal() {
            document.getElementById('lesson-edit-modal').classList.add('hidden');
            editingLessonId = null;
        }
        function saveLessonEdit() {
            const lesson = findLesson(editingLessonId);
            if (!lesson) return;
            const title = document.getElementById('edit-lesson-title').value.trim();
            if (!title) { showToast("Title cannot be empty", 'error'); return; }
            const prevTitle = lesson.title, prevPdf = lesson.pdf, prevCode = lesson.lessonCode;
            lesson.title = title;
            lesson.pdf = document.getElementById('edit-lesson-pdf').value.trim() || '#';
            lesson.lessonCode = document.getElementById('edit-lesson-code').value.trim();
            try {
                localStorage.setItem('moramaths_weeks', JSON.stringify(weeksData));
                cloudPush();
            } catch (err) {
                lesson.title = prevTitle; lesson.pdf = prevPdf; lesson.lessonCode = prevCode;
                showToast(currentLang === 'si' ? "Storage එක full! PDF file එක ලොකුයි — කුඩා file එකක් හෝ Link එකක් try කරන්න." : "Storage full! The PDF file is too large — try a smaller file or a link instead.", 'error');
                return;
            }
            renderWeeksGrid();
            renderAdminWeeksManager();
            closeLessonEditModal();
            showToast("Lesson updated", 'success');
        }

        /* ============ ADMIN: QUIZ BUILDER ============ */
        function populateQuizWeekSelect() {
            const select = document.getElementById('quiz-target-week');
            if (!select) return;
            select.innerHTML = weeksData.map((w, idx) => `<option value="${idx}">Week ${w.week} - ${w.title}</option>`).join('');
            populateQuizLessonSelect();
        }

        function populateQuizLessonSelect() {
            const weekIdx = document.getElementById('quiz-target-week').value;
            const select = document.getElementById('quiz-target-lesson');
            const lessons = weeksData[weekIdx] ? weeksData[weekIdx].lessons : [];
            select.innerHTML = lessons.map(l => `<option value="${l.id}">${l.title}</option>`).join('') || '<option value="">No lessons in this week</option>';
            renderQuizQuestionsList();
        }

        function addQuizQuestion() {
            const lessonId = document.getElementById('quiz-target-lesson').value;
            const lesson = findLesson(lessonId);
            if (!lesson) { showToast("Add a lesson to this week first", 'error'); return; }
            const q = document.getElementById('quiz-q-text').value.trim();
            const opts = [0, 1, 2, 3].map(i => document.getElementById(`quiz-opt-${i}`).value.trim());
            const correct = Number(document.getElementById('quiz-correct-idx').value);
            if (!q || opts.some(o => !o)) { showToast("Fill in the question and all 4 options", 'error'); return; }
            lesson.quiz.push({ q, options: opts, correct });
            localStorage.setItem('moramaths_weeks', JSON.stringify(weeksData));
            cloudPush();
            document.getElementById('quiz-q-text').value = '';
            [0, 1, 2, 3].forEach(i => document.getElementById(`quiz-opt-${i}`).value = '');
            renderQuizQuestionsList();
            renderAdminWeeksManager();
            showToast("Question added to quiz", 'success');
        }

        function renderQuizQuestionsList() {
            const lessonId = document.getElementById('quiz-target-lesson').value;
            const lesson = findLesson(lessonId);
            const wrap = document.getElementById('quiz-questions-list');
            if (!lesson || !lesson.quiz.length) { wrap.innerHTML = '<p class="text-[10px] text-slate-600 italic">No questions yet for this lesson.</p>'; return; }
            wrap.innerHTML = lesson.quiz.map((q, qi) => `
                <div class="flex items-center justify-between gap-2 bg-[#161224] border border-slate-800 rounded-xl px-3 py-2">
                    <span class="text-[11px] text-slate-300 truncate">${qi + 1}. ${q.q}</span>
                    <button onclick="deleteQuizQuestion('${lessonId}', ${qi})" class="w-6 h-6 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center text-[10px] cursor-pointer transition shrink-0"><i class="fa-solid fa-trash"></i></button>
                </div>
            `).join('');
        }

        function deleteQuizQuestion(lessonId, qi) {
            const lesson = findLesson(lessonId);
            if (!lesson) return;
            lesson.quiz.splice(qi, 1);
            localStorage.setItem('moramaths_weeks', JSON.stringify(weeksData));
            cloudPush();
            renderQuizQuestionsList();
            renderAdminWeeksManager();
        }

        /* ============ ADMIN: USERS MANAGER ============ */
        function renderAdminUsersList() {
            const wrap = document.getElementById('admin-users-list');
            if (!wrap) return;
            const students = users.filter(u => !isAdminUser(u));
            document.getElementById('admin-user-count').innerText = students.length;
            if (!students.length) { wrap.innerHTML = '<p class="text-[10px] text-slate-600 italic">No students registered yet.</p>'; return; }
            wrap.innerHTML = students.map(u => {
                const stats = computeUserStats(u);
                return `
                <div class="flex items-center justify-between gap-3 bg-[#0f0c1a] border border-slate-800 rounded-xl px-4 py-3">
                    <div class="min-w-0">
                        <p class="text-xs font-bold text-white truncate">${toTitleCase(u.fullname)} <span class="text-slate-500 font-normal">@${u.username}</span></p>
                        <p class="text-[10px] text-slate-500 truncate">${u.email} • ${stats.attempted} quizzes • ${stats.accuracy}% accuracy</p>
                    </div>
                    <button onclick="deleteUser('${u.username}')" class="shrink-0 w-7 h-7 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center text-[10px] cursor-pointer transition"><i class="fa-solid fa-user-slash"></i></button>
                </div>`;
            }).join('');
        }

        function deleteUser(username) {
            if (!confirm(`Remove student "${username}"? This cannot be undone.`)) return;
            users = users.filter(u => u.username !== username);
            localStorage.setItem('moramaths_users', JSON.stringify(users));
            cloudPush();
            renderAdminUsersList();
            showToast("Student removed", 'success');
        }

        /* ============ ADMIN: ACCOUNTS (Master Admin only) ============ */
        function renderAdminAccountsList() {
            const wrap = document.getElementById('admin-accounts-list');
            if (!wrap) return;
            const admins = users.filter(u => isAdminUser(u));
            wrap.innerHTML = admins.map(u => {
                const isMaster = u.role === 'master_admin';
                const isSelf = currentUser && u.username === currentUser.username;
                return `
                <div class="flex items-center justify-between gap-3 bg-[#161224] border border-slate-800 rounded-xl px-4 py-3">
                    <div class="min-w-0">
                        <p class="text-xs font-bold text-white truncate">${toTitleCase(u.fullname)} <span class="text-slate-500 font-normal">@${u.username}</span> ${isSelf ? '<span class="text-indigo-400">(You)</span>' : ''}</p>
                        <p class="text-[10px] mt-0.5"><span class="${isMaster ? 'text-yellow-300' : 'text-emerald-300'} font-bold uppercase tracking-wider">${isMaster ? 'Master Admin' : 'Admin'}</span></p>
                    </div>
                    <div class="flex gap-1.5 shrink-0">
                        ${(!isMaster) ? `<button onclick="demoteAdmin('${u.username}')" title="Demote to Student" class="w-7 h-7 rounded-lg bg-slate-800 hover:bg-amber-600 text-slate-300 hover:text-white flex items-center justify-center text-[10px] cursor-pointer transition"><i class="fa-solid fa-arrow-down"></i></button>
                        <button onclick="deleteAdminAccount('${u.username}')" title="Delete Admin" class="w-7 h-7 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center text-[10px] cursor-pointer transition"><i class="fa-solid fa-user-slash"></i></button>` : `<span class="text-[9px] text-slate-600 italic pr-1">Protected</span>`}
                    </div>
                </div>`;
            }).join('');
        }

        function createAdminAccount() {
            const fullname = toTitleCase(document.getElementById('new-admin-name').value.trim());
            const username = document.getElementById('new-admin-username').value.trim().toLowerCase();
            const password = document.getElementById('new-admin-password').value.trim();
            if (!fullname || !username || !password) { showToast("Fill in all fields to add an admin", 'error'); return; }
            if (users.some(u => u.username.toLowerCase() === username)) { showToast("Username already in use", 'error'); return; }
            users.push({ fullname, email: `${username}@moramaths.lk`, username, password, role: 'admin', quizScores: {}, gameProgress: { unlocked: 1, scores: {} } });
            localStorage.setItem('moramaths_users', JSON.stringify(users));
            cloudPush();
            document.getElementById('new-admin-name').value = '';
            document.getElementById('new-admin-username').value = '';
            document.getElementById('new-admin-password').value = '';
            renderAdminAccountsList();
            showToast(`Admin account "${username}" created`, 'success');
        }

        function demoteAdmin(username) {
            const u = users.find(x => x.username === username);
            if (!u || u.role === 'master_admin') return;
            if (!confirm(`Demote "${username}" back to a regular student account?`)) return;
            u.role = 'student';
            localStorage.setItem('moramaths_users', JSON.stringify(users));
            cloudPush();
            renderAdminAccountsList();
            renderAdminUsersList();
            showToast("Admin demoted to student", 'success');
        }

        function deleteAdminAccount(username) {
            const u = users.find(x => x.username === username);
            if (!u || u.role === 'master_admin') return;
            if (!confirm(`Permanently remove admin "${username}"? This cannot be undone.`)) return;
            users = users.filter(x => x.username !== username);
            localStorage.setItem('moramaths_users', JSON.stringify(users));
            cloudPush();
            renderAdminAccountsList();
            showToast("Admin account removed", 'success');
        }

        /* ============ ADMIN: SITE APPEARANCE ============ */
        function renderAdminAppearanceForm() {
            const heroInput = document.getElementById('admin-hero-image');
            const bannerInput = document.getElementById('admin-dashboard-banner');
            if (heroInput) heroInput.value = siteAssets.heroImage || '';
            if (bannerInput) bannerInput.value = siteAssets.dashboardBanner || '';
            renderAdminAccountsList();
        }

        function saveSiteAppearance() {
            siteAssets.heroImage = document.getElementById('admin-hero-image').value.trim();
            siteAssets.dashboardBanner = document.getElementById('admin-dashboard-banner').value.trim();
            localStorage.setItem('moramaths_site_assets', JSON.stringify(siteAssets));
            cloudPush();
            applySiteAssets();
            showToast("Site appearance updated!", 'success');
        }

        /* ============ BACKUP & RESTORE (Master Admin only) ============ */
        function exportSiteData() {
            const backup = {
                exportedAt: new Date().toISOString(),
                users, weeksData, zoomData, notifications, siteAssets
            };
            const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `moramaths-backup-${new Date().toISOString().slice(0, 10)}.json`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
            showToast("Backup downloaded!", 'success');
        }

        function importSiteData(input) {
            const file = input.files[0];
            if (!file) return;
            if (!confirm("Restoring a backup will replace ALL current data (users, lessons, quizzes, settings). Continue?")) { input.value = ''; return; }
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (!data.users || !data.weeksData) throw new Error('Invalid backup file');
                    users = data.users;
                    weeksData = data.weeksData;
                    zoomData = data.zoomData || zoomData;
                    notifications = data.notifications || notifications;
                    siteAssets = data.siteAssets || siteAssets;
                    localStorage.setItem('moramaths_users', JSON.stringify(users));
                    localStorage.setItem('moramaths_weeks', JSON.stringify(weeksData));
                    localStorage.setItem('moramaths_zoom', JSON.stringify(zoomData));
                    localStorage.setItem('moramaths_notifications', JSON.stringify(notifications));
                    localStorage.setItem('moramaths_site_assets', JSON.stringify(siteAssets));
                    cloudPush();
                    showToast("Backup restored successfully! Reloading...", 'success');
                    setTimeout(() => location.reload(), 1200);
                } catch (err) {
                    showToast("Invalid backup file — restore failed", 'error');
                }
            };
            reader.readAsText(file);
            input.value = '';
        }

        function applySiteAssets() {
            const heroSlot = document.getElementById('auth-hero-visual');
            if (heroSlot) {
                heroSlot.innerHTML = siteAssets.heroImage
                    ? `<img src="${siteAssets.heroImage}" alt="MoraMaths" class="w-full h-full object-cover rounded-3xl">`
                    : defaultHeroIllustrationSVG;
            }
            const banner = document.getElementById('dashboard-banner-layer');
            if (banner) {
                if (siteAssets.dashboardBanner) {
                    banner.style.backgroundImage = `url('${siteAssets.dashboardBanner}')`;
                    banner.style.backgroundSize = 'cover';
                    banner.style.backgroundPosition = 'center';
                    banner.style.opacity = '0.25';
                } else {
                    banner.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(defaultBannerPatternSVG)}")`;
                    banner.style.backgroundSize = '340px';
                    banner.style.opacity = '0.5';
                }
            }
        }

        window.onload = bootstrapApp;
    </script>
</body>
</html>
