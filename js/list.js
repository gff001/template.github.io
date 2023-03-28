let tot = $("ol#list-html li")

$(tot[0]).text("Estrutura básica de uma página HTML");
$(tot[1]).text("Tags HTML básicas: <html>, <head>, <body>, <title>");
$(tot[2]).text("Tags para formatação de texto: <h1>-<h6>, <p>, <strong>, <em>, <u>, <br>, <hr>");
$(tot[3]).text("Listas em HTML: <ul>, <ol>, <li>");
$(tot[4]).text("Links em HTML: <a>, href");
$(tot[5]).text("Imagens em HTML: <img>, src, alt");
$(tot[6]).text("Tabelas em HTML: <table>, <tr>, <th>, <td>, <caption>");
$(tot[7]).text("Formulários em HTML: <form>, <input>, <label>, <select>, <textarea>, <button>");
$(tot[8]).text(" Elementos semânticos HTML5: <header>, <nav>, <section>, <article>, <aside>, <footer>");
$(tot[9]).text("Meta tags para SEO: <meta name='description' content='Descrição da página'>, <meta name='keywords' content='palavras-chave, separadas, por, vírgulas'>");



$('#tp-apre').waypoint(function(direcao) {
     if ( direcao == 'down') {
        $('#header-mestre').css('background-color','rgba(24, 134, 107)').css('transition','0.5s');

       
     } else {
         $('#header-mestre').css('background-color','rgb(255, 255, 255)');
       
    }
    
},{
    offset:'100px;'
});