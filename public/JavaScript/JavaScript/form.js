<script>
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
      // Check for input validation on "input" and "blur" events
      input.addEventListener('input', () => {
        const errorMessage = input.nextElementSibling;
        if (!input.checkValidity()) {
          errorMessage.style.display = 'block';
        } else {
          errorMessage.style.display = 'none';
        }
      });

      input.addEventListener('blur', () => {
        const errorMessage = input.nextElementSibling;
        if (!input.checkValidity()) {
          errorMessage.style.display = 'block';
        } else {
          errorMessage.style.display = 'none';
        }
      });
    });
  });
</script>
