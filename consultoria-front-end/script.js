document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('forms');

    form.onsubmit = function(event) {
        event.preventDefault();
        alert('Formulário enviado com sucesso!'); 
        form.submit();
        form.reset();
    };
});


