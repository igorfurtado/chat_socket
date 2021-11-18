const socket = io(); //importante declarar o script importando o socket antes do script chat.js no html

let user = null;

socket.on('update_messages', (messages) => {
    updateMessagesOnScreen(messages); //Captura as mensagens no back-end e apresenta para o cliente em forma de lista.
});

function updateMessagesOnScreen(messages) { //messages é o dado que contém nome do usuário e sua mensagem.
    const div_messages = document.querySelector('#messages');
    //Para cada novo mensagem, um novo item será adicionado à lista:
    let list_messages = '<ul>' //concatenando para forma a tag ul
    messages.forEach(message => {
        if (user == message.user) {
            list_messages += `<li class="talk">${message.user}: ${message.msg}</li>`
        }
        else {
            list_messages += `<li class="talk-no-user">${message.user}: ${message.msg}</li>`
        }
    });
    list_messages += '</ul>'

    div_messages.innerHTML = list_messages;
    scrollToBottom()
};

function scrollToBottom() {
    const div_messages = document.querySelector('#messages');
    div_messages.scrollTop = div_messages.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#message_form');
    form.addEventListener('submit', (e) => { //event
        e.preventDefault(); //Para o comportamento padrão do formulário. Deseja-se utilizar o socket para fazer a integração client/server.
        //e.preventDefault não envia as mensagens do usuário para o backend (antes apareciam após a rota).

        if (!user) {
            alert('Defina um usuário');
            return; //Impede que a mensagem seja enviada.
        }

        const message = document.forms['message_form_name']['msg'].value; //Pegando o formulário pelo seu name. Depois acessando o valor do input de texto.
        document.forms['message_form_name']['msg'].value = ''; //Passando o valor vazio para o input de texto após cada mensagem ser enviada.
        socket.emit('new_message', { user: user, msg: message }); //Mostra na tela o nome do usuário e a mensagem escrita por este.
        console.log(message);
    });

    const userForm = document.querySelector('#user_form');
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        user = document.forms['user_form_name']['user'].value; //Acessando o valor do input no campo de nome do usuário e salvando na variável 'user'.
        userForm.parentNode.removeChild(userForm); //Selecionando o campo userForm e removendo este da tela a partir da sintaxe: element.parentNode.removeChild(element)
    });
});