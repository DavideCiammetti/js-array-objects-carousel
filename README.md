# Consegna
Copiamo il carosello precedentemente creato in una nuova cartella (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

Milestone 0:
Creare un array di oggetti composto da Url, titolo, descrizione (potete inventare titolo e descrizione).

Milestone 1:
Usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.



for(let i= 0; i < imgArray.length; i++){


    const item = document.createElement('div');

    item.innerHTML += `<img src="../img/${imgArray[i]}" alt="img.1" />`;

    if(i >= actualImg){
        item.classList.add('active');
    }

    items.append(item);
}
io ho questo ci clo for per creare gli elementi all'interno della mia pagina ma vorrei fare diversamente usande il template tag in html 