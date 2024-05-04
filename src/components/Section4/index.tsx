'use client'
import "./styles.css"
import Botao from "../Botao";
import Produto from "../Produto";


export function Section4() {
    return (

        <section className="section4">
          <div>
            <h2>Acabou de chegar</h2>
            <div>
            <Produto 
            preco="R$65,00"
            title="Memórias Quase Póstumas De Machado De Assis"
            image="livro1.jpg"
            link="https://www.jujubooks.com.br/produto/memorias-quase-postumas-de-machado-de-assis/"
            ></Produto>
            

            <Produto 
            preco="R$30,00"
            title="Só Não Vê Quem Não Quer"
            image="livro2.jpg"
            link="https://www.jujubooks.com.br/produto/so-nao-ve-quem-nao-quer/"
            ></Produto>

            <Produto 
            preco="R$38,00"
            title="O Clube Dos Contrários"
            image="livro3.jpg"
            link="https://www.jujubooks.com.br/produto/o-clube-dos-contrarios/"
            ></Produto>

            <Produto 
            preco="R$40,00"
            title="A Cinderela Das Bonecas (Série Vou Te Contar!)"
            image="livro4.jpg"
            link="https://www.jujubooks.com.br/produto/a-cinderela-das-bonecas-serie-vou-te-contar/"
            ></Produto>

            <Produto 
            preco="R$25,00"
            title="Aquele Estranho Colega, O Meu Pai (Série Entre Linhas – Adolescência)"
            image="livro5.jpg"
            link="https://www.jujubooks.com.br/produto/aquele-estranho-colega-o-meu-pai-serie-entre-linhas-adolescencia/"            
            ></Produto>

            <Produto 
            preco="R$38,00"
            title="Palavra De Filho"
            image="livro6.jpg"
            link="https://www.jujubooks.com.br/produto/palavra-de-filho-2/"            
            ></Produto>

            <Produto 
            preco="R$25,00"
            title="Isaac Newton E Sua Maçã ( Série Mortos De Fama)"
            image="livro7.jpg"
            link="https://www.jujubooks.com.br/produto/isaac-newton-e-sua-maca-serie-mortos-de-fama/"            
            ></Produto>

            <Produto 
            preco="R$45,00"
            title="Histórias Da Cazumbinha"
            image="livro8.jpg"
            link="https://www.jujubooks.com.br/produto/historias-da-cazumbinha/"            
            ></Produto>

            <Produto 
            preco="R$25,00"
            title="Poesia A Gente Inventa"
            image="livro9.jpg"
            link="https://www.jujubooks.com.br/produto/poesia-a-gente-inventa/"            
            ></Produto>

            <Produto 
            preco="R$30,00"
            title="Píppi MeiaLonga"
            image="livro10.jpg"
            link="https://www.jujubooks.com.br/produto/pippi-meialonga/"            
            ></Produto>
            </div>

            
            
          </div>
  
        </section>
    );
}