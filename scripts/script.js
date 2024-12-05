const teamsData = {
    // Conferência Oeste
    "dallas-mavericks": {
        name: "Dallas Mavericks",
        arena: "American Airlines Center",
        founded: 1980,
        location: "Dallas, Texas",
        conference: "Oeste",
        division: "Sudoeste",
        titles: 1, // 1 título da NBA
        conferenceTitles: 2, // 2 títulos de conferência
        mascot: "MavsMan", // Mascote do time
        logo: "./imagens/OESTE/logo-dallas-mavericks-4096.png", // Caminho para o logo
        website: "https://www.mavs.com"
    },
    "denver-nuggets": {
        name: "Denver Nuggets",
        arena: "Ball Arena",
        founded: 1967,
        location: "Denver, Colorado",
        conference: "Oeste",
        division: "Noroeste",
        titles: 1, // 1 título da NBA
        conferenceTitles: 2, // 2 títulos de conferência
        mascot: "Rocky the Mountain Lion",
        logo: "./imagens/OESTE/logo-denver-nuggets-2048.png",
        website: "https://www.nuggets.com"
    },
    "houston-rockets": {
        name: "Houston Rockets",
        arena: "Toyota Center",
        founded: 1967,
        location: "Houston, Texas",
        conference: "Oeste",
        division: "Sudoeste",
        titles: 2,
        conferenceTitles: 4,
        mascot: "Clutch the Rocket Bear",
        logo: "./imagens/OESTE/logo-houston-rockets-4096.png",
        website: "https://www.nba.com/rockets"
    },
    "los-angeles-clippers": {
        name: "Los Angeles Clippers",
        arena: "Crypto.com Arena",
        founded: 1970,
        location: "Los Angeles, Califórnia",
        conference: "Oeste",
        division: "Pacífico",
        titles: 0,
        conferenceTitles: 0,
        mascot: "Chuck the Condor",
        logo: "./imagens/OESTE/logo-los-angeles-clippers-4096.png",
        website: "https://www.clippers.com"
    },
    "los-angeles-lakers": {
        name: "Los Angeles Lakers",
        arena: "Crypto.com Arena",
        founded: 1947,
        location: "Los Angeles, Califórnia",
        conference: "Oeste",
        division: "Pacífico",
        titles: 17,
        conferenceTitles: 32,
        mascot: "Nenhum mascote oficial",
        logo: "./imagens/OESTE/logo-los-angeles-lakers-4096.png",
        website: "https://www.lakers.com"
    },
    "memphis-grizzlies": {
        name: "Memphis Grizzlies",
        arena: "FedExForum",
        founded: 1995,
        location: "Memphis, Tennessee",
        conference: "Oeste",
        division: "Sudoeste",
        titles: 0,
        conferenceTitles: 0,
        mascot: "Grizz",
        logo: "./imagens/OESTE/logo-memphis-grizzlies-2048.png",
        website: "https://www.nba.com/grizzlies"
    },
    "minnesota-timberwolves": {
        name: "Minnesota Timberwolves",
        arena: "Target Center",
        founded: 1989,
        location: "Minneapolis, Minnesota",
        conference: "Oeste",
        division: "Noroeste",
        titles: 0,
        conferenceTitles: 0,
        mascot: "Crunch the Wolf",
        logo: "./imagens/OESTE/logo-minnesota-timberwolves-2048.png",
        website: "https://www.nba.com/timberwolves"
    },
    "new-orleans-pelicans": {
        name: "New Orleans Pelicans",
        arena: "Smoothie King Center",
        founded: 2002,
        location: "New Orleans, Louisiana",
        conference: "Oeste",
        division: "Sudoeste",
        titles: 0,
        conferenceTitles: 0,
        mascot: "Pierre the Pelican",
        logo: "./imagens/OESTE/logo-new-orleans-pelicans-2048.png",
        website: "https://www.nba.com/pelicans"
    },
    "phoenix-suns": {
        name: "Phoenix Suns",
        arena: "Footprint Center",
        founded: 1968,
        location: "Phoenix, Arizona",
        conference: "Oeste",
        division: "Pacífico",
        titles: 0,
        conferenceTitles: 3,
        mascot: "The Suns Gorilla",
        logo: "./imagens/OESTE/logo-phoenix-suns-4096.png",
        website: "https://www.nba.com/suns"
    },
    "portland-trail-blazers": {
        name: "Portland Trail Blazers",
        arena: "Moda Center",
        founded: 1970,
        location: "Portland, Oregon",
        conference: "Oeste",
        division: "Noroeste",
        titles: 1,
        conferenceTitles: 3,
        mascot: "Blaze the Trail Cat",
        logo: "./imagens/OESTE/logo-portland-trail-blazers-2048.png",
        website: "https://www.nba.com/blazers"
    },
    "sacramento-kings": {
        name: "Sacramento Kings",
        arena: "Golden 1 Center",
        founded: 1923,
        location: "Sacramento, Califórnia",
        conference: "Oeste",
        division: "Pacífico",
        titles: 1,
        conferenceTitles: 3,
        mascot: "Slamson the Lion",
        logo: "./imagens/OESTE/logo-sacramento-kings-2048.png",
        website: "https://www.nba.com/kings"
    },
    "san-antonio-spurs": {
        name: "San Antonio Spurs",
        arena: "AT&T Center",
        founded: 1967,
        location: "San Antonio, Texas",
        conference: "Oeste",
        division: "Sudoeste",
        titles: 5,
        conferenceTitles: 6,
        mascot: "The Coyote",
        logo: "./imagens/OESTE/logo-san-antonio-spurs-2048.png",
        website: "https://www.nba.com/spurs"
    },
    "utah-jazz": {
        name: "Utah Jazz",
        arena: "Delta Center",
        founded: 1974,
        location: "Salt Lake City, Utah",
        conference: "Oeste",
        division: "Noroeste",
        titles: 0,
        conferenceTitles: 2,
        mascot: "Jazz Bear",
        logo: "./imagens/OESTE/logo-utah-jazz-2048.png",
        website: "https://www.nba.com/jazz"
    },
    "golden-state-warriors": {
        name: "Golden State Warriors",
        arena: "Chase Center",
        founded: 1946,
        location: "San Francisco, Califórnia",
        conference: "Oeste",
        division: "Pacífico",
        titles: 7,
        conferenceTitles: 7,
        mascot: "Não tem mascote oficial",
        logo: "./imagens/OESTE/logo-golden-state-warriors-4096.png",
        website: "https://www.nba.com/warriors"
    },
    "oklahoma-city-thunder": {
        name: "Oklahoma City Thunder",
        arena: "Paycom Center",
        founded: 1967,
        location: "Oklahoma City, Oklahoma",
        conference: "Oeste",
        division: "Noroeste",
        titles: 1,
        conferenceTitles: 4,
        mascot: "Rumble the Bison",
        logo: "./imagens/OESTE/logo-oklahoma-city-thunder-1024.png",
        website: "https://www.nba.com/thunder"
    },

    // Conferência Leste
    "atlanta-hawks": {
        name: "Atlanta Hawks",
        arena: "State Farm Arena",
        founded: 1946,
        location: "Atlanta, Geórgia",
        conference: "Leste",
        division: "Sudeste",
        titles: 1,
        conferenceTitles: 4,
        mascot: "Harry the Hawk",
        logo: "./imagens/LESTE/logo-atlanta-hawks-2048.png",
        website: "https://www.nba.com/hawks"
    },
    "boston-celtics": {
        name: "Boston Celtics",
        arena: "TD Garden",
        founded: 1946,
        location: "Boston, Massachusetts",
        conference: "Leste",
        division: "Atlântico",
        titles: 17,
        conferenceTitles: 21,
        mascot: "Lucky the Leprechaun",
        logo: "./imagens/LESTE/logo-boston-celtics-4096.png",
        website: "https://www.nba.com/celtics"
    },
    "charlotte-hornets": {
        name: "Charlotte Hornets",
        arena: "Spectrum Center",
        founded: 1988,
        location: "Charlotte, Carolina do Norte",
        conference: "Leste",
        division: "Sudeste",
        titles: 0,
        conferenceTitles: 0,
        mascot: "Hugo the Hornet",
        logo: "./imagens/LESTE/logo-charlotte-hornets-2048.png",
        website: "https://www.nba.com/hornets"
    },
    "chicago-bulls": {
        name: "Chicago Bulls",
        arena: "United Center",
        founded: 1966,
        location: "Chicago, Illinois",
        conference: "Leste",
        division: "Central",
        titles: 6,
        conferenceTitles: 6,
        mascot: "Benny the Bull",
        logo: "./imagens/LESTE/logo-chicago-bulls-4096.png",
        website: "https://www.nba.com/bulls"
    },
    "cleveland-cavaliers": {
        name: "Cleveland Cavaliers",
        arena: "Rocket Mortgage FieldHouse",
        founded: 1970,
        location: "Cleveland, Ohio",
        conference: "Leste",
        division: "Central",
        titles: 1,
        conferenceTitles: 5,
        mascot: "Moondog",
        logo: "./imagens/LESTE/logo-cleveland-cavaliers-2048.png",
        website: "https://www.nba.com/cavaliers"
    },
    "detroit-pistons": {
        name: "Detroit Pistons",
        arena: "Little Caesars Arena",
        founded: 1941,
        location: "Detroit, Michigan",
        conference: "Leste",
        division: "Central",
        titles: 3,
        conferenceTitles: 7,
        mascot: "Hooper",
        logo: "./imagens/LESTE/logo-detroit-pistons-2048.png",
        website: "https://www.nba.com/pistons"
    },
    "indiana-pacers": {
        name: "Indiana Pacers",
        arena: "Gainbridge Fieldhouse",
        founded: 1967,
        location: "Indianápolis, Indiana",
        conference: "Leste",
        division: "Central",
        titles: 1,
        conferenceTitles: 3,
        mascot: "Boomer the Cat",
        logo: "./imagens/LESTE/logo-indiana-pacers-4096.png",
        website: "https://www.nba.com/pacers"
    },
    "miami-heat": {
        name: "Miami Heat",
        arena: "Kaseya Center",
        founded: 1988,
        location: "Miami, Flórida",
        conference: "Leste",
        division: "Sudeste",
        titles: 3,
        conferenceTitles: 6,
        mascot: "Burnie the Heat Mascot",
        logo: "./imagens/LESTE/logo-miami-heat-4096.png",
        website: "https://www.nba.com/heat"
    },
    "milwaukee-bucks": {
        name: "Milwaukee Bucks",
        arena: "Fiserv Forum",
        founded: 1968,
        location: "Milwaukee, Wisconsin",
        conference: "Leste",
        division: "Central",
        titles: 2,
        conferenceTitles: 3,
        mascot: "Bango the Buck",
        logo: "./imagens/LESTE/logo-milwaukee-bucks-4096.png",
        website: "https://www.nba.com/bucks"
    },
    "brooklyn-nets": {
        name: "Brooklyn Nets",
        arena: "Barclays Center",
        founded: 1967,
        location: "Brooklyn, Nova Iorque",
        conference: "Leste",
        division: "Atlântico",
        titles: 0,
        conferenceTitles: 0,
        mascot: "None",
        logo: "./imagens/LESTE/logo-brooklyn-nets-4096.png",
        website: "https://www.nba.com/nets"
    },
    "new-york-knicks": {
        name: "New York Knicks",
        arena: "Madison Square Garden",
        founded: 1946,
        location: "New York City, Nova Iorque",
        conference: "Leste",
        division: "Atlântico",
        titles: 2,
        conferenceTitles: 4,
        mascot: "None",
        logo: "./imagens/LESTE/logo-new-york-knicks-4096.png",
        website: "https://www.nba.com/knicks"
    },
    "orlando-magic": {
        name: "Orlando Magic",
        arena: "Amway Center",
        founded: 1989,
        location: "Orlando, Flórida",
        conference: "Leste",
        division: "Sudeste",
        titles: 0,
        conferenceTitles: 0,
        mascot: "Stuff the Magic Dragon",
        logo: "./imagens/LESTE/logo-orlando-magic-4096.png",
        website: "https://www.nba.com/magic"
    },
    "philadelphia-76ers": {
        name: "Philadelphia 76ers",
        arena: "Wells Fargo Center",
        founded: 1946,
        location: "Filadélfia, Pensilvânia",
        conference: "Leste",
        division: "Atlântico",
        titles: 3,
        conferenceTitles: 4,
        mascot: "Franklin the Dog",
        logo: "./imagens/LESTE/logo-philadelphia-76ers-4096.png",
        website: "https://www.nba.com/sixers"
    },
    "toronto-raptors": {
        name: "Toronto Raptors",
        arena: "Scotiabank Arena",
        founded: 1995,
        location: "Toronto, Ontário",
        conference: "Leste",
        division: "Atlântico",
        titles: 1,
        conferenceTitles: 1,
        mascot: "The Raptor",
        logo: "./imagens/LESTE/logo-toronto-raptors-4096.png",
        website: "https://www.nba.com/raptors"
    },
    "washington-wizards": {
        name: "Washington Wizards",
        arena: "Capital One Arena",
        founded: 1961,
        location: "Washington, D.C.",
        conference: "Leste",
        division: "Sudeste",
        titles: 1,
        conferenceTitles: 5,
        mascot: "G-Wiz",
        logo: "./imagens/LESTE/logo-washington-wizards-2048.png",
        website: "https://www.nba.com/wizards"
    }
};

// Função para calcular a pontuação e exibir no popup
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio real do formulário

    // Respostas corretas
    const respostasCorretas = {
        mvp: 'kareem',
        time_campeao: 'celtics',
        king: 'james',
        primeiro_pick: 'james',
        aposentadoria: '1993',
        campeao_2016: 'cavaliers',
        recorde_pontos: 'chamberlain',
        trofeu: 'russell',
        tecnico: 'phil',
        jovem_30000: 'james'
    };

    let pontuacao = 0;
    let totalPerguntas = Object.keys(respostasCorretas).length;

    // Verifica as respostas
    for (let pergunta in respostasCorretas) {
        const respostaSelecionada = document.querySelector(`select[name="${pergunta}"]`).value;
        if (respostaSelecionada === respostasCorretas[pergunta]) {
            pontuacao++;
        }
    }

    // Mensagens e GIFs baseados na pontuação
    let mensagemPopup = '';
    let gifPopup = '';
    if (pontuacao === 0) {
        mensagemPopup = 'Você não acertou nenhuma pergunta. O mesmo número de títulos dos Clippers!';
        gifPopup = './assets/la-clippers-los-angeles-clippers.gif';
    } else if (pontuacao <= 4) {
        mensagemPopup = 'Você acertou ' + pontuacao + '. Continue tentando!';
        gifPopup = './assets/oops-nba.gif';
    } else if (pontuacao <= 7) {
        mensagemPopup = 'Você acertou ' + pontuacao + '. Quase lá!';
        gifPopup = './assets/los-angeles-clippers-kawhi-leonard.gif';
    } else if (pontuacao <= 9) {
        mensagemPopup = 'Você acertou ' + pontuacao + ' perguntas. Boa!';
        gifPopup = './assets/jimmy-buttler-lucky-d.gif';
    } else if (pontuacao === 10) {
        mensagemPopup = 'Você acertou todas as perguntas! GOAT 🐐';
        gifPopup = './assets/goat.gif'; 
    }

    // Exibe a pontuação no popup
    document.getElementById('popupMessage').innerText = mensagemPopup;
    document.getElementById('popupGif').src = gifPopup;
    document.getElementById('resultPopup').style.display = 'block';
});

// Fechar o pop-up quando a tecla ESC for pressionada
window.addEventListener('keydown', (event) => {
    if (event.key === "Escape") { // Verifica se a tecla pressionada foi "Escape"
        document.getElementById('resultPopup').style.display = "none"; // Aqui, use o ID correto
    }
});

// Função para fechar o pop-up
function closePopup() {
    document.getElementById('resultPopup').style.display = 'none'; // Fechar o pop-up corretamente
}

// Selecionando os elementos da interface
const conferenceDivisionSelect = document.getElementById('conference-division-select');
const teamLogosContainer = document.getElementById('team-logos-container');
const popup = document.getElementById('team-popup');
const closePopupBtn = document.getElementById('close-popup');

// Selecionando os elementos dentro do pop-up
const teamName = document.getElementById('team-name');
const teamArena = document.getElementById('team-arena');
const teamFounded = document.getElementById('team-founded');
const teamLocation = document.getElementById('team-location');
const teamConference = document.getElementById('team-conference');
const teamDivision = document.getElementById('team-division');
const teamTitles = document.getElementById('team-titles');
const teamConferenceTitles = document.getElementById('team-conference-titles');
const teamMascot = document.getElementById('team-mascot');
const teamLogo = document.getElementById('team-logo');
const teamWebsite = document.getElementById('team-website');

// Função para exibir os logotipos das equipes com base no filtro
function displayTeamLogos(filterValue) {
    teamLogosContainer.innerHTML = ''; // Limpar os logotipos exibidos

    // Se não houver filtro selecionado (exibir todas as equipes)
    if (!filterValue) {
        Object.values(teamsData).forEach(team => {
            const logoElement = document.createElement('img');
            logoElement.src = team.logo;
            logoElement.alt = team.name;
            logoElement.classList.add('team-logo');
            logoElement.setAttribute('data-team', team.name.toLowerCase().replace(/\s+/g, '-'));
            teamLogosContainer.appendChild(logoElement);
        });
        return;
    }

    // Filtra as equipes com base no valor selecionado
    const filteredTeams = Object.values(teamsData).filter(team => {
        // Se for uma conferência (Oeste ou Leste)
        if (filterValue === 'oeste' || filterValue === 'leste') {
            return team.conference.toLowerCase() === filterValue;
        }

        // Se for uma divisão (Atlântico, Central, Sudeste, etc.)
        const divisions = {
            atlantico: "Atlântico",
            central: "Central",
            sudeste: "Sudeste",
            noroeste: "Noroeste",
            pacifico: "Pacífico",
            sudoeste: "Sudoeste"
        };

        if (divisions[filterValue]) {
            return team.division === divisions[filterValue];
        }

        return false;
    });

    // Exibe os logotipos das equipes filtradas
    filteredTeams.forEach(team => {
        const logoElement = document.createElement('img');
        logoElement.src = team.logo;
        logoElement.alt = team.name;
        logoElement.classList.add('team-logo');
        logoElement.setAttribute('data-team', team.name.toLowerCase().replace(/\s+/g, '-'));
        teamLogosContainer.appendChild(logoElement);
    });
}

// Função para exibir o pop-up com as informações do time
function showPopup(team) {
    teamName.textContent = team.name;
    teamArena.textContent = team.arena;
    teamFounded.textContent = team.founded;
    teamLocation.textContent = team.location;
    teamConference.textContent = team.conference;
    teamDivision.textContent = team.division;
    teamTitles.textContent = team.titles > 0 ? team.titles : "Sem títulos";
    teamConferenceTitles.textContent = team.conferenceTitles > 0 ? team.conferenceTitles : "Sem títulos de conferência";
    teamMascot.textContent = team.mascot;
    teamLogo.src = team.logo; // Exibe o logo
    teamWebsite.href = team.website;

    popup.style.display = "block"; // Exibe o pop-up
}

// Fechar o pop-up
closePopupBtn.addEventListener('click', () => {
    popup.style.display = "none";
});

// Fechar o pop-up quando a tecla ESC for pressionada
window.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        popup.style.display = "none";
    }
});

// Adiciona evento de clique nos logotipos para abrir o pop-up
teamLogosContainer.addEventListener('click', (event) => {
    const teamId = event.target.getAttribute('data-team');
    if (teamId) {
        const team = teamsData[teamId];
        if (team) {
            showPopup(team);
        }
    }
});

// Exibe todos os logotipos inicialmente (sem filtro)
displayTeamLogos('');

// Adiciona o evento de alteração para o filtro
conferenceDivisionSelect.addEventListener('change', (event) => {
    const selectedFilter = event.target.value;
    displayTeamLogos(selectedFilter); // Exibe os logotipos com base no filtro
});


        document.getElementById("draftForm").addEventListener("submit", function(event) {
            event.preventDefault();  // Previne o envio do formulário e a recarga da página

            // Captura as informações do formulário
            const nome = document.getElementById("nome").value;
            const idade = document.getElementById("idade").value;
            const altura = document.getElementById("altura").value;
            const peso = document.getElementById("peso").value;
            const pais = document.getElementById("pais").value;

            // Captura a posição selecionada
            let posicao = "";
            const posicoes = document.getElementsByName("posicao");
            for (let i = 0; i < posicoes.length; i++) {
                if (posicoes[i].checked) {
                    posicao = posicoes[i].value;
                    break;
                }
            }

            // Verifica se todos os campos obrigatórios foram preenchidos
            if (nome && idade && altura && peso && pais && posicao) {
                // Exibe o alert com as informações de inscrição
                alert(`Parabéns ${nome}, você está inscrito para o DRAFT 2025!\n\n` +
                      `Nome Completo: ${nome}\n` +
                      `Idade: ${idade}\n` +
                      `Altura: ${altura} m\n` +
                      `Peso: ${peso} kg\n` +
                      `País: ${pais}\n` +
                      `Posição: ${posicao}`);
                
                // Ativa o áudio
                document.getElementById('audio').play();
                alert("Candidatura enviada com sucesso e para já ir entrando no clima do DRAFT 2025, SOM NA CAIXA, DJ!");
                
                // Limpa os campos do formulário
                document.getElementById("draftForm").reset();
            } else {
                alert("Por favor, preencha todos os campos do formulário.");
            }
        });