document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const strengths = document.getElementById('strengths').value;
    const weaknesses = document.getElementById('weaknesses').value;
    const message = document.getElementById('message').value;

    if (strengths && weaknesses && message) {
        // Simpan data ke localStorage (atau kamu bisa menggunakan database/layanan cloud)
        const feedback = {
            strengths: strengths,
            weaknesses: weaknesses,
            message: message,
            date: new Date().toISOString()
        };
        const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
        feedbackList.push(feedback);
        localStorage.setItem('feedbackList', JSON.stringify(feedbackList));

        // Tampilkan pesan sukses
        document.getElementById('feedbackMessage').innerText = 'Feedback telah diterima. Terima kasih!';
        document.getElementById('feedbackForm').reset();
    } else {
        document.getElementById('feedbackMessage').innerText = 'Mohon isi semua bidang.';
    }
});
