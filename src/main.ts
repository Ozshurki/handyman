import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans transition-colors duration-300">
  <!-- Navbar -->
  <header class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
    <!-- POC Announcement Bar -->
    <div class="bg-amber-500 text-slate-950 text-center py-2 px-4 text-xs sm:text-sm font-extrabold tracking-wide border-b border-amber-600/30 flex items-center justify-center gap-2">
      <span class="animate-pulse">⚠️</span>
      <span>הוכחת יכולת (POC) בלבד — האתר אינו פעיל לציבור הרחב</span>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <div class="bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 p-2.5 rounded-2xl shadow-md shadow-amber-500/20 flex items-center justify-center">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
             <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </div>
        <span class="font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">נתנאל <span class="text-amber-500">הנדימן</span></span>
      </div>
      
      <!-- Actions (Nav Links & Theme Switcher) -->
      <div class="flex items-center gap-4 sm:gap-8">
        <!-- Nav Links -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#hero" class="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200">ראשי</a>
          <a href="#about" class="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200">עלי</a>
          <a href="#services" class="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200">שירותים</a>
          <a href="#before-after" class="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200">השוואה</a>
          <a href="#gallery" class="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200">פרויקטים</a>
          <a href="#contact" class="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200">צור קשר</a>
        </nav>
        
        <!-- Theme Toggle Button -->
        <button id="theme-toggle" type="button" class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 cursor-pointer" aria-label="Toggle theme">
          <!-- Sun Icon (shows in dark mode) -->
          <svg class="hidden dark:block w-5 h-5 text-amber-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m0 13.5V21M4.75 12h2.25m11 0h2.25m-15.03-6.03l1.59 1.59m10.88 10.88l1.59 1.59m-14.06 0l1.59-1.59M17.44 6.16l1.59-1.59M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
          </svg>
          <!-- Moon Icon (shows in light mode) -->
          <svg class="block dark:hidden w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
     <!-- Abstract grid background -->
     <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
     
     <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Content -->
        <div class="lg:col-span-7 text-center lg:text-start space-y-6 sm:space-y-8">
           <span class="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full text-xs sm:text-sm font-medium bg-amber-500/10 text-amber-400 ring-1 ring-inset ring-amber-500/20">
              מקצועיות · אמינות · יחס אישי
           </span>
           <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              מתקנים, בונים ומשפרים <br/>
              <span class="text-amber-500">בידיים מקצועיות</span>
           </h1>
           <p class="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              פתרונות הנדימן מהירים, אמינים ובגימור מושלם לבית ולמשרד. עבודה יסודית ללא פשרות, תוך שמירה על סדר וניקיון ומחירים הוגנים.
           </p>
           
           <!-- Feature list in Hero -->
           <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-start max-w-lg mx-auto lg:mx-0">
              <div class="flex items-center gap-3">
                 <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                 </div>
                 <span class="text-sm font-medium text-slate-200">10+ שנות ניסיון</span>
              </div>
              <div class="flex items-center gap-3">
                 <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                 </div>
                 <span class="text-sm font-medium text-slate-200">מחירים הוגנים ושקופים</span>
              </div>
              <div class="flex items-center gap-3">
                 <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                 </div>
                 <span class="text-sm font-medium text-slate-200">אחריות על כל עבודה</span>
              </div>
           </div>
        </div>
        
        <!-- Graphic Panel (Modern SVG Tool Bench mockup) -->
        <div class="lg:col-span-5 flex justify-center relative">
           <div class="relative w-full max-w-[400px] aspect-square rounded-3xl bg-slate-800 border border-slate-700 dark:border-slate-800 p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
              <!-- Decorative circles -->
              <div class="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl"></div>
              <div class="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"></div>
              
              <!-- Blueprint Grid Lines -->
              <div class="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20"></div>
              
              <!-- Inner Graphic elements -->
              <div class="relative z-10 flex-grow flex flex-col justify-center items-center gap-6">
                 <!-- Central Tool Icon Composition -->
                 <div class="w-24 h-24 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shadow-inner">
                    <svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.65 2.65 0 1021 17.25l-5.87-5.83m-3.71-3.71L5.83 1.75A2.65 2.65 0 101.75 5.83l5.83 5.87m3.71-3.71l3.71-3.71m-3.71 3.71L5.83 17.25a2.65 2.65 0 104.17 4.17l5.87-5.83m-4.63-4.63l.79-.79M17 7l-1.5 1.5M10.5 5.5l1.5-1.5" />
                    </svg>
                 </div>
                 
                 <div class="text-center space-y-2">
                    <div class="text-xs font-bold text-amber-400 tracking-widest uppercase">Netanel Handyman</div>
                    <div class="text-lg font-extrabold text-white">פרופיל מקצועי POC</div>
                    <div class="text-xs text-slate-400">פתרון מושלם לכל משימה בבית</div>
                 </div>
              </div>
              
              <!-- Tech badge -->
              <div class="relative z-10 flex items-center justify-between border-t border-slate-700/60 dark:border-slate-800/80 pt-4 mt-4 text-slate-400 text-xs">
                 <span>רמת שירות VIP</span>
                 <span class="flex items-center gap-1.5 text-emerald-400">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    זמין לעבודות באזור ירושלים
                 </span>
              </div>
           </div>
        </div>
     </div>
  </section>

  <!-- About Me Section -->
  <section id="about" class="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
     <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
           <!-- Side Image/Graphic -->
           <div class="lg:col-span-5 flex justify-center">
              <div class="relative">
                 <div class="absolute inset-0 bg-amber-500 rounded-3xl rotate-3 scale-102 opacity-10"></div>
                 <div class="relative border-4 border-slate-900 dark:border-slate-800 bg-slate-900 dark:bg-slate-950 text-white rounded-3xl p-8 max-w-[360px] aspect-[4/5] flex flex-col justify-between shadow-xl">
                    <div class="space-y-4">
                       <div class="text-amber-500">
                          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.161 2.51-5.142 4.629 1.95.385 3.42 2.11 3.42 4.195 0 2.454-1.956 4.31-4.225 4.31-2.91 0-5.037-1.742-5.037-3.535zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.161 2.51-5.142 4.629 1.95.385 3.42 2.11 3.42 4.195 0 2.454-1.956 4.31-4.225 4.31-2.91 0-5.037-1.742-5.037-3.535z"/></svg>
                       </div>
                       <p class="text-lg font-medium leading-relaxed italic text-slate-100">
                          "אני מאמין שתיקון קטן בבית משנה את כל האווירה. לכן אני מתייחס לכל תליית מדף או תיקון ברז כאילו זה נעשה בבית שלי."
                       </p>
                    </div>
                    <div class="border-t border-slate-800 dark:border-slate-900 pt-4 mt-6">
                       <p class="font-extrabold text-white text-base">נתנאל — הנדימן מקצועי</p>
                       <p class="text-slate-400 text-xs font-medium">מעל 10 שנות ניסיון בשטח</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <!-- Content -->
           <div class="lg:col-span-7 space-y-6 sm:space-y-8">
              <div class="space-y-3">
                 <span class="text-sm font-bold text-amber-600 dark:text-amber-500 tracking-wider uppercase font-semibold">קצת עלי</span>
                 <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                    שירותי הנדימן עם אבא ואמא — <br/> מקצועיות ואמינות ללא פשרות
                 </h2>
              </div>
              <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                 נעים להכיר! שמי נתנאל, ואני מספק שירותי הנדימן מתקדמים ללקוחות פרטיים ועסקיים. לאורך השנים סייעתי למאות לקוחות ליהנות מבית מתפקד ומעוצב יותר באמצעות פתרון בעיות יעיל, התקנות מדויקות ותיקונים יסודיים.
              </p>
              <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                 עבורי, עבודת הנדימן היא לא רק "לברג וללכת". זוהי מחויבות לאיכות, שימוש בחומרי הגלם הטובים ביותר, שמירה על סדר וניקיון מופתי, ומעל הכל — מתן שירות אמין ונעים במחיר הוגן שנקבע מראש.
              </p>
              
              <!-- Value Cards Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                 <div class="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 hover:border-amber-500/20 dark:hover:border-amber-400/20 transition-all duration-300 shadow-sm">
                    <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                       <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <h3 class="font-bold text-slate-900 dark:text-white text-sm mb-1">אמינות ויושרה</h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">שקיפות מלאה מול הלקוח, תמחור הוגן וידוע מראש ללא הפתעות.</p>
                 </div>
                 <div class="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 hover:border-amber-500/20 dark:hover:border-amber-400/20 transition-all duration-300 shadow-sm">
                    <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                       <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <h3 class="font-bold text-slate-900 dark:text-white text-sm mb-1">עמידה בזמנים</h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">מגיע בדיוק בזמן שנקבע, מתקתק עבודה ומכבד את הזמן שלכם.</p>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-200/50 dark:border-slate-900/60 transition-colors duration-300">
     <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
           <span class="text-sm font-bold text-amber-600 dark:text-amber-500 tracking-wider uppercase font-semibold">מה אני מציע</span>
           <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">מגוון פתרונות תחת קורת גג אחת</h2>
           <p class="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              מתיקון ברז דולף ועד להרכבת מערכות ריהוט מורכבות. אני מתמחה בכל סוגי התיקונים הקלים והתקנות הבית.
           </p>
        </div>
        
        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <!-- Card 1 -->
           <div class="group bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-amber-500/30 dark:hover:border-amber-400/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                 <!-- Icon Faucet -->
                 <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9.75" />
                    </svg>
                 </div>
                 <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mb-3">תיקוני אינסטלציה</h3>
                 <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-6">
                    פתרונות מהירים לבעיות מים ואיטום בבית ובמשרד. שמירה על תפקוד תקין של מערכות המים.
                 </p>
                 <ul class="space-y-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/60 pt-4">
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       החלפת ברזים וסוללות
                    </li>
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       תיקון נזילות קלות וסיפונים
                    </li>
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       התקנת אביזרי אמבטיה ומקלחונים
                    </li>
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       איטום בסיליקון ורובה
                    </li>
                 </ul>
              </div>
           </div>
           
           <!-- Card 2 -->
           <div class="group bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-amber-500/30 dark:hover:border-amber-400/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                 <!-- Icon Electricity -->
                 <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                 </div>
                 <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mb-3">חשמל ותאורה</h3>
                 <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-6">
                    התקנות גופים מעוצבים ופתרונות חשמל קלים בהתאמה מדויקת ובטיחותית.
                 </p>
                 <ul class="space-y-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/60 pt-4">
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       התקנת גופי תאורה ונברשות
                    </li>
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       החלפת שקעים, מפסקים ותקעים
                    </li>
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       תליית טלוויזיות וזרועות קיר
                    </li>
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       התקנת מאווררי תקרה
                    </li>
                 </ul>
              </div>
           </div>
           
           <!-- Card 3 -->
           <div class="group bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-amber-500/30 dark:hover:border-amber-400/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                 <!-- Icon Carpentry/Furniture -->
                 <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.65 2.65 0 1021 17.25l-5.87-5.83m-3.71-3.71L5.83 1.75A2.65 2.65 0 101.75 5.83l5.83 5.87m3.71-3.71l3.71-3.71m-3.71 3.71L5.83 17.25a2.65 2.65 0 104.17 4.17l5.87-5.83" />
                    </svg>
                 </div>
                 <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mb-3">הרכבת רהיטים ונגרות</h3>
                 <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-6">
                    הרכבה מדויקת של רהיטי איקאה, ארונות, שולחנות וכל סוגי הריהוט המפורק.
                 </p>
                 <ul class="space-y-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/60 pt-4">
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       הרכבת רהיטי איקאה (IKEA)
                    </li>
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       תיקון וכיוון דלתות ארון ומגירות
                    </li>
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       התקנת ספריות, מדפים וקיר גלריה
                    </li>
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       חידוש קל והתאמת ריהוט קיים
                    </li>
                 </ul>
              </div>
           </div>
           
           <!-- Card 4 -->
           <div class="group bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-amber-500/30 dark:hover:border-amber-400/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                 <!-- Icon General Repairs -->
                 <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205v3m-6-10.5v3m-6-1.5v3" />
                    </svg>
                 </div>
                 <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mb-3">תיקונים כלליים ותלייה</h3>
                 <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-6">
                    תליית מראות, תמונות, וילונות, התקנת רשתות וחידוש קירות בגבס וצבע.
                 </p>
                 <ul class="space-y-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/60 pt-4">
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       תליית תמונות, מראות ווילונות
                    </li>
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       החלפת ידיות ומנעולים לדלתות
                    </li>
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       תיקוני חורים בקירות וצבע קל
                    </li>
                    <li class="flex items-center gap-2">
                       <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                       התקנת רשתות לחלונות ודלתות
                    </li>
                 </ul>
              </div>
           </div>
        </div>
     </div>
  </section>

  <!-- Before/After Comparison Section -->
  <section id="before-after" class="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
     <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
           <span class="text-sm font-bold text-amber-600 dark:text-amber-500 tracking-wider uppercase font-semibold">השוואת עבודות</span>
           <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">לפני ואחרי — רואים את השינוי בעיניים</h2>
           <p class="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              הצגת תהליך השיקום והשיפוץ דרך פרויקטים אמיתיים. לחץ על כפתור "לפני" ו-"אחרי" על גבי הכרטיסיות כדי להשוות בין המצבים.
           </p>
        </div>
        
        <!-- Before/After Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <!-- Card 1 -->
           <div class="before-after-card bg-white dark:bg-slate-955 border border-slate-200/60 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div class="relative aspect-[4/3] bg-slate-955 flex items-center justify-center p-6 overflow-hidden">
                 <!-- Before SVG -->
                 <div class="before-view absolute inset-0 transition-opacity duration-500 opacity-0 flex items-center justify-center bg-slate-900">
                    <svg class="w-full h-full p-8 text-slate-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1">
                       <!-- Damaged/moldy wall illustration -->
                       <rect x="5" y="5" width="90" height="90" rx="8" fill="#334155" stroke="#475569" stroke-width="2"/>
                       <!-- Mold splotches -->
                       <circle cx="25" cy="30" r="10" fill="#1e293b" opacity="0.8"/>
                       <circle cx="30" cy="25" r="8" fill="#1e293b" opacity="0.6"/>
                       <circle cx="70" cy="65" r="12" fill="#1e293b" opacity="0.8"/>
                       <circle cx="78" cy="60" r="6" fill="#1e293b" opacity="0.5"/>
                       <!-- Crack lines -->
                       <path d="M10 20 L25 40 L35 38 L45 60 L60 55" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
                       <path d="M90 70 L75 55 L65 58 L55 40" stroke="#ef4444" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
                       <text x="50" y="85" fill="#f87171" font-size="6" text-anchor="middle" font-weight="bold" letter-spacing="1">סדקים ועובש פעיל</text>
                    </svg>
                 </div>
                 <!-- After SVG -->
                 <div class="after-view absolute inset-0 transition-opacity duration-500 opacity-100 flex items-center justify-center bg-slate-900">
                    <svg class="w-full h-full p-8 text-slate-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1">
                       <!-- Restored wall with roller paint -->
                       <rect x="5" y="5" width="90" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
                       <!-- Clean blue paint strip -->
                       <path d="M10 10 L50 10 L50 80 L10 80 Z" fill="#e0f2fe" opacity="0.7"/>
                       <path d="M50 10 L50 80" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="4"/>
                       <!-- Roller icon -->
                       <rect x="42" y="30" width="16" height="8" rx="2" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>
                       <path d="M50 38 L50 55 L45 55" stroke="#64748b" stroke-width="1.5" stroke-linecap="round"/>
                       <text x="50" y="85" fill="#0ea5e9" font-size="6" text-anchor="middle" font-weight="bold">קילוף, איטום וצבע אנטי-פטרייתי</text>
                    </svg>
                 </div>
                 
                 <!-- Badges -->
                 <span class="absolute top-4 right-4 bg-rose-500 text-white text-xs font-bold px-2.5 py-1 rounded-full before-badge hidden">לפני</span>
                 <span class="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full after-badge">אחרי</span>
              </div>
              <div class="p-6 space-y-4">
                 <div class="flex items-center justify-between gap-4">
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white">שיקום קיר ועובש באמבטיה</h3>
                    <!-- Controls -->
                    <div class="flex rounded-lg bg-slate-100 dark:bg-slate-800 p-1 text-[11px] font-bold shrink-0">
                       <button class="toggle-before px-3 py-1 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">לפני</button>
                       <button class="toggle-after px-3 py-1 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm transition-colors cursor-pointer">אחרי</button>
                    </div>
                 </div>
                 <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    <strong>האתגר:</strong> קיר חדר רחצה מוכה עובש שחור, טיח מתקלף ורטיבות פעילה כתוצאה מנזילת צנרת.
                    <br/>
                    <strong>הפתרון:</strong> איתור וחידוש הצנרת, קילוף הטיח הנגוע, חיטוי אנטי-פטרייתי עמוק, טיח גבס עמיד מים וצביעה בצבע נוגד עובש.
                 </p>
              </div>
           </div>
           
           <!-- Card 2 -->
           <div class="before-after-card bg-white dark:bg-slate-955 border border-slate-200/60 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div class="relative aspect-[4/3] bg-slate-955 flex items-center justify-center p-6 overflow-hidden">
                 <!-- Before SVG -->
                 <div class="before-view absolute inset-0 transition-opacity duration-500 opacity-0 flex items-center justify-center bg-slate-900">
                    <svg class="w-full h-full p-8 text-slate-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1">
                       <rect x="5" y="5" width="90" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                       <!-- Messy exposed pipes and tiles -->
                       <path d="M50 40 L50 85 M42 40 L42 85" stroke="#94a3b8" stroke-width="2.5"/>
                       <circle cx="50" cy="55" r="4" fill="#ef4444" opacity="0.9"/>
                       <!-- dripping water -->
                       <path d="M50 59 L50 63 C50 65 48 65 48 63 Z" fill="#38bdf8"/>
                       <path d="M50 72 L50 75" stroke="#38bdf8" stroke-linecap="round"/>
                       <!-- Broken tiles outline -->
                       <path d="M15 45 L35 45 M15 65 L35 65" stroke="#ef4444" stroke-width="0.8" stroke-dasharray="2"/>
                       <text x="50" y="25" fill="#f87171" font-size="6" text-anchor="middle" font-weight="bold">צנרת חשופה וברזים מיושנים</text>
                    </svg>
                 </div>
                 <!-- After SVG -->
                 <div class="after-view absolute inset-0 transition-opacity duration-500 opacity-100 flex items-center justify-center bg-slate-900">
                    <svg class="w-full h-full p-8 text-slate-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1">
                       <rect x="5" y="5" width="90" height="90" rx="8" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>
                       <!-- Stylish vanity unit -->
                       <rect x="25" y="45" width="50" height="30" rx="4" fill="#1e293b" stroke="#f59e0b" stroke-width="1"/>
                       <!-- Drawer lines -->
                       <line x1="25" y1="60" x2="75" y2="60" stroke="#f59e0b" stroke-width="0.5"/>
                       <!-- Vessel Sink -->
                       <path d="M35 45 C35 38 65 38 65 45 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
                       <!-- Mirror -->
                       <circle cx="50" cy="22" r="14" fill="#38bdf8" opacity="0.3" stroke="#cbd5e1" stroke-width="1"/>
                       <!-- Modern Faucet -->
                       <path d="M50 38 L50 32 L47 32" stroke="#64748b" stroke-width="1.5" stroke-linecap="round"/>
                       <text x="50" y="87" fill="#f59e0b" font-size="5" text-anchor="middle" font-weight="bold">ארון מעוצב, כיור מונח וברז יוקרתי</text>
                    </svg>
                 </div>
                 
                 <!-- Badges -->
                 <span class="absolute top-4 right-4 bg-rose-500 text-white text-xs font-bold px-2.5 py-1 rounded-full before-badge hidden">לפני</span>
                 <span class="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full after-badge">אחרי</span>
              </div>
              <div class="p-6 space-y-4">
                 <div class="flex items-center justify-between gap-4">
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white">התקנת ארון אמבטיה מעוצב</h3>
                    <!-- Controls -->
                    <div class="flex rounded-lg bg-slate-100 dark:bg-slate-800 p-1 text-[11px] font-bold shrink-0">
                       <button class="toggle-before px-3 py-1 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">לפני</button>
                       <button class="toggle-after px-3 py-1 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm transition-colors cursor-pointer">אחרי</button>
                    </div>
                 </div>
                 <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    <strong>האתגר:</strong> חדר רחצה מיושן עם צנרת מים חשופה ומטפטפת, ללא מקום אחסון וכיור סדוק ומיושן.
                    <br/>
                    <strong>הפתרון:</strong> תיקון והסתרת הצנרת, התקנת יחידת ארון אמבטיה תלויה ומעוצבת, כיור חרסינה מונח, ברז שחור מט ומראה תואמת.
                 </p>
              </div>
           </div>
           
           <!-- Card 3 -->
           <div class="before-after-card bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div class="relative aspect-[4/3] bg-slate-950 flex items-center justify-center p-6 overflow-hidden">
                 <!-- Before SVG -->
                 <div class="before-view absolute inset-0 transition-opacity duration-500 opacity-0 flex items-center justify-center bg-slate-900">
                    <svg class="w-full h-full p-8 text-slate-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1">
                       <rect x="5" y="5" width="90" height="90" rx="8" fill="#334155" stroke="#475569" stroke-width="2"/>
                       <!-- Cracked floor pattern -->
                       <path d="M10 30 L90 30 M10 60 L90 60 M30 10 L30 90 M60 10 L60 90" stroke="#1e293b" stroke-width="1"/>
                       <!-- Crack marks -->
                       <path d="M25 25 L35 35 M50 50 L65 55 M55 58 L45 70" stroke="#f87171" stroke-width="1.5" stroke-linecap="round"/>
                       <!-- Weeds -->
                       <path d="M30 60 L28 50 L32 45" stroke="#22c55e" stroke-width="1" stroke-linecap="round"/>
                       <path d="M60 30 L64 22 M60 30 L56 24" stroke="#22c55e" stroke-width="0.8" stroke-linecap="round"/>
                       <text x="50" y="85" fill="#f87171" font-size="6" text-anchor="middle" font-weight="bold">אריחים סדוקים ועשבייה שוטה</text>
                    </svg>
                 </div>
                 <!-- After SVG -->
                 <div class="after-view absolute inset-0 transition-opacity duration-500 opacity-100 flex items-center justify-center bg-slate-900">
                    <svg class="w-full h-full p-8 text-slate-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1">
                       <rect x="5" y="5" width="90" height="90" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
                       <!-- Clean wooden deck pattern -->
                       <path d="M10 15 H90 M10 25 H90 M10 35 H90 M10 45 H90 M10 55 H90 M10 65 H90 M10 75 H90 M10 85 H90" stroke="#b45309" stroke-width="3"/>
                       <!-- Nails/screws details on wood -->
                       <circle cx="15" cy="20" r="0.5" fill="#475569"/>
                       <circle cx="85" cy="20" r="0.5" fill="#475569"/>
                       <circle cx="15" cy="30" r="0.5" fill="#475569"/>
                       <circle cx="85" cy="30" r="0.5" fill="#475569"/>
                       <circle cx="15" cy="40" r="0.5" fill="#475569"/>
                       <circle cx="85" cy="40" r="0.5" fill="#475569"/>
                       <text x="50" y="87" fill="#f59e0b" font-size="5" text-anchor="middle" font-weight="bold">דק עץ אורן יוקרתי ומפולס</text>
                    </svg>
                 </div>
                 
                 <!-- Badges -->
                 <span class="absolute top-4 right-4 bg-rose-500 text-white text-xs font-bold px-2.5 py-1 rounded-full before-badge hidden">לפני</span>
                 <span class="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full after-badge">אחרי</span>
              </div>
              <div class="p-6 space-y-4">
                 <div class="flex items-center justify-between gap-4">
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white">חידוש וריצוף דק במרפסת</h3>
                    <!-- Controls -->
                    <div class="flex rounded-lg bg-slate-100 dark:bg-slate-800 p-1 text-[11px] font-bold shrink-0">
                       <button class="toggle-before px-3 py-1 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">לפני</button>
                       <button class="toggle-after px-3 py-1 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm transition-colors cursor-pointer">אחרי</button>
                    </div>
                 </div>
                 <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    <strong>האתגר:</strong> מרפסת דירה מוזנחת עם אריחי קרמיקה סדוקים, שבורים ומסוכנים למעבר, יחד עם צמיחת עשבים שוטים.
                    <br/>
                    <strong>הפתרון:</strong> עקירה וניקוי התשתית, פילוס גובה של הרצפה, בניית תשתית תמיכה מבודדת, והרכבת דק עץ אורן משומן ומסוגנן.
                 </p>
              </div>
           </div>
        </div>
     </div>
  </section>

  <!-- Prior Work Section -->
  <section id="gallery" class="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
     <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
           <span class="text-sm font-bold text-amber-600 dark:text-amber-500 tracking-wider uppercase font-semibold">תיק עבודות</span>
           <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">פרויקטים אחרונים בשטח</h2>
           <p class="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              הצצה למספר עבודות שביצעתי לאחרונה. תוצאות שמדברות בעד עצמן — רמת דיוק אסתטית וטכנית גבוהה.
           </p>
        </div>
        
        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
           <!-- Card 1 -->
           <div class="group border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-500/20 dark:hover:border-amber-400/20 transition-all duration-300">
              <div class="aspect-[16/10] bg-slate-950 flex items-center justify-center p-8 relative overflow-hidden">
                 <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_12px,transparent_12px)] bg-[size:24px_100%] opacity-20"></div>
                 <div class="relative w-4/5 aspect-[16/9] bg-slate-900 border-4 border-slate-700 rounded-lg shadow-2xl flex items-center justify-center">
                    <div class="text-center space-y-2">
                       <span class="text-xs font-bold text-amber-500 uppercase tracking-widest">Ultra Slim Mount</span>
                       <p class="text-xs text-slate-400">תליית טלוויזיה 75 אינץ' על קיר גבס מחוזק</p>
                    </div>
                 </div>
              </div>
              <div class="p-6 sm:p-8 space-y-2 bg-white dark:bg-slate-900">
                 <span class="text-xs font-bold text-amber-600 dark:text-amber-500 uppercase">חשמל, תלייה וגבס</span>
                 <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">חידוש קיר סלון ותליית טלוויזיה</h3>
                 <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    הרכבת זרוע צמודת קיר ייעודית למסכים גדולים, העברת כבלים בתוך תעלות נסתרות ואיטום סביבתי.
                 </p>
              </div>
           </div>
           
           <!-- Card 2 -->
           <div class="group border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-500/20 dark:hover:border-amber-400/20 transition-all duration-300">
              <div class="aspect-[16/10] bg-slate-950 flex items-center justify-center p-8 relative overflow-hidden">
                 <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-35"></div>
                 <div class="relative flex flex-col items-center">
                    <div class="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                       <svg class="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5" />
                       </svg>
                    </div>
                    <div class="w-32 h-2.5 bg-slate-700 rounded-full mt-4"></div>
                    <div class="w-24 h-1 bg-slate-800 rounded-full mt-1.5"></div>
                 </div>
              </div>
              <div class="p-6 sm:p-8 space-y-2 bg-white dark:bg-slate-900">
                 <span class="text-xs font-bold text-amber-600 dark:text-amber-500 uppercase">אינסטלציה ואיטום</span>
                 <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">החלפת מערכת ברזים וסינון מים במטבח</h3>
                 <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    התקנת ברז נשלף יוקרתי, התקנת מסנן תת-כיורי מונע אבנית ואיטום.
                 </p>
              </div>
           </div>
           
           <!-- Card 3 -->
           <div class="group border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-500/20 dark:hover:border-amber-400/20 transition-all duration-300">
              <div class="aspect-[16/10] bg-slate-950 flex items-center justify-center p-8 relative overflow-hidden">
                 <div class="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                 <div class="w-4/5 border border-dashed border-slate-700 rounded-xl p-4 flex flex-col gap-4">
                    <div class="h-6 bg-slate-800 rounded flex items-center justify-between px-3 text-[10px] text-slate-400 font-mono">
                       <span>SHELF A</span>
                       <span>60cm</span>
                    </div>
                    <div class="h-6 bg-slate-800 rounded flex items-center justify-between px-3 text-[10px] text-slate-400 font-mono">
                       <span>SHELF B</span>
                       <span>60cm</span>
                    </div>
                    <div class="h-6 bg-slate-800 rounded flex items-center justify-between px-3 text-[10px] text-slate-400 font-mono">
                       <span>SHELF C</span>
                       <span>120cm</span>
                    </div>
                 </div>
              </div>
              <div class="p-6 sm:p-8 space-y-2 bg-white dark:bg-slate-900">
                 <span class="text-xs font-bold text-amber-600 dark:text-amber-500 uppercase">נגרות והתקנות</span>
                 <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">הרכבת מערכת ארונות קיר וספריות</h3>
                 <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    הרכבת ארונות קיר מרובי מגירות, יישור עצמאי מדויק באמצעות פלס לייזר, עיגון בטיחותי לקירות בטון.
                 </p>
              </div>
           </div>
           
           <!-- Card 4 -->
           <div class="group border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-500/20 dark:hover:border-amber-400/20 transition-all duration-300">
              <div class="aspect-[16/10] bg-slate-950 flex items-center justify-center p-8 relative overflow-hidden">
                 <div class="absolute w-40 h-40 rounded-full bg-amber-500/10 blur-2xl"></div>
                 <div class="relative flex flex-col items-center gap-2">
                    <div class="w-1 h-12 bg-slate-700"></div>
                    <div class="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/40 text-slate-950 font-bold">
                       💡
                    </div>
                    <div class="w-4 h-1 bg-slate-600 rounded"></div>
                 </div>
              </div>
              <div class="p-6 sm:p-8 space-y-2 bg-white dark:bg-slate-900">
                 <span class="text-xs font-bold text-amber-600 dark:text-amber-500 uppercase">חשמל ותאורה</span>
                 <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">התקנת גופי תאורה מעוצבים</h3>
                 <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    התקנת נברשות תלויות וגופי תאורת לד מעוצבים בגבהים שונים, החלפת מפסקים תואמים ועבודה בטוחה.
                 </p>
              </div>
           </div>
        </div>
     </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-900/60 transition-colors duration-300">
     <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center space-y-8">
           <div class="space-y-4">
              <span class="text-sm font-bold text-amber-600 dark:text-amber-500 tracking-wider uppercase font-semibold">יצירת קשר</span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">מעוניינים לשדרג או לתקן את הבית?</h2>
              <p class="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                 זמין עבורכם לכל שאלה, ייעוץ מקצועי או קבלת הצעת מחיר מהירה בטלפון.
              </p>
           </div>
           
           <!-- WhatsApp CTA Card (Commented out for future restore)
           <div class="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 p-8 sm:p-12 rounded-3xl shadow-xl shadow-slate-100 dark:shadow-none max-w-xl mx-auto space-y-6">
              <div class="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                 <svg class="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.805.002-2.62-1.018-5.084-2.871-6.94-1.854-1.855-4.32-2.874-6.945-2.876-5.41 0-9.81 4.4-9.814 9.813-.001 1.538.486 3.036 1.412 4.417l-.956 3.492 3.582-.943v.002zM18.006 14.6c-.328-.164-1.942-.958-2.242-1.068-.3-.11-.518-.164-.737.164-.219.328-.847 1.068-1.039 1.287-.192.219-.384.246-.712.082-.328-.164-1.385-.51-2.637-1.627-.975-.87-1.632-1.946-1.823-2.274-.192-.328-.02-.505.144-.668.148-.146.328-.383.493-.574.164-.192.219-.328.328-.547.11-.219.055-.411-.027-.574-.082-.164-.737-1.777-1.01-2.434-.267-.64-.539-.553-.737-.563-.19-.01-.41-.011-.629-.011s-.574.082-.875.411c-.3.328-1.148 1.121-1.148 2.734 0 1.613 1.176 3.172 1.34 3.391.164.219 2.314 3.533 5.605 4.954.783.338 1.394.54 1.871.691.788.25 1.505.215 2.072.13.632-.094 1.942-.793 2.215-1.559.273-.766.273-1.422.192-1.559-.082-.137-.3-.219-.629-.383z"/>
                 </svg>
              </div>
              <div class="space-y-2">
                 <h3 class="font-extrabold text-xl text-slate-900 dark:text-white">בואו נדבר בוואטסאפ</h3>
                 <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    מענה מהיר לשליחת תמונות של העבודה הנדרשת וקבלת הערכת מחיר נוחה.
                 </p>
              </div>
           <!-- WhatsApp CTA Card (Commented out for future restore) -->

            <!-- Beautiful Phone Display Card -->
            <div class="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 p-8 sm:p-12 rounded-3xl shadow-xl shadow-slate-100 dark:shadow-none max-w-xl mx-auto space-y-6">
               <div class="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.435-5.127-3.738-6.562-6.562l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
               </div>
               <div class="space-y-3">
                  <h3 class="font-extrabold text-xl text-slate-900 dark:text-white">זמין לשיחת ייעוץ והצעת מחיר</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                     מוזמנים להתקשר לפרטים נוספים ותיאום עבודה:
                  </p>
                  <div class="pt-2">
                     <a href="tel:0503262022" class="inline-block text-3xl sm:text-4xl font-black text-amber-500 hover:text-amber-600 dark:hover:text-amber-400 tracking-widest transition-colors duration-200">
                        050-326-2022
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
  </section>

  <!-- Footer -->
  <footer class="bg-slate-900 dark:bg-slate-950 text-slate-400 dark:text-slate-500 py-12 border-t border-slate-800 dark:border-slate-900 transition-colors duration-300">
     <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start">
        <div class="flex items-center gap-3">
           <span class="font-bold text-lg text-white">נתנאל <span class="text-amber-500">הנדימן</span></span>
           <span class="text-slate-600">|</span>
           <span class="text-xs">שירותי תיקונים ברמה הגבוהה ביותר</span>
        </div>
        <p class="text-xs text-slate-500">
           © 2026 נתנאל הנדימן. כל הזכויות שמורות. גרסת POC תצוגת מבנה בלבד.
        </p>
     </div>
  </footer>
</div>
`;

// Theme toggler logic
const themeToggleBtn = document.getElementById('theme-toggle');

function applyTheme(theme: string) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  applyTheme('dark');
} else {
  applyTheme('light');
}

themeToggleBtn?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Before & After Toggles
const beforeAfterCards = document.querySelectorAll('.before-after-card');
beforeAfterCards.forEach(card => {
  const btnBefore = card.querySelector('.toggle-before');
  const btnAfter = card.querySelector('.toggle-after');
  const viewBefore = card.querySelector('.before-view');
  const viewAfter = card.querySelector('.after-view');
  const badgeBefore = card.querySelector('.before-badge');
  const badgeAfter = card.querySelector('.after-badge');

  btnBefore?.addEventListener('click', () => {
    // Show Before, Hide After
    viewBefore?.classList.remove('opacity-0');
    viewBefore?.classList.add('opacity-100');
    viewAfter?.classList.remove('opacity-100');
    viewAfter?.classList.add('opacity-0');
    
    badgeBefore?.classList.remove('hidden');
    badgeAfter?.classList.add('hidden');

    btnBefore.classList.add('bg-white', 'dark:bg-slate-700', 'text-slate-900', 'dark:text-white', 'shadow-sm');
    btnBefore.classList.remove('text-slate-500', 'dark:text-slate-400');
    
    btnAfter?.classList.remove('bg-white', 'dark:bg-slate-700', 'text-slate-900', 'dark:text-white', 'shadow-sm');
    btnAfter?.classList.add('text-slate-500', 'dark:text-slate-400');
  });

  btnAfter?.addEventListener('click', () => {
    // Show After, Hide Before
    viewBefore?.classList.remove('opacity-100');
    viewBefore?.classList.add('opacity-0');
    viewAfter?.classList.remove('opacity-0');
    viewAfter?.classList.add('opacity-100');
    
    badgeBefore?.classList.add('hidden');
    badgeAfter?.classList.remove('hidden');

    btnAfter.classList.add('bg-white', 'dark:bg-slate-700', 'text-slate-900', 'dark:text-white', 'shadow-sm');
    btnAfter.classList.remove('text-slate-500', 'dark:text-slate-400');
    
    btnBefore?.classList.remove('bg-white', 'dark:bg-slate-700', 'text-slate-900', 'dark:text-white', 'shadow-sm');
    btnBefore?.classList.add('text-slate-500', 'dark:text-slate-400');
  });
});
