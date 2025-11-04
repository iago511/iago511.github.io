


//********************************************************************************************************************************** */
//AVISO, CODIGO A BAIXO TEM ALTAS PORCENTAGENS DE IA, TANTO QUE EM ALGUNS PONTOS NEM ENTENDI OQ ACONTECEU. sÓ FIZ ISSO PARA TENTAR DAR UM GRAU NO MEU SITE SOBRE MIM. sÓ ESTAVA CURIOSO. MAS TENTEI EXPLICAR OQ SABIA
//*********************************************************************************************************************************************** */

// Espera o HTML todo carregar para depois executar o codigo aqui dentro.
document.addEventListener('DOMContentLoaded', () => {

    //configurando os links das APIs
    const CONFIG = {
        github: {
            username: 'iago511'
        },
        weather: {
            apiKey: '3652dedf01626ba4a833377ab71fc392',
            city: 'Sao Paulo, BR'
        },
        quote: {
            apiUrl: 'https://zenquotes.io/api/random'
        }
    };

    // Define as cores para cada linguagem de programacao
    const LANGUAGE_COLORS = {
        "JavaScript": "#f1e05a",
        "HTML": "#e34c26",
        "CSS": "#563d7c",
        "Python": "#3572A5",
        "Java": "#b07219",
        "Outro": "#ededed"
    };
    // Pega os elementos do HTML (os divs, o form) pelo ID e guarda em variaveis.
    const weatherContent = document.getElementById('weather-content');
    const quoteContent = document.getElementById('quote-content');
    const githubContent = document.getElementById('github-content');
    const langStatsContainer = document.getElementById('lang-stats-container');
    const chatDisplay = document.getElementById('chat-display');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');

    // Funcao para buscar a previsao do tempo
    async function fetchWeather() {
        // ...
        // Checa se a chave da API foi colocada
        if (CONFIG.weather.apiKey === 'SUA_CHAVE_API_AQUI') {
            weatherContent.innerHTML = '<p>Configure sua API Key.</p>';
            return;
        }
        // Monta o link da API de clima
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${CONFIG.weather.city}&appid=${CONFIG.weather.apiKey}&units=metric&lang=pt_br`;
        
        // Tenta buscar o clima
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Erro na rede: ${response.statusText}`);
            const data = await response.json();
            
            // Coloca o HTML do clima na pagina
            weatherContent.innerHTML = `
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
                <div>
                    <strong>${data.main.temp.toFixed(1)}°C</strong> (${data.weather[0].description})
                    <br>
                    <span>Em ${data.name}</span>
                </div>
            `;
        } catch (error) {
            // Se der erro, avisa no console e na pagina
            console.error('Erro ao buscar clima:', error);
            weatherContent.innerHTML = '<p>Nao foi possivel carregar o clima.</p>';
        }
    }

    // Funcao para buscar uma citacao
    async function fetchQuote() {
        // ...
        try {
            // Usa um "proxy" (o allorigins) para a API nao bloquear
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(CONFIG.quote.apiUrl)}`);
            if (!response.ok) throw new Error('Erro na rede (proxy)');
            const proxyData = await response.json();
            const data = JSON.parse(proxyData.contents); 
            const quote = data[0].q;
            const author = data[0].a;
            
            // Coloca a citacao e o autor na pagina
            quoteContent.innerHTML = `
                <p>"${quote}"</p>
                <footer>— ${author}</footer>
            `;
        } catch (error) {
            // Se der erro, avisa
            console.error("Erro ao buscar citacao:", error);
            quoteContent.innerHTML = '<p>Nao foi possivel carregar a citacao.</p>';
        }
    }

    // (O codigo tem duas funcoes com o mesmo nome 'fetchGitHubData'. 
    // O navegador vai usar so a segunda, esta aqui de baixo)
    async function fetchGitHubData() {
        // ...
    }


    // Funcao para buscar os dados do GitHub
    async function fetchGitHubData() {
        // Monta o link para pegar todos os repositorios (ate 100)
        const url = `https://api.github.com/users/${CONFIG.github.username}/repos?per_page=100`;
    
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Erro: ${response.statusText}`);
            const repos = await response.json();
    
            if (repos.length === 0) {
                githubContent.innerHTML = '<p>Nenhum repositorio encontrado.</p>';
                return;
            }
    
            // Chama a funcao para mostrar a lista de repositorios
            displayGitHubRepos(repos);
    
            // Agora, busca as linguagens de todos os repositorios
            const languageTotals = {};
            // Faz um loop, passando por cada repositorio
            for (const repo of repos) {
                // Pega o link de linguagens do repositorio
                const langResponse = await fetch(repo.languages_url);
                if (!langResponse.ok) continue; // Pula se der erro
                const langData = await langResponse.json();
    
                // Soma os bytes de cada linguagem
                for (const [lang, bytes] of Object.entries(langData)) {
                    languageTotals[lang] = (languageTotals[lang] || 0) + bytes;
                }
            }
    
            // Chama a funcao para criar o grafico de pizza com os totais
            renderLanguageChart(languageTotals);
    
        } catch (error) {
            // Se der erro, avisa
            console.error('Erro ao buscar dados do GitHub:', error);
            githubContent.innerHTML = '<p>Erro ao carregar repositorios.</p>';
        }
    }

    // Funcao que bota a lista de repositorios no HTML
    function displayGitHubRepos(repos) {
        // Pega so os 5 primeiros da lista
        const repoList = repos.slice(0, 5).map(repo => `
            <li>
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <p>${repo.description || 'Sem descricao.'}</p>
            </li>
        `).join(''); // Junta tudo numa string so
        // Coloca a lista no HTML
        githubContent.innerHTML = `<ul>${repoList}</ul>`;
    }
    

    // Funcao que faz o grafico de pizza
    function renderLanguageChart(languageTotals) {
        // Pega o elemento 'canvas' do HTML
        const ctx = document.getElementById('langChart').getContext('2d');
        const labels = Object.keys(languageTotals); // Ex: ["JavaScript", "HTML"]
        const values = Object.values(languageTotals); // Ex: [5000, 2000]
        // Pega as cores que definimos la em cima
        const colors = labels.map(lang => LANGUAGE_COLORS[lang] || LANGUAGE_COLORS["Outro"]);
    
        // Se ja existe um grafico, destroi ele antes de criar um novo
        if (window.languageChart) {
            window.languageChart.destroy();
        }
    
        // Cria o novo grafico usando a biblioteca Chart.js
        window.languageChart = new Chart(ctx, {
            type: 'pie', // tipo pizza
            data: {
                labels,
                datasets: [{
                    data: values,
                    backgroundColor: colors
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'right' },
                    title: {
                        display: true,
                        text: 'Distribuicao de Linguagens nos Repositorios'
                    }
                }
            }
        });
    }

    // --- FIM DA SEÇÃO OTIMIZADA ---



    // Fica  ouvindo o formulario de chat
    chatForm.addEventListener('submit', (e) => {
        // Nao deixa a pagina recarregar quando da Enter
        e.preventDefault();
        // Pega a mensagem que o usuario digitou
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            // Mostra a mensagem do usuario na tela
            appendMessage('user', userMessage);
            chatInput.value = ''; // Limpa o campo
            // Espera meio segundo e da a resposta do bot
            setTimeout(() => {
                const botResponse = getBotResponse(userMessage);
                appendMessage('bot', botResponse);
            }, 500);
        }
    });

    // Funcao para botar a mensagem (do usuario ou bot) no chat
    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', `message-${sender}`);
        messageElement.innerHTML = `<p>${message}</p>`;
        chatDisplay.appendChild(messageElement);
        // Rola o chat para baixo
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }


    // O "cerebro" do bot
    function getBotResponse(message) {
        const lowerMsg = message.toLowerCase(); // Bota tudo em minuscula
        // Procura por palavras-chave
        if (lowerMsg.includes('ola') || lowerMsg.includes('oi')) {
            return 'Ola! Como posso ajudar? Tente perguntar sobre meus "projetos" ou "contato".';
        }
        if (lowerMsg.includes('projeto')) {
            return 'Meus projetos principais estao listados aqui ao lado, na secao do GitHub!';
        }
        if (lowerMsg.includes('contato')) {
            return 'Voce pode me encontrar no LinkedIn ou enviar e-mail para iagonsiodiniz@gmail.com';
        }
        if (lowerMsg.includes('obrigado')) {
            return 'De nada';
        }
        // Resposta padrao
        return 'Desculpe, nao entendi. Eu sou um bot simples.';
    }

    // Funcao que liga tudo
    function init() {
        fetchWeather(); // Busca o clima
        fetchQuote(); // Busca a citacao
        // Chama a funcao do GitHub (a segunda, que e a que vale)
        fetchGitHubData(); 
    }

    // Executa a funcao '1init e comeca tudo
    init();
});