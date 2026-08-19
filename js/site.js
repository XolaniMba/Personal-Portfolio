// ---------- Mobile nav toggle ----------
(function () {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (!navToggle || !navLinks) return;
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
})();

// ---------- Chatbot widget ----------
(function () {
  const toggler = document.getElementById('chatbot-toggler');
  const chatbot = document.getElementById('chatbot');
  const closeBtn = chatbot ? chatbot.querySelector('.close-btn') : null;
  const chatbox = document.querySelector('.chatbox');
  const textarea = document.querySelector('.chat-input textarea');
  const sendBtn = document.getElementById('send-btn');

  if (!toggler || !chatbot) return;

  const setOpen = (open) => {
    chatbot.classList.toggle('open', open);
    toggler.classList.toggle('active', open);
    toggler.setAttribute('aria-expanded', open);
  };

  toggler.addEventListener('click', () => setOpen(!chatbot.classList.contains('open')));
  if (closeBtn) closeBtn.addEventListener('click', () => setOpen(false));

  // Very small canned-response assistant covering common portfolio questions.
  const responses = [
    { keys: ['project', 'projects', 'built', 'work'], reply: "Xolani's featured projects include a Banking Management System, an Attendance Tracking automation tool, a React Movie App and a COBOL-based Payroll System. Check the Projects page for details and links." },
    { keys: ['skill', 'skills', 'stack', 'tech', 'language'], reply: "Core skills: COBOL, JCL, Python, JavaScript, SQL and SAS, with hands-on experience in enterprise banking systems and modern web tools." },
    { keys: ['cert', 'certification', 'certifications', 'credential'], reply: "Certifications include AWS Cloud Practitioner, Microsoft Azure Fundamentals, SAS Certified Specialist, and several IBM COBOL badges. See the Certifications page for the full list and verification links." },
    { keys: ['contact', 'email', 'reach', 'hire'], reply: "You can reach Xolani at xolanimbambo22@gmail.com or through the Contact page." },
    { keys: ['cv', 'resume', 'download'], reply: "You can download the CV from the button in the top navigation on the home page." },
    { keys: ['experience', 'background', 'history'], reply: "Xolani is a COBOL Mainframe developer through the CAPACITI x ABSA programme, with additional experience in AV/media production. See the Experience page for the full timeline." }
  ];

  function getReply(message) {
    const lower = message.toLowerCase();
    const match = responses.find((r) => r.keys.some((k) => lower.includes(k)));
    return match ? match.reply : "Thanks for the message! I can share details about Xolani's projects, skills, certifications or experience — try asking about one of those.";
  }

  function appendMessage(text, type) {
    if (!chatbox) return;
    const li = document.createElement('li');
    li.className = `chat ${type}`;
    if (type === 'incoming') {
      li.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    } else {
      li.innerHTML = `<p></p>`;
    }
    li.querySelector('p').textContent = text;
    chatbox.appendChild(li);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function handleSend() {
    if (!textarea) return;
    const message = textarea.value.trim();
    if (!message) return;
    appendMessage(message, 'outgoing');
    textarea.value = '';
    setTimeout(() => appendMessage(getReply(message), 'incoming'), 350);
  }

  if (sendBtn) sendBtn.addEventListener('click', handleSend);
  if (textarea) {
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    });
  }
})();

// ---------- Contact form (submits to Formspree via fetch, no page reload) ----------
(function () {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('contactSubmit');
  const status = document.getElementById('formStatus');
  if (!form || !submitBtn || !status) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    status.textContent = '';
    status.className = 'form-status';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        status.textContent = "Thanks — your message has been sent. I'll get back to you soon.";
        status.classList.add('success');
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        const detail = data && data.errors && data.errors.length
          ? data.errors.map((err) => err.message).join(', ')
          : 'Something went wrong sending your message.';
        status.textContent = `${detail} Please try again, or email xolanimbambo22@gmail.com directly.`;
        status.classList.add('error');
      }
    } catch (err) {
      status.textContent = 'Network error — please try again, or email xolanimbambo22@gmail.com directly.';
      status.classList.add('error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
})();
