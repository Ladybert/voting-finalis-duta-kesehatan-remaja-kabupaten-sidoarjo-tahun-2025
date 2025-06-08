// Data finalis (dummy)
    const finalists = [
      { id:1, name:"Duta Fairus", slogan:"Sehat untuk masa depan", photo:"https://drive.google.com/thumbnail?id=19wj1SuyLX2kmlxUDQxrEVtAb14CwKdbI&sz=w1000" },
      { id:2, name:"Duta Della", slogan:"Generasi kuat, generasi sehat", photo:"https://drive.google.com/thumbnail?id=1JiAE9ye35VdRQ3A1_Fy2DaTDQeiUEdx5&sz=w1000" },
      { id:3, name:"Duta Awan", slogan:"Remaja sehat, bangsa hebat", photo:"https://drive.google.com/thumbnail?id=1PblueQ8VLa7f1QujFrun85J-mPw01aQw&sz=w1000" },
      { id:4, name:"Duta Asila", slogan:"Hidup sehat, hidup cerah", photo:"https://drive.google.com/thumbnail?id=1dVW6wukMa0_YEuad_KLrq3aG5VaFmahC&sz=w1000" },
      { id:5, name:"Duta Rafi", slogan:"Bugar dan berdaya", photo:"https://drive.google.com/thumbnail?id=1w0rMX3TavGkj7CBWUbY3lvE74fk1zWRK&sz=w1000" },
      { id:6, name:"Duta Dea", slogan:"Energi muda, energi sehat", photo:"https://drive.google.com/thumbnail?id=1rjD7LZNu6-8VRflPzzbeKD1UCRACshwg&sz=w1000" },
      { id:7, name:"Duta Rizal", slogan:"Sehat itu keren", photo:"https://drive.google.com/thumbnail?id=1WHhLCN_4vWBtparDN9EPN2Q1B1PmNS2x&sz=w1000" },
      { id:8, name:"Duta Rasya", slogan:"Jaga diri, jaga bangsa", photo:"https://drive.google.com/thumbnail?id=1w5Q2YBydPZgMUnK5BSr2T5aQDTFyNwuB&sz=w1000" },
      { id:9, name:"Duta Mozes", slogan:"Kesehatan awal kesuksesan", photo:"https://drive.google.com/thumbnail?id=16ngIg6LwYy7JyoIDgcnsnYBlxCklt44r&sz=w1000" },
      { id:10, name:"Duta Maretha", slogan:"Bersama sehatkan Indonesia", photo:"https://drive.google.com/thumbnail?id=1lvKIWgRYioWUHIHd55swVp4W2PioJAhc&sz=w1000" },
      { id:11, name:"Duta Kresna", slogan:"Remaja sehat, tanpa ragu", photo:"https://drive.google.com/thumbnail?id=1T5SPgQdr7ZFvd50_Vjj1dqmuW_PsUhqq&sz=w1000" },
      { id:12, name:"Duta Vina", slogan:"Langkah sehat, langkah pasti", photo:"https://drive.google.com/thumbnail?id=1Q1e2iUqVzXpLK5OtoDaXC4cE6DwvLBVd&sz=w1000" },
      { id:13, name:"Duta Attor", slogan:"Sehatkan tubuh, sehatkan jiwa", photo:"https://drive.google.com/thumbnail?id=1atlKl5eA7apZc3izcWOjPCm5OJ57hBvd&sz=w1000" },
      { id:14, name:"Duta Rachel", slogan:"Kuasai sehatmu", photo:"https://drive.google.com/thumbnail?id=1qCqWAZ8f1TNrP5bha-aeJgKAzw0yiYZL&sz=w1000" },
      { id:15, name:"Duta Evan", slogan:"Remaja sehat, terdepan", photo:"https://drive.google.com/thumbnail?id=1OlpDK78uTICyzUwuK661IOI7iurpGwU9&sz=w1000" },
      { id:16, name:"Duta Aura", slogan:"Aksi sehat generasi kini", photo:"https://drive.google.com/thumbnail?id=1939GWEGNW-MP4WhJTL7R2R45DiJ4uBGC&sz=w1000" },
      { id:17, name:"Duta Nizar", slogan:"Jaga kesehatan, wujudkan mimpi", photo:"https://drive.google.com/thumbnail?id=1Nn3YYhITZ0zpot8ELi4a-TOkMqXQZt5c&sz=w1000" },
      { id:18, name:"Duta Kayla", slogan:"Sehat untuk semangat juang", photo:"https://drive.google.com/thumbnail?id=1CHa2Cjn05xhsSZ01frUspnRO4pRuapmg&sz=w1000" },
      { id:19, name:"Duta Nalendra", slogan:"Bersih, sehat, percaya diri", photo:"https://drive.google.com/thumbnail?id=1h4VEKVj9atUKYT3JRRxMOsbTuAlk3kH_&sz=w1000" },
      { id:20, name:"Duta Maudy", slogan:"Semangat sehat remaja", photo:"https://drive.google.com/thumbnail?id=1DZ5MYdyMAFFCfjV8XNlWhvkCbxfQznY7&sz=w1000" }
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
        <img class="finalist-photo" src="${finalist.photo}" alt="${finalist.name}" />
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
      modalSlogan.textContent = finalist.slogan;
      modal.classList.add('show');

  // Set tindakan tombol Transfer dan Chat
      transferBtn.onclick = () => {
        alert(
    '📌 Nomor ShopeePay untuk transfer:\n' +
    '➡ 0812-3258-7867 (a.n. DARMAWAN DJOKO)\n\n' +
    '💬 Jika ingin menggunakan metode pembayaran lain (Dana, OVO, BCA, dll), ' +
    'silakan hubungi Duta Abel melalui WhatsApp:\n➡ wa.me/6281232587867'
     );
      };
      chatBtn.onclick = () => {
        // Chat WhatsApp admin (contoh nomor placeholder)
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSf09rl-5x8s1boEfa8rpyCGTyvEETnYMlVz0lvop8jQGZqFuA/viewform', '_blank');
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