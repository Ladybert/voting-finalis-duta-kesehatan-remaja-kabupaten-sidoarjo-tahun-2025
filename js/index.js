  // Data finalis (dummy)
    const finalists = [
      { id:1, name:"Duta Fairus", slogan:"Sehat untuk masa depan", photo:"https://source.unsplash.com/featured/?teenager,face,1" },
      { id:2, name:"Duta Della", slogan:"Generasi kuat, generasi sehat", photo:"https://source.unsplash.com/featured/?teenager,face,2" },
      { id:3, name: "Duta Muliawan", slogan:"Remaja sehat, bangsa hebat", photo:"https://source.unsplash.com/featured/?teenager,face,3" },
      { id:4, name:"Duta Asila", slogan:"Hidup sehat, hidup cerah", photo:"https://source.unsplash.com/featured/?teenager,face,4" },
      { id:5, name:"Duta Rafi", slogan:"Bugar dan berdaya", photo:"https://source.unsplash.com/featured/?teenager,face,5" },
      { id:6, name:"Duta Dea", slogan:"Energi muda, energi sehat", photo:"https://source.unsplash.com/featured/?teenager,face,6" },
      { id:7, name:"Duta Rizal", slogan:"Sehat itu keren", photo:"https://source.unsplash.com/featured/?teenager,face,7" },
      { id:8, name:"Duta Rasya", slogan:"Jaga diri, jaga bangsa", photo:"https://source.unsplash.com/featured/?teenager,face,8" },
      { id:9, name:"Duta Mozes", slogan:"Kesehatan awal kesuksesan", photo:"https://source.unsplash.com/featured/?teenager,face,9" },
      { id:10, name:"Duta Maretha", slogan:"Bersama sehatkan Indonesia", photo:"https://source.unsplash.com/featured/?teenager,face,10" },
      { id:11, name:"Duta Kresna", slogan:"Remaja sehat, tanpa ragu", photo:"https://source.unsplash.com/featured/?teenager,face,11" },
      { id:12, name:"Duta Lathuvina", slogan:"Langkah sehat, langkah pasti", photo:"https://source.unsplash.com/featured/?teenager,face,12" },
      { id:13, name:"Duta Attor", slogan:"Sehatkan tubuh, sehatkan jiwa", photo:"https://source.unsplash.com/featured/?teenager,face,13" },
      { id:14, name:"Duta Elisabeth", slogan:"Kuasai sehatmu", photo:"https://source.unsplash.com/featured/?teenager,face,14" },
      { id:15, name:"Duta Evan", slogan:"Remaja sehat, terdepan", photo:"https://source.unsplash.com/featured/?teenager,face,15" },
      { id:16, name:"Duta Aura", slogan:"Aksi sehat generasi kini", photo:"https://source.unsplash.com/featured/?teenager,face,16" },
      { id:17, name:"Duta Nizhar", slogan:"Jaga kesehatan, wujudkan mimpi", photo:"https://source.unsplash.com/featured/?teenager,face,17" },
      { id:18, name:"Duta Kayla", slogan:"Sehat untuk semangat juang", photo:"https://source.unsplash.com/featured/?teenager,face,18" },
      { id:19, name:"Duta Nalendra", slogan:"Bersih, sehat, percaya diri", photo:"https://source.unsplash.com/featured/?teenager,face,19" },
      { id:20, name:"Duta Maudy", slogan:"Semangat sehat remaja", photo:"https://source.unsplash.com/featured/?teenager,face,20" }
    ];

    const gallery = document.getElementById('finalists-gallery');
    const modal = document.getElementById('modal');
    const modalPhoto = document.getElementById('modal-photo');
    const modalName = document.getElementById('modal-name');
    const modalSlogan = document.getElementById('modal-slogan');
    const modalClose = document.getElementById('modal-close');
    const transferBtn = document.getElementById('transfer-btn');
    const chatBtn = document.getElementById('chat-btn');

    // Fungsi buat kartu finalis
    function createFinalistCard(finalist) {
      const card = document.createElement('div');
      card.classList.add('finalist-card');
      card.setAttribute('tabindex', '0'); // Keyboard focusable

      card.innerHTML = `
        <img class="finalist-photo" src="${finalist.photo}" alt="Foto ${finalist.name}" />
        <div class="finalist-info">
          <h3 class="finalist-name">${finalist.name}</h3>
          <p class="finalist-slogan">"${finalist.slogan}"</p>
          <div class="finalist-buttons">
            <button class="btn vote-btn">Vote</button>
            <button class="btn detail-btn">Lihat Detail</button>
          </div>
        </div>
      `;

      // Event listener tombol vote dan detail buka modal
      const voteBtn = card.querySelector('.vote-btn');
      const detailBtn = card.querySelector('.detail-btn');

      voteBtn.addEventListener('click', () => openModal(finalist));
      detailBtn.addEventListener('click', () => openModal(finalist));

      return card;
    }

    // Render semua finalis ke gallery
    function renderFinalists() {
      gallery.innerHTML = '';
      finalists.forEach(f => {
        gallery.appendChild(createFinalistCard(f));
      });
    }

    // Buka modal dengan data finalis
    function openModal(finalist) {
      modalPhoto.src = finalist.photo;
      modalPhoto.alt = 'Foto ' + finalist.name;
      modalName.textContent = finalist.name;
      modalSlogan.textContent = "${finalist.slogan}";
      modal.classList.add('show');

      // Set tindakan tombol Transfer dan Chat
      transferBtn.onclick = () => {
        // Contoh arahan info rekening/Shopeepay
        window.open('https://shopee.co.id/link-rekening-shop', '_blank');
      };
      chatBtn.onclick = () => {
        // Chat WhatsApp admin (contoh nomor placeholder)
        window.open('https://wa.me/6281232587867', '_blank');
      };

      // Fokus ke modal konten untuk aksesibilitas keyboard
      modal.querySelector('.modal-content').focus();
    }

    // Tutup modal
    function closeModal() {
      modal.classList.remove('show');
      // Kembalikan fokus ke galeri untuk keyboard
      gallery.querySelector('.finalist-card').focus();
    }

    modalClose.addEventListener('click', closeModal);

    // Tutup modal saat klik di luar content
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });

    // Tutup modal dengan ESC key
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
      }
    });

    // Inisialisasi render finalis
    renderFinalists();