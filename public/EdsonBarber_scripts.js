let formCliente = document.getElementById("cliente")
let formBarbeiro = document.getElementById("barbeiro")
let formServico = document.getElementById("servico")
let formData = document.getElementById("data")
let formFinal = document.getElementById("final")

const formCadastro = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const span = document.querySelectorAll(".span-required");
const telRegex = /^\(\d{2}\) 9\d{4}-\d{4}$/;
const nomeRegex = /^[a-zA-ZÀ-ú\s]+$/;


function mostrarErro(index){
    span[index].style.display = "block";
    campos[index].style.border = "2px solid #e63636";
    span[index].style.color = "#e63636";
}

function mostrarErroPisca(index){
    span[index].style.display = "block";    
    campos[index].style.border = "2px solid #f1e4d8";
    span[index].style.color = "white"
}

function removerErro(index){
    campos[index].style.border = "";
    span[index].style.display = "none";
}

function validarNome(){
    if(campos[0].value.length < 3) {        
        mostrarErro(0);         
    }
    else if (!nomeRegex.test(campos[0].value))
        alert("Digite um nome válido.") 
    else {        
        removerErro(0); 
        removerErro(1); 
    }
}

function validarTelefone(){
    if(telRegex.test(campos[1].value)){
        removerErro(1);          
    }else {
        mostrarErro(1);           
    }

    const telefone = document.getElementById("telefone");
    const telefoneValor = telefone.value;

    let telefoneFormatado = telefoneValor.replace(/\D/g, '');
    telefoneFormatado = telefoneFormatado.replace(/^(\d{2})(\d)/g, '($1) $2');
    telefoneFormatado = telefoneFormatado.replace(/(\d{5})(\d)/, '$1-$2');
    telefone.value = telefoneFormatado;
}

function validarBotao(){   
    if (campos[0].value == '' && campos[1].value == '') {
        let segundos = 0;        
        let temporizador = setInterval(function() {
            if (segundos == 1) {
                mostrarErroPisca(0);  
                mostrarErroPisca(1);                 
            }
            else if(segundos == 2) {
                mostrarErro(0); 
                mostrarErro(1);

                clearInterval(temporizador);
            }
            segundos++;
            
            }, 400);
    }
   
    else if (campos[0].value.length < 3 && !telRegex.test(campos[1].value)) {        
        let segundos = 0;        
        let temporizador = setInterval(function() {
            if (segundos == 1) {
                mostrarErroPisca(0);  
                mostrarErroPisca(1);                 
            }
            else if(segundos == 2) {
                mostrarErro(0); 
                mostrarErro(1);
                clearInterval(temporizador);
            }
            
            segundos++;
            
            }, 400);
    }
    
    else if (campos[0].value == '' && !telRegex.test(campos[1].value)) {
        let segundos = 0;        
        let temporizador = setInterval(function() {
            if (segundos == 1) {
                mostrarErroPisca(0); 
                mostrarErroPisca(1);                           
            }
            else if(segundos == 2) {
                mostrarErro(0); 
                mostrarErro(1);
                clearInterval(temporizador);
            }
            segundos++;
            
            }, 400);
    }
    
    else if (campos[0].value.length < 3 && campos[1].value == '') {
        let segundos = 0;        
        let temporizador = setInterval(function() {
            if (segundos == 1) {
                mostrarErroPisca(0); 
                mostrarErroPisca(1);                           
            }
            else if(segundos == 2) {
                mostrarErro(0); 
                mostrarErro(1);
                clearInterval(temporizador);
            }
            segundos++;
            
            }, 400);
    }
   
    else if (campos[0].value.length < 3) {
        let segundos = 0;        
        let temporizador = setInterval(function() {
            if (segundos == 1) {
                mostrarErroPisca(0);      
            }
            else if(segundos == 2) {
                mostrarErro(0); 
                clearInterval(temporizador);
            }
            segundos++;
            
            }, 400);
    }
  
    else if (!telRegex.test(campos[1].value)) {
        let segundos = 0;        
        let temporizador = setInterval(function() {
            if (segundos == 1) {
                mostrarErroPisca(1);      
            }
            else if(segundos == 2) {
                mostrarErro(1); 
                clearInterval(temporizador);
            }
            segundos++;
            
            }, 400);
    }

    else if (campos[0].value.length >= 3 && telRegex.test(campos[1].value)) {
        formCliente.style.display = "none"
        formBarbeiro.style.display = "block"
        setTimeout(() => {
            formBarbeiro.classList.add("show");
        })
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
}

//-----------------------------------------------------------------------------------------------------------------------

function escolherBarbeiro() { 
    let barbeiroInputs = document.querySelectorAll("input[name='opcao']");
    let barbeiroValue;
    let imagens = document.getElementsByClassName("imagem-barbeiro");
    let botao = document.getElementById("botao-barbeiro");

    for (let i = 0; i < barbeiroInputs.length; i++) {
        if (barbeiroInputs[i].checked) {
            barbeiroValue = barbeiroInputs[i].value;
            break;
        } 
    }

    for (let i = 0; i < imagens.length; i++) {

        switch (barbeiroValue) {
            case "Edson Araújo":
                imagens[0].style.border = "5px solid #ffbd59";
                //imagens[1].style.border = "";
                imagens[1].style.border = "";            
                botao.style.display = "inline-block";
                window.scroll({
                    top: 500,
                    left: 0,
                    behavior: 'smooth'
                  }); 
                setTimeout(() => {
                botao.classList.add("show");
                }, 100);
                break;

            /*case "Edilson Araújo":
                imagens[1].style.border = "5px solid #ffbd59";
                imagens[0].style.border = "";
                imagens[2].style.border = "";
                botao.style.display = "inline-block";
                window.scroll({
                    top: 720,
                    left: 0,
                    behavior: 'smooth'
                  });  
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);
                break;*/

            case "Bruno Luiz":
                imagens[1].style.border = "5px solid #ffbd59";
                //imagens[1].style.border = "";
                imagens[0].style.border = "";
                botao.style.display = "inline-block";
                window.scroll({
                    top: 500,
                    left: 0,
                    behavior: 'smooth'
                  }); 
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);
                break;
        }   
    }
}

function avancarServico() {
    let barbeiroInputs = document.querySelectorAll("input[name='opcao']");
    let selecionado = false;

    for (let i = 0; i < barbeiroInputs.length; i++) {
        if (barbeiroInputs[i].checked) {
            selecionado = true;
            
            break;
        }
    }

    if (selecionado) {
        formBarbeiro.style.display = "none";
        formServico.style.display = "block";
        setTimeout(() => {
            formServico.classList.add("show");
        }, 100);
                    
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    } else {
        alert("selecione um dos profissionais antes de avançar.")
    }
}

function voltarCliente() {
    formBarbeiro.style.display = "none";
    formCliente.style.display = "block";    
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}
    


//--------------------------------------------------------------------------------------------------------------


const servico = document.getElementsByClassName(".input-radio")

function escolherServico(servico) {
    let servicoInputs = document.querySelectorAll("input[name='servico']");
    let servicoValue; 
    let botao = document.getElementById("botao-servico");
    let borda = document.getElementsByClassName("label-borda");    
    for (let i = 0; i < servicoInputs.length; i++) {
        if (servicoInputs[i].checked) {
            servicoValue = servicoInputs[i].value;
            break;
        }
    }

    switch (servico) {
    case '1': 
        for (let i = 0; i < borda.length; i++) {
            if (i === 0) {
                borda[0].style.border = "2px solid #ffbd59";
                botao.style.display = "inline-block";
                window.scroll({
                    top: 770,
                    left: 0,
                    behavior: 'smooth'
                  });   
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);
            } else {
                borda[i].style.border = "";
            }
        }
        break;
    
    case '2': 
        for (let i = 0; i < borda.length; i++) {
            if (i === 1) {
                borda[1].style.border = "2px solid #ffbd59";                 
                botao.style.display = "inline-block";
                window.scroll({
                    top: 770,
                    left: 0,
                    behavior: 'smooth'
                  });    
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);                 
            } else {
                borda[i].style.border = "";
            }
        }    
        break;

    case '3':    
        for (let i = 0; i < borda.length; i++) {
            if (i === 2) {
                borda[2].style.border = "2px solid #ffbd59";
                botao.style.display = "inline-block";
                window.scroll({
                    top: 770,
                    left: 0,
                    behavior: 'smooth'
                  });     
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);                 
            } else {
                borda[i].style.border = "";
            }
        } 
        break; 
    
    case '4':
        for (let i = 0; i < borda.length; i++) {
            if (i === 3) {
                borda[3].style.border = "2px solid #ffbd59";                 
                botao.style.display = "inline-block";
                window.scroll({
                    top: 770,
                    left: 0,
                    behavior: 'smooth'
                  });     
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);                 
            } else {
                borda[i].style.border = "";
            }
        } 
        break;
        
    case '5':
        for (let i = 0; i < borda.length; i++) {
            if (i === 4) {
                borda[4].style.border = "2px solid #ffbd59";                 
                botao.style.display = "inline-block";
                window.scroll({
                    top: 770,
                    left: 0,
                    behavior: 'smooth'
                  });     
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);                
            } else {
                borda[i].style.border = "";
            }
        } 
        break;
        
    case "6": 
        for (let i = 0; i < borda.length; i++) {
            if (i === 5) {
                borda[5].style.border = "2px solid #ffbd59";                  
                botao.style.display = "inline-block";
                window.scroll({
                    top: 770,
                    left: 0,
                    behavior: 'smooth'
                  });     
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);                
            } else {
                borda[i].style.border = "";
            }
        }   
        break;
    
    case '7':
        for (let i = 0; i < borda.length; i++) {
            if (i === 6) {
                borda[6].style.border = "2px solid #ffbd59";                  
                botao.style.display = "inline-block";
                window.scroll({
                    top: 770,
                    left: 0,
                    behavior: 'smooth'
                  });    
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);                
            } else {
                borda[i].style.border = "";
            }
        }   
        break;
        
    case '8':
        for (let i = 0; i < borda.length; i++) {
            if (i === 7) {
                borda[7].style.border = "2px solid #ffbd59";                 
                botao.style.display = "inline-block";
                window.scroll({
                    top: 770,
                    left: 0,
                    behavior: 'smooth'
                  });     
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);                 
            } else {
                borda[i].style.border = "";
            }
        }    
        break;
    
    case '9':
        for (let i = 0; i < borda.length; i++) {
            if (i === 8) {
                borda[8].style.border = "2px solid #ffbd59";                                  
                botao.style.display = "inline-block";
                window.scroll({
                    top: 770,
                    left: 0,
                    behavior: 'smooth'
                  });     
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);
            } else {
                borda[i].style.border = "";
            }
        }
        break;
        
    case '10':
        for (let i = 0; i < borda.length; i++) {
            if (i === 9) {
                borda[9].style.border = "2px solid #ffbd59";                                  
                botao.style.display = "inline-block";
                window.scroll({
                    top: 770,
                    left: 0,
                    behavior: 'smooth'
                  });    
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);
            } else {
                borda[i].style.border = "";
            }
        }
        break;
        
    case '11':
        for (let i = 0; i < borda.length; i++) {
            if (i === 10) {
                borda[10].style.border = "2px solid #ffbd59";                                  
                botao.style.display = "inline-block";
                window.scroll({
                    top: 770,
                    left: 0,
                    behavior: 'smooth'
                  });     
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);
            } else {
                borda[i].style.border = "";
            }
        }
        break; 
    case '12':
        for (let i = 0; i < borda.length; i++) {
            if (i === 11) {
                borda[11].style.border = "2px solid #ffbd59";                                  
                botao.style.display = "inline-block";
                window.scroll({
                    top: 770,
                    left: 0,
                    behavior: 'smooth'
                  });     
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);
            } else {
                borda[i].style.border = "";
            }
        }
        break;
        
    case '13':
        for (let i = 0; i < borda.length; i++) {
            if (i === 12) {
                borda[12].style.border = "2px solid #ffbd59";                                  
                botao.style.display = "inline-block";
                window.scroll({
                    top: 770,
                    left: 0,
                    behavior: 'smooth'
                  });     
                setTimeout(() => {
                    botao.classList.add("show");
                }, 100);
            } else {
                borda[i].style.border = "";
            }
        }
        break; 
    
    }
}  

function avancarData() {    
    formServico.style.display = "none";
    formData.style.display = "block";
    setTimeout(() => {
        formData.classList.add("show");
    }, 100);
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    let atualizarData = document.getElementById("date-input");
    let spanSelect = document.getElementById("span-select");
    let selectHorario = document.getElementById("horario");
    let resumo = document.getElementById("resumo");
    atualizarData.value = "";
    spanSelect.style.display = "none";
    selectHorario.style.display = "none";
    resumo.style.display = "none";
}

function voltarBarbeiro() {
    formBarbeiro.style.display = "block";
    formServico.style.display = "none";
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

//------------------------------------------------------------------------------------------------------------------



function atualizaHorariosDisponiveis() {
    const dataSelecionada = document.getElementById('date-input').value; 
    const barbeiroInputs = document.querySelectorAll("input[name='opcao']");
    let barbeiroValue;
    for (let i = 0; i < barbeiroInputs.length; i++) {
        if (barbeiroInputs[i].checked) {
            barbeiroValue = barbeiroInputs[i].value;
            break;
        }
    }

    fetch(`/horarios-cadastrados/${dataSelecionada}/${barbeiroValue}`)
      .then(response => response.json())
      .then(horariosCadastrados => {
        const select = document.getElementById('horario');
        const opcoes = Array.from(select.children).slice(1);
        opcoes.forEach(opcao => {
          const horario = opcao.value;
          if (horariosCadastrados.includes(horario)) {                        
            opcao.disabled = true;
            opcao.classList.add('opcao-cadastrada');
          } else {
            opcao.disabled = false;            
          }
        }
    )}
)}

function dataMinMax() {
    let data = new Date();

    let dataMenosTresHoras = new Date(data);
    dataMenosTresHoras.setHours(data.getHours() - 3);    
    let dataAtualFormatada = dataMenosTresHoras.toISOString().slice(0, 10);    

    let dataMax = data;
    dataMax.setDate(dataMax.getDate() + 60);
    let dataMaxima = dataMax.toISOString().slice(0, 10);

    document.getElementById("date-input").setAttribute("min", dataAtualFormatada);
    document.getElementById("date-input").setAttribute("max", dataMaxima);

}

function diaDeFuncionamento() {
    let barbeiro = document.getElementsByName("opcao");
    let barbeiroSelecionado = "";
    let inputDia = document.getElementById("date-input");    
    let selectHorario = document.getElementById("horario");
    let spanSelect = document.getElementById("span-select");
    let botao = document.getElementById("botao-confirmar");
    let diaSelecionado = new Date(inputDia.value);
    let diaDaSemana = diaSelecionado.getDay(); 
    
    barbeiro.forEach(selecionado => {
        if (selecionado.checked) {
            barbeiroSelecionado = selecionado.value;
        }
    })

    if (diaDaSemana === 1 || diaDaSemana === 6){
        alert("Não trabalhamos as terças-feiras nem aos domingos.");
        selectHorario.style.display = "none";
        botao.style.display = "none"
        $(spanSelect).fadeIn(1000);
    } 
    else if (diaDaSemana === 4 && barbeiroSelecionado === "Edson Araújo"){
        alert("Desculpe, estou sem horário disponível as sextas-feiras, mas você pode tentar com outro barbeiro.");
        selectHorario.style.display = "none";
        botao.style.display = "none";
        $(spanSelect).fadeIn(1000);        
    }    
    
    else {
        spanSelect.style.display = "none";
        $(selectHorario).fadeTo(500, 1);
        $(botao).fadeIn(1000);
    }
}


function horarioDisponivel() {
    let barbeiro = document.getElementsByName("opcao");
    let resumo = document.getElementById("resumo")
    let inputDia = document.getElementById("date-input");
    let opcoes = document.getElementsByClassName("opcao");    
    let campoHorario = document.getElementById("horario");        
    let data = new Date();    
    let horaAtual = data.toLocaleTimeString().slice(0, 5)    
    let dataMenosTresHoras = new Date();
    dataMenosTresHoras.setHours(data.getHours() - 3);    
    let dataAtualFormatada = dataMenosTresHoras.toISOString().slice(0, 10); 
    atualizaHorariosDisponiveis();   
    let diaSelecionado = new Date(inputDia.value);
    let diaDaSemana = diaSelecionado.getDay();
    
    barbeiro.forEach(selecionado => {
        if (selecionado.checked) {
            barbeiroSelecionado = selecionado.value;
        }
    })

    let opcao; 
    for(let i = 0; i < opcoes.length; i++) {
        opcao = opcoes[i];     
    }

    campoHorario.value = "";  

    if(inputDia.value === dataAtualFormatada && (diaDaSemana === 0 || diaDaSemana === 2)) {  
        opcoes[0].textContent = "Selecione um horário";
        opcoes[1].textContent = "8:00h";
        opcoes[2].textContent = "9:00h";
        opcoes[3].textContent = "10:00h";
        opcoes[4].textContent = "11:00h";
        opcoes[5].textContent = "12:00h";
        opcoes[6].textContent = "14:40h";
        opcoes[7].textContent = "16:00h";
        opcoes[8].textContent = "17:00h";        
        opcoes[9].textContent = "18:00h";
        opcoes[10].textContent = "19:00h";        
        for(let i = 0; i < opcoes.length; i++) {
            let opcao = opcoes[i];            
            if (opcao.value <= horaAtual || opcao.value > "17:01") {
                opcao.textContent = "Indisponível"; 
                resumo.style.display = "none" ; 
            }
        }
    }

    else if (diaDaSemana === 5 && barbeiroSelecionado === "Edson Araújo") {                     
        opcoes[0].textContent = "Selecione um horário";
        opcoes[1].textContent = "Indisponível";
        opcoes[2].textContent = "Indisponível";
        opcoes[3].textContent = "Indisponível";
        opcoes[4].textContent = "Indisponível";
        opcoes[5].textContent = "Indisponível";
        opcoes[6].textContent = "Indisponível";
        opcoes[7].textContent = "16:00h";
        opcoes[8].textContent = "17:00h";        
        opcoes[9].textContent = "18:00h";
        opcoes[10].textContent = "19:00h";        
        resumo.style.display = "none" ;  
    }

    else if (inputDia.value === dataAtualFormatada) {
        opcoes[0].textContent = "Selecione um horário";
        opcoes[1].textContent = "8:00h";
        opcoes[2].textContent = "9:00h";
        opcoes[3].textContent = "10:00h";
        opcoes[4].textContent = "11:00h";
        opcoes[5].textContent = "12:00h";
        opcoes[6].textContent = "14:40h";
        opcoes[7].textContent = "16:00h";
        opcoes[8].textContent = "17:00h";        
        opcoes[9].textContent = "18:00h";
        opcoes[10].textContent = "19:00h";    
        for(let i = 0; i < opcoes.length; i++) {
            let opcao = opcoes[i];                        
            if (opcao.value <= horaAtual) {
                opcao.textContent = "Indisponível";  
                resumo.style.display = "none" ;             
            }
        }
    }

    else if (diaDaSemana === 0 || diaDaSemana === 2) {         
        opcoes[0].textContent = "Selecione um horário";
        opcoes[1].textContent = "8:00h";
        opcoes[2].textContent = "9:00h";
        opcoes[3].textContent = "10:00h";
        opcoes[4].textContent = "11:00h";
        opcoes[5].textContent = "12:00h";
        opcoes[6].textContent = "14:40h";
        opcoes[7].textContent = "16:00h";
        opcoes[8].textContent = "17:00h";        
        opcoes[9].textContent = "Indisponível";
        opcoes[10].textContent = "Indisponível";
        resumo.style.display = "none" ;          
    }

    else {  
        opcoes[0].textContent = "Selecione um horário";
        opcoes[1].textContent = "8:00h";
        opcoes[2].textContent = "9:00h";
        opcoes[3].textContent = "10:00h";
        opcoes[4].textContent = "11:00h";
        opcoes[5].textContent = "12:00h";
        opcoes[6].textContent = "14:40h";
        opcoes[7].textContent = "16:00h";
        opcoes[8].textContent = "17:00h";        
        opcoes[9].textContent = "18:00h";
        opcoes[10].textContent = "19:00h";                    
        resumo.style.display = "none";          
    }
}


function mudancaHorario() {
    let botao = document.getElementById("botao-confirmar")   
    let resumo = document.getElementById("resumo") 
    $(botao).fadeTo(1000, 1);
    resumo.style.display = "none";

    let horarioSelect = document.getElementById("horario"); 
    let horarioIndex = horarioSelect.selectedIndex;
    let opcaoSelect = horarioSelect.options[horarioIndex];    
    let opcaoText = opcaoSelect.text;

    if (opcaoText === 'Indisponível') {
        alert("Selecione um horário válido.")
        horarioSelect.value = "";
    }

}

function validarFormulario() {   
    let hora = document.getElementById("horario").value
    let data = document.getElementById("date-input").value  
    let partesData = data.split('-');
    let dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;
    let barbeiroInputs = document.querySelectorAll("input[name='opcao']");
    let barbeiroValue;
    let servicoInputs = document.querySelectorAll("input[name='servico']");
    let servicoValue;        
    let botaoAvancar = document.getElementById("botao-confirmar")    
    let resumo = document.getElementById("resumo")
    let dataInput = document.getElementById("date-input");    
    let horarioSelect = document.getElementById("horario"); 
     

    if (dataInput.value === '' || horarioSelect.value === '') {
        alert("verifique os campos e tente novamente.");
        
    } else {
        for (let i = 0; i < barbeiroInputs.length; i++) {
            if (barbeiroInputs[i].checked) {
                barbeiroValue = barbeiroInputs[i].value;
                break;
            }
        }

        for (let i = 0; i < servicoInputs.length; i++) {
            if (servicoInputs[i].checked) {
                servicoValue = servicoInputs[i].value;
                break;
            }
        }

        resumo.innerHTML = "<h2>Resumo:</h2>" +         
        "<p>Barbeiro: " + barbeiroValue + "</p>" +
        "<p>Serviço: " + servicoValue + "</p>" +
        "<p>Data: " + dataFormatada + "</p>" +
        "<p>Hora: " + hora + "h</p>" +
        "<button id='botao-agendar' type='button' onclick='enviarFormulario()'>" + "Confirmar" + "</button>";
        window.scroll({
            top: 200,
            left: 0,
            behavior: 'smooth'
          });
        $(resumo).fadeTo(1000,1)       
        botaoAvancar.style.display = "none" 
           
    }
}

function voltarServico() {
    formServico.style.display = "block";
    formData.style.display = "none";
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

function enviarFormulario() {    
    formCadastro.submit();      
}