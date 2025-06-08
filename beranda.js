// Existing dropdown menu function
function toggleMenu() {
    const menu = document.getElementById("dropdown-menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const profile = document.querySelector('.profile');
    const menu = document.getElementById('dropdown-menu');

    if (!profile.contains(event.target)) {
        menu.style.display = 'none';
    }
});

// Data film untuk thumbnail
const filmData = {
    'dlu.png': {
        title: "Don't Look Up",
        episode: "Episode 1",
        duration: "2 jam 33 menit",
        genres: ["Misteri", "Kriminal", "Fantasi"]
    },
    'aouad2.png': {
        title: "All of Us are Dead",
        episode: "Episode 2",
        duration: "1 jam 45 menit",
        genres: ["Horror", "Thriller", "Drama"]
    },
    'bl.png': {
        title: "Blue Lock",
        episode: "Episode 12",
        duration: "24 menit",
        genres: ["Anime", "Olahraga", "Drama"]
    },
    'amco.png': {
        title: "A Man Called Otto",
        episode: "Episode 1",
        duration: "2 jam 6 menit",
        genres: ["Drama", "Komedi", "Keluarga"]
    },
    'das2.png': {
        title: "Duty After School",
        episode: "Episode 5",
        duration: "1 jam 20 menit",
        genres: ["Aksi", "Thriller", "Drama"]
    },
    'suzume.png': {
        title: "Suzume",
        episode: "Episode 1",
        duration: "2 jam 2 menit",
        genres: ["Anime", "Fantasi", "Petualangan"]
    },
    'jw.png': {
        title: "Jurassic World",
        episode: "Episode 1",
        duration: "2 jam 4 menit",
        genres: ["Aksi", "Petualangan", "Sains"]
    },
    'sonic2.png': {
        title: "Sonic 2",
        episode: "Episode 1",
        duration: "2 jam 2 menit",
        genres: ["Aksi", "Komedi", "Keluarga"]
    },
    'bh6.png': {
        title: "Big Hero 6",
        episode: "Episode 3",
        duration: "1 jam 42 menit",
        genres: ["Animasi", "Aksi", "Keluarga"]
    },
    'ttw.png': {
        title: "The Tomorrow War",
        episode: "Episode 1",
        duration: "2 jam 18 menit",
        genres: ["Aksi", "Sains Fiksi", "Thriller"]
    },
    'q.png': {
        title: "Ant-Man: Quantumania",
        episode: "Episode 1",
        duration: "2 jam 5 menit",
        genres: ["Aksi", "Sains Fiksi", "Komedi"]
    },
    'gg.png': {
        title: "Guardians of the Galaxy",
        episode: "Episode 1",
        duration: "2 jam 1 menit",
        genres: ["Aksi", "Sains Fiksi", "Komedi"]
    },
    'amco2.png': {
        title: "A Man Called Otto",
        episode: "Episode 1",
        duration: "2 jam 6 menit",
        genres: ["Drama", "Komedi", "Keluarga"]
    },
    'm.png': {
        title: "Missing",
        episode: "Episode 1",
        duration: "1 jam 51 menit",
        genres: ["Misteri", "Thriller", "Drama"]
    },
    'lm.png': {
        title: "The Little Mermaid",
        episode: "Episode 1",
        duration: "2 jam 15 menit",
        genres: ["Fantasi", "Musikal", "Keluarga"]
    }
};

// Fungsi untuk membuat thumbnail modal
function createThumbnailModal(imageSrc, filmInfo) {
    // Hapus modal yang sudah ada jika ada
    const existingModal = document.querySelector('.thumbnail-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Buat overlay modal
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'thumbnail-modal-overlay';
    modalOverlay.innerHTML = `
        <div class="thumbnail-modal">
            <div class="thumbnail-close" onclick="closeThumbnailModal()">&times;</div>
            <img class="img-thumbnail" src="${imageSrc}">
            <div class="play">
                <div class="play2">
                    <a href="tonton.html"><img src="play.png"></a>
                    <img src="checklist.png">
                </div>
                <img class="dropdown" src="dropdown.png">
            </div>
            <p>${filmInfo.episode}</p>
            <p>${filmInfo.duration}</p>
            <div class="genre2">
                ${filmInfo.genres.map(genre => `<p>${genre}</p>`).join('<p>•</p>')}
            </div>
        </div>
    `;

    document.body.appendChild(modalOverlay);
}

// Fungsi untuk menutup modal
function closeThumbnailModal() {
    const modal = document.querySelector('.thumbnail-modal-overlay');
    if (modal) {
        modal.remove();
    }
}

// Fungsi untuk mendapatkan nama file gambar dari src
function getImageFileName(src) {
    return src.split('/').pop();
}

// Event listener untuk semua film items
document.addEventListener('DOMContentLoaded', function() {
    // Film-item (Melanjutkan Tonton Film)
    const filmItems = document.querySelectorAll('.film-item');
    filmItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imageSrc = img.src;
            const fileName = getImageFileName(imageSrc);
            const filmInfo = filmData[fileName] || {
                title: img.alt || "Film Tidak Dikenal",
                episode: "Episode 1",
                duration: "2 jam",
                genres: ["Drama"]
            };
            createThumbnailModal(imageSrc, filmInfo);
        });
    });

    // Film-item-2 (Top Rating)
    const filmItems2 = document.querySelectorAll('.film-item-2');
    filmItems2.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imageSrc = img.src;
            const fileName = getImageFileName(imageSrc);
            const filmInfo = filmData[fileName] || {
                title: img.alt || "Film Tidak Dikenal",
                episode: "Episode 1",
                duration: "2 jam",
                genres: ["Drama"]
            };
            createThumbnailModal(imageSrc, filmInfo);
        });
    });

    // Film-item-3 (Film Trending)
    const filmItems3 = document.querySelectorAll('.film-item-3');
    filmItems3.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imageSrc = img.src;
            const fileName = getImageFileName(imageSrc);
            const filmInfo = filmData[fileName] || {
                title: img.alt || "Film Tidak Dikenal",
                episode: "Episode 1",
                duration: "2 jam",
                genres: ["Drama"]
            };
            createThumbnailModal(imageSrc, filmInfo);
        });
    });

    // Film-item-4 (Rilis Baru)
    const filmItems4 = document.querySelectorAll('.film-item-4');
    filmItems4.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imageSrc = img.src;
            const fileName = getImageFileName(imageSrc);
            const filmInfo = filmData[fileName] || {
                title: img.alt || "Film Tidak Dikenal",
                episode: "Episode 1",
                duration: "2 jam",
                genres: ["Drama"]
            };
            createThumbnailModal(imageSrc, filmInfo);
        });
    });

    // Tutup modal ketika mengklik overlay
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('thumbnail-modal-overlay')) {
            closeThumbnailModal();
        }
    });

    // Tutup modal dengan tombol Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeThumbnailModal();
        }
    });
});

// Fungsi toggle menu yang sudah ada
function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function toggleGenre() {
    const dropdown = document.getElementById('dropdown-genre');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  }