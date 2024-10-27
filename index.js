<script>
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    // Função para mover o slide
    function moveSlide(step) {
        currentIndex += step;

        
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }

        
        const offset = -currentIndex * 100; 
        document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
    }

    // Função para mudar o slide automaticamente
    function autoSlide() {
        moveSlide(1); 
    }

    // Chama autoSlide a cada 3 segundos
    setInterval(autoSlide, 3000); // Mudar o slide a cada 3000 milissegundos (3 segundos)

    // Adiciona eventos de clique para os botões
    document.querySelector('.prev').onclick = () => moveSlide(-1);
    document.querySelector('.next').onclick = () => moveSlide(1);
</script>
