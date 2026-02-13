
function openBook() {
    const cover = document.getElementById('cover');
    const mainContent = document.getElementById('main-content');
    
    cover.classList.add('opened');
    
    setTimeout(() => {
        mainContent.style.display = 'block';
    }, 450);
}
function showTab(event, tabId) {

    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const video = document.querySelector('video');
    if (video) { video.pause(); }

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');

    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
        scrollContainer.scrollTop = 0;
    }
}
function openBook() {
    const cover = document.getElementById('cover');
    const mainContent = document.getElementById('main-content');
    const music = document.getElementById('magic-music');
    
    // 1. Start the flip animation
    cover.classList.add('opened');
    
    // 2. Play the music ONCE
    if (music) {
        music.volume = 0; // Start silent for fade-in
        music.play().catch(error => {
            console.log("Music play blocked by browser until user interaction.");
        });
        
        // Gentle volume fade-in so it's not a sudden jump
        let vol = 0;
        let fadeInterval = setInterval(() => {
            if (vol < 0.4) { // Set max volume to 40%
                vol += 0.02;
                music.volume = vol;
            } else {
                clearInterval(fadeInterval);
            }
        }, 150);
    }
    
    // 3. Show the inside pages
    setTimeout(() => {
        mainContent.style.display = 'block';
    }, 450);
}

function showTab(event, tabId) {
    // Hide all contents
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    // Deactivate all buttons
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    // Pause any playing video if she switches tabs
    const video = document.querySelector('video');
    if (video) video.pause(); 

    // Show the selected tab
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
    
    // Reset scroll position
    document.querySelector('.scroll-container').scrollTop = 0;
}