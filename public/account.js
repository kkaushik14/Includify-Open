function togglePage(page) {
    const loginPage = document.getElementById('loginPage');
    const signupPage = document.getElementById('signupPage');
    
    if (page === 'login') {
      loginPage.classList.remove('hidden');
      signupPage.classList.add('hidden');
    } else {
      loginPage.classList.add('hidden');
      signupPage.classList.remove('hidden');
    }
  }

  window.GOOGLE_CLIENT_ID = "<%= googleClientId %>";

  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
      const response = await fetch('mongodb://127.0.0.1:27017/Includify', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer MiZS2PGRJtXm9f5AGqcNO2fFy4t2',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          appSlug: 'auth-system-123456',
          action: 'read',
          collection: 'users',
          conditions: { email, password }
        })
      });

      const data = await response.json();
      if (data.success && data.result.length > 0) {
        alert('Login successful!');
        localStorage.setItem('user', JSON.stringify(data.result[0]));
      } else {
        alert('Invalid credentials!');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  });


  document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    try {
      const response = await fetch('mongodb://127.0.0.1:27017/Includify', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer MiZS2PGRJtXm9f5AGqcNO2fFy4t2',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          appSlug: 'auth-system-123456',
          action: 'create',
          collection: 'users',
          data: { name, email, password }
        })
      });

      const data = await response.json();
      if (data.success) {
        alert('Signup successful! Please login.');
        togglePage('login');
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Please try again.');
    }
  });

  // Google login integration
  function handleGoogleLogin() {
    google.accounts.id.initialize({
      client_id: window.GOOGLE_CLIENT_ID,
      callback: handleGoogleCallback
    });
    google.accounts.id.prompt();
  }

  async function handleGoogleCallback(response) {
    try {
      const googleUser = response.credential;
      const userData = {
        email: googleUser.email,
        name: googleUser.name,
        googleId: googleUser.sub
      };

      const dbResponse = await fetch('mongodb://127.0.0.1:27017/Includify', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer MiZS2PGRJtXm9f5AGqcNO2fFy4t2',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          appSlug: 'auth-system-123456',
          action: 'create',
          collection: 'users',
          data: userData
        })
      });

      const data = await dbResponse.json();
      if (data.success) {
        alert('Google login successful!');
        localStorage.setItem('user', JSON.stringify(userData));
      }
    } catch (error) {
      console.error('Google login error:', error);
      alert('Google login failed. Please try again.');
    }
  }