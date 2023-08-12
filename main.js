document.addEventListener('DOMContentLoaded', () => {
    const mi_fetch = document.getElementById('jokeBtn');
    const broma = document.getElementsByClassName('jokeContainer')[0];

    mi_fetch.addEventListener('click', async () => {
        try {
            const url = 'http://127.0.0.1:8081/date'
            const response = await fetch(url);  // Coge de forma async la respuesta
            const data = await response.json();  //Evalua de form a async el cuerpo (payload)
            broma.innerHTML = `<p>${data.date}</p>`;
        } catch (error) {
            console.error('Error fetching API:', error);
            broma.innerHTML = '<p>No se han conseguido los datos</p>';
        }
    });
});