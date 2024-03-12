const { createApp, ref } = Vue

createApp({
  data() {
    return {
        items: 
            [   { link: 'https://imasters.com.br/perfil/fabianofm', label: "iMasters" },
                { link: 'https://github.com/fabianofm', label: "GitHub"},
                { link: 'https://pt.stackoverflow.com/users/37335/fabiano-monteiro', label: "Stack Overflow"}
            ],
        email: "fabianophp@hotmail.com"
     }
  }
}).mount('#app')