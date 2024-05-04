'use client'
import "./styles.css"
import Botao from "../Botao";
import React, { useState } from 'react';


const Navbar = () =>  {
    const [isNavActive, setIsNavActive] = useState(false);
    return(
        <header>
            <nav className={`nav ${isNavActive ? 'active' : ''}`}>
                <div>
                    <Botao img={<img src="./logo.png" alt="" />}link="./"/>
                    <button className="hamburguer" onClick={() => setIsNavActive(!isNavActive)}></button>

                    <ul className="ul1">
                        <li><a href="./produtos">Produtos</a></li>
                        <li><a href="./sobre">Sobre</a></li>
                        <li><a href="./contato">Contato</a></li>
                    </ul>
                    <div className="pesquisa">
                    <Botao img={<img src="./search.svg"  alt=""/>} link="./" />
                    </div>
                    
                </div>
                <div>

                    <Botao img={<img src="./fav.svg" alt=""/>} link="https://www.jujubooks.com.br/" />
                    <Botao img={<img src="./person.svg" alt=""/>} link="https://www.jujubooks.com.br/" />
                    <Botao img={<img src="./cart.svg"  alt=""/>} link="https://www.jujubooks.com.br/" />

                    <button className="inscreva-se">
                        <a href="">Inscreva-se</a>
                    </button>
                </div>
            </nav>
           
        </header>
    );
}
export default Navbar;