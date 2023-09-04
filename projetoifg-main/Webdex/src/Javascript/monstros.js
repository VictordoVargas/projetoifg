function criarCards() {
            let roupas = document.getElementById("cards");

            for (let i = 0; i < json.entity.length; i++) {
                let cardPos = document.createElement("div");
                let card = document.createElement("div");
                let cardBody = document.createElement("div");

                let imagem = document.createElement("img");
                let nome = document.createElement("h5");
                let descricao = document.createElement("p");

                let comprar = document.createElement("a");
                let comentarios = document.createElement("button");
                let comentar = document.createElement("button");

                let tabelaComentarios = document.createElement("table");

                imagem.src = json.entity[i].imagem;
                imagem.className = "card-img-top";

                nome.className = "card-title";
                nome.innerText = json.entity[i].nome;

                descricao.className = "card-text";
                descricao.innerText = json.entity[i].descricao;

                comprar.className = "btn btn-dark";
                comprar.innerText = "Comprar";
                comprar.href = "#";

                comentarios.className = "btn btn-dark";
                comentarios.innerText = "Comentários";
                comentarios.onclick = () => mostrarComentarios(nome.innerText);

                comentar.className = "btn btn-dark";
                comentar.innerText = "Comentar";
                comentar.onclick = () => comentarRoupa(nome.innerText);

                cardPos.className = "col-md-4 mb-4";
                cardPos.appendChild(card);

                card.className = "card";
                card.id = "card";
                card.appendChild(imagem);
                card.appendChild(cardBody);

                cardBody.className = "card-body";
                cardBody.appendChild(nome);
                cardBody.appendChild(descricao);
                cardBody.appendChild(comprar);
                cardBody.appendChild(comentarios);
                cardBody.appendChild(comentar);

                tabelaComentarios.id = "tabela-comentarios" + nome.innerText;
                cardPos.appendChild(tabelaComentarios);

                roupas.appendChild(cardPos);
            }
        });
