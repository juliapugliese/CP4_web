import "./styles.css";
import FooterItem from "../FooterItem";
import LinkFooter from "../LinkFooter";
import Botao from "../Botao";

export function Footer() {
  return (
    <footer>

      
      <div className="conteudo-ilustrativo-footer">
        <img className="logo-footer" src="logo.png" />

        <div>
          <div className="copyright">
            <img
              id="logo-copyright"
              src="ph-copyright.png"
            />
            <p>2023 Powerpro, Inc.</p>
          </div>

          <div className="redes-sociais-grupo">

            <ul>
              <Botao link="https://www.instagram.com/livrariajujubooks/" img={<img src="vector-k4R.png" alt="Logo do instagram"/>}/>
              <Botao link="https://www.facebook.com/livrariajujubooks/?locale=pt_BR" img={<img src="vector-WTB.png" alt="Logo do facebook"/>}/>

            </ul>
          </div>
        </div>

      
      </div>

      <div className="baixe-nosso-app">
          <p>Baixe nosso app</p>
          <ul>
            <Botao link="https://apps.apple.com/" img={<img src="app-apple-appstore.png" alt="Logo da appstore"/>}/>
            <Botao link="https://play.google.com/store/apps/" img={<img src="app-google-play.png" alt="Logo da googleplay"/>}/>
          </ul>
        </div>

     
    

      <div>
        <FooterItem title="Fale conosco">
          <LinkFooter link="" text="Telefone:"/>
          <LinkFooter link="" text="(11) 3589-4813"/>

          <LinkFooter link="" text="WhatsApp:"/>
          <LinkFooter link="" text="(11) 9 9922-9437"/>

          <LinkFooter link="" text="Email:"/>
          <LinkFooter link="" text="juju@jujubooks.com.br"/>
        </FooterItem>

      </div>

      <div>
        <FooterItem title="Atendimento">
          <LinkFooter link="" text="Política de Vendas"/>
          <LinkFooter link="" text="Trocas e Privacidade"/>
          <LinkFooter link="" text="Termos e Condições de Compra"/>
          <LinkFooter link="./contato" text="Contato"/>

        </FooterItem>
      </div>

      <div>
        <FooterItem title="Institucional">
          <LinkFooter link="./sobre" text="Sobre a Jujubooks"/>
        </FooterItem>

        <FooterItem title="Dev Team">
          <LinkFooter link="https://www.linkedin.com/in/julia-pugliese" text="Julia Gonzalez Pugliese Ribeiro - 553427"/>
        </FooterItem>
      </div>

      <img src="./correios.png" alt="" />
    

    </footer>
  );
}
