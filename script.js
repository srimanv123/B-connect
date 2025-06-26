
    function calculateAttendance() {
      const total = parseInt(document.getElementById('total').value);
      const attended = parseInt(document.getElementById('attended').value);
      const result = document.getElementById('result');
      if (!isNaN(total) && !isNaN(attended) && total > 0 && attended >= 0 && attended <= total) {
        const percentage = ((attended / total) * 100).toFixed(2);
        result.textContent = `Attendance: ${percentage}%`;
      } else {
        result.textContent = 'Please enter valid numbers.';
      }
    }

    function sendMessage() {
      const messageBox = document.getElementById('message');
      const chatBox = document.getElementById('chatBox');
      const msg = messageBox.value.trim();
      if (msg) {
        const p = document.createElement('p');
        p.textContent = msg;
        chatBox.appendChild(p);
        messageBox.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    }
