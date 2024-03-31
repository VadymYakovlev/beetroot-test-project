const setError = (id, text) => {
  const DOMError = document.getElementById(id);

  if (DOMError) {
    DOMError.textContent = text;
  }
};

const registrationForm = () => {
  const DOMForm = document.getElementById('js-form');

  if (!DOMForm) return;

  DOMForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    console.log('form:', form);

    // Firstname
    const firstname = form.get('firstname');

    if (!firstname) {
      return setError('js-form-firstname-error', 'Firstname is required');
    }

    if (firstname.length < 3) {
      return setError(
        'js-form-firstname-error',
        'Firstname must be min 3 symbols'
      );
    }
    setError('js-form-firstname-error', '');

    // lastname
    const lastname = form.get('lastname');

    if (!lastname) {
      return setError('js-form-lastname-error', 'Lastname is required');
    }

    if (lastname.length < 3) {
      return setError(
        'js-form-lastname-error',
        'Lastname must be min 3 symbols'
      );
    }
    setError('js-form-lastname-error', '');

    // City
    const city = form.get('city');
    console.log('username:', city);

    if (!city) {
      return setError('js-form-city-error', 'City is required');
    }

    if (city.length < 3) {
      return setError('js-form-city-error', 'City must be min 3 symbols');
    }
    setError('js-form-city-error', '');

    // Email
    const email = form.get('email');
    if (!email) {
      return setError('js-form-email-error', 'Email is required');
    }
    if (!validEmail(email)) {
      return setError('js-form-email-error', 'Invalid email format');
    }
    const validEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.check(email);
    };
    setError('js-form-email-error', '');
  });
};

export default registrationForm;
