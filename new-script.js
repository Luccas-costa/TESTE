
// dados do grafico de genero
const data = {
    females: 82.8,
    males: 17.1
};

// Dados Principais faixas etarias
const progressData = [
    { label: "13 a 17", percentage: 8.4 },
    { label: "18 a 24", percentage: 64.7 },
    { label: "24 a 34", percentage: 37.9 }
];





// setas que caem background
const container = document.getElementById('inicio');
        const numArrows = 40;

        // Função para gerar uma posição aleatória na div
        function getRandomPosition() {
            const x = Math.random() * container.clientWidth;
            const y = Math.random() * container.clientHeight;
            return { x, y };
        }

        // Função para gerar uma duração aleatória de queda
        function getRandomDuration() {
            return Math.random() * 5 + 2; // Duração entre 2 e 7 segundos
        }

        // Criar as setas e posicioná-las aleatoriamente
        for (let i = 0; i < numArrows; i++) {
            const arrow = document.createElement('div');
            arrow.classList.add('arrow');
            arrow.innerHTML = '&#x2193;';

            const position = getRandomPosition();
            arrow.style.left = `${position.x}px`;
            arrow.style.top = `${position.y}px`;

            // Definir duração de queda aleatória para cada seta
            const duration = getRandomDuration();
            arrow.style.animationDuration = `${duration}s`;

            container.appendChild(arrow);
        }

        // Adiciona o evento de scroll para ocultar as setas
        window.addEventListener('scroll', function () {
            const arrows = document.querySelectorAll('.arrow');
            arrows.forEach(arrow => {
                if (window.scrollY > 50) {
                    arrow.style.opacity = '0';
                } else {
                    arrow.style.opacity = '1';
                }
            });
        });




// Grafico de Progresso 
    // Atualiza o gráfico e as porcentagens
    function updateChart(data) {
        const femalePercentage = document.getElementById('female-percentage');
        const malePercentage = document.getElementById('male-percentage');
        const progressCircle = document.getElementById('progress-circle');

        femalePercentage.textContent = `${data.females}%`;
        malePercentage.textContent = `${data.males}%`;

        // Calcula o ângulo para a parte do gráfico de Mulheres
        const angle = (data.females / 100) * 360;

        // Define o ângulo da variável CSS
        progressCircle.style.setProperty('--progress-angle', `${angle}deg`);
    }

    // Inicializa o gráfico
    updateChart(data);


// Progess Bar
    const progressContainer = document.getElementById('dataContainer');

    // Função para preencher os dados
    progressData.forEach(item => {
        // Criação do elemento para cada faixa etária
        const div = document.createElement('div');
        div.className = "w-full px-3";

        div.innerHTML = `
            <div class="flex flex-col w-full">
                <div class="text-lg font-medium">${item.label}</div>
                <div class="flex gap-4 items-center">
                    <div class="w-full h-3 bg-zinc-200/70 rounded-r-lg">
                        <div class="bg-purple-500 rounded-r-lg h-3" style="width: ${item.percentage}%;"></div>
                    </div>
                    <div class="font-bold text-lg">${item.percentage.toFixed(1)}%</div>
                </div>
            </div>
        `;

        progressContainer.appendChild(div);
    });


