document.addEventListener('DOMContentLoaded', function() {
    const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    const feedbackDiv = document.getElementById('feedbackList');
    if (feedbackList.length === 0) {
        feedbackDiv.innerText = 'No feedback available.';
    } else {
        feedbackList.forEach(feedback => {
            const feedbackItem = document.createElement('div');
            feedbackItem.innerHTML = `
                <h2>${new Date(feedback.date).toLocaleString()}</h2>
                <p><strong>Kelebihan:</strong> ${feedback.strengths}</p>
                <p><strong>Kelemahan:</strong> ${feedback.weaknesses}</p>
            `;
            feedbackDiv.appendChild(feedbackItem);
        });
    }
});
