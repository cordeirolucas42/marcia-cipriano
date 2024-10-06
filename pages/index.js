import Layout from '../components/layout'
import banner from '../public/banner-circuito-coragem.jpg'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'

import perfil from '../public/marcia-perfil.jpg'
import caminhando from '../public/caminhando.jpg'
import wpp from '../public/whatsapp.png'

export default function Home() {
  return (
    <Layout pageTitle="Circuito da Coragem" pageDescription="Mentoria individual" headerImage={banner}>

      <section className="bodySection apresentacaoBlock">
        <iframe className="apresentacao" src="https://www.youtube.com/embed/o4jgv-2W_ks" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-writeF enSrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className="buttonGroup">          
        <a href="https://wa.me/5585996380213" className="chamadaBtn">
          <Image width="20px" height="20px" style={{ margin: "2px 6px 4px 2px" }} src={wpp} alt="Ícone whatsapp"></Image>
          <span>Inscreva-se!</span>
        </a>
        </div>
      </section>

      {/* CHAMADA */}
      <section className="bodySection"> {/* todo em negrito */}
        <p>Qual é a coisa mais importante para você nesse momento? E o que você tem feito por isso?</p>
        <p>Eu te convido a beber de novas águas! Dizer SIM para a VIDA!</p>
        <h3>Você tem sede de quê?</h3>
        <br />
      </section>

      {/* PSET - PREPARAÇÃO SOCIOEMOCIONAL PARA O TRABALHO */}
      <section className="bodySection backgroundA">
        <h2>PSET - PREPARAÇÃO SOCIOEMOCIONAL PARA O TRABALHO</h2>

        <p>É um treinamento completo, intensivo, de 16 horas para jovens adultos que buscam se destacar no universo do trabalho, tem como objetivo desenvolver suas habilidades socioemocionais e abrir portas para o seu futuro profissional.</p>

        <p>Serão encontros online no formato teórico-vivencial  para você  que deseja ter mais autoconfiança para conquistar seu “lugar ao sol” despertando o entusiasmo e evocando a predisposição para a ação, arriscando-se em novos empreendimentos.</p>
      </section>

      {/* PARA QUEM É DESTINADO ESSE TREINAMENTO */}
      <section className="bodySection backgroundB">
        <h2>PARA QUEM É DESTINADO ESSE TREINAMENTO?</h2>

        <p>Para jovens adultos (18 a 30 anos) que estão sentindo ansiedade, um certo cansaço emocional, desanimadas, e com um sentimento de insegurança e incapacidade mas, ao mesmo tempo acreditam na mudança e estão cansados de viver nesse limbo.</p>

        <p>E o convite é para que você pare de duvidar e APRENDA A NÃO DESISTIR do que você verdadeiramente quer, e assim possa dar o PRÓXIMO PASSO e SEGUIR em frente.</p>
      </section>

      {/* VOCÊ SE IDENTIFICA COM ALGUMA DESSAS SITUAÇÕES */}
      <section className="bodySection backgroundA">
        <h2>VOCÊ SE IDENTIFICA COM ALGUMA DESSAS SITUAÇÕES?</h2>
        <ol>
          <li>Dificuldade em lidar com crítica</li>
          <li>Falta de confiança em se apresentar publicamente (apresentação de seminários, TCC, entrevistas, redes sociais e trabalho em grupo)</li>
          <li>Desejo de descobrir seus potenciais e talentos</li>
          <li>Dúvidas sobre o caminho a seguir na carreira</li>
          <li>Desejo de ter mais autonomia e independência</li>
          <li>Dificuldade em se comunicar de forma eficaz</li>
          <li>Desejo de ser mais produtivo sem se estressar</li>
        </ol>
        <p>Se você se identifica com alguma dessas situações, este treinamento é para você!</p>
      </section>

      {/* CHEGA DE PROCRASTINAR */}
      <section className="bodySection backgroundB">
        <h2>CHEGA DE PROCRASTINAR</h2>

        <p>Vamos iniciar com micropassos até que você possa dar um salto, cuidando da autorregulação, sem desanimar, e chegando ao fim mais fortalecido para seguir em frente. </p>

        <p>Esse treinamento funcionará como um campo de nutrição e suporte para que você possa avançar em novas realidades. Criaremos um ambiente propício para que as coisas aconteçam com dinamismo e respeito ao seu processo.</p>

        <p>A progressividade e a autorregulação serão categorias que farão parte do processo. Cada pessoa tem o seu ritmo e a sua vontade, suas dores e seus recursos que lhe são peculiares. Estarei sempre te convidando para que não desista, para que você tire o pé do freio e não se paralise mais nessa transição.</p>

        <p>Com estratégias bem definidas e de forma assertiva vamos encontrando novas alternativas e recursos para os problemas, nos capacitando para seguir em frente. “Perder-se não é o problema, o problema é não se reencontrar”.</p>

        <p>A maior promessa para esse trabalho é que eu não vou medir esforços para te oferecer tudo que você precisar para assumir de forma corajosa e comprometida essa caminhada.</p>
        
        <p>"O impossível pode acontecer"</p>

        <p>Se dê essa chance e você verá que um novo caminho vai se abrir. Aceite o desafio e você vai descobrir todo um potencial de ação que mora no seu coração!</p>
      </section>

      {/* TEMAS QUE SERÃO ABORDADOS NO TREINAMENTO */}
      <section className="bodySection backgroundA">
        <h2>TEMAS QUE SERÃO ABORDADOS NO TREINAMENTO</h2>
        <ol>
          <li>Autoconhecimento</li>
          <li>Inteligência emocional e relacional</li>
          <li>Desenvolvimento de soft skills</li>
          <li>Empregabilidade e empreendedorismo</li>
          <li>Equilíbrio entre vida pessoal e profissional</li>
        </ol>
      </section>

      {/* METODOLOGIAS E TÉCNICAS DE APRENDIZAGEM */}
      <section className="bodySection backgroundB">
        <h2>METODOLOGIAS E TÉCNICAS DE APRENDIZAGEM</h2>
        
        <p>Aplicação de um teste de personalidade, estudo de caso, Role-playing, feedback, vivências biocêntricas, visualizações criativas, exposição dialogada, seminários, mentoring, meditação, aprendizagem colaborativa.</p>

      {/* SOBRE O MÉTODO DO MÚSCULO DA CORAGEM */}
        <h2>SOBRE O MÉTODO DO MÚSCULO DA CORAGEM</h2>
        
        <p>É baseado nas abordagens da Psicologia de base Humanista, no Pensamento Sistêmico e na Biodança e no Eneagrama.</p>

        <p>Esse método tem como objetivo cultivar a confiança e fortalecer o compromisso com o autoconhecimento e com a fé no processo do viver, acessando a sua essência e seus recursos internos. Aprendendo a receber e a doar apoio externo para ativar todo o potencial de ação, a partir de três pilares, os 3 Vs: Valor, Vitalidade e Vínculo</p>
      </section>

      {/* HOJE O CONVITE É SEGUIR */}
      <section className="bodySection">
        <h3 style={{ textAlign: "center" }}>Hoje, o convite é SEGUIR!</h3>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="marciaOportunidade">
            <Image className="marciaOportunidade" src={caminhando} alt="Foto Márcia Cipriano" />
          </div>
        </div>
      </section>

      {/* ETAPAS */}
      <section className="bodySection backgroundB">
        <h2>Primeira etapa – VITALIDADE: A coragem para iniciar uma nova jornada!</h2>

        <p>“Do jeito que está não dá para ficar”</p>

        <p>Intenção: A coragem para começar a se despedir da inércia e da dúvida e partir de um estado de consciência mais amplo para despertar o ímpeto vital e abrir espaço para novas possibilidades e conexões. </p>

        <ol>
          <li>Resgatar a sua energia vital e despertar o entusiasmo para explorar novos caminhos.</li>
          <li>Romper com crenças e padrões limitantes que criam uma imagem distorcida da realidade.</li>
          <li>Reconhecer, expressar e acolher sentimentos e emoções que nutrem preocupações improdutivas.</li>
          <li>Perceber o ciclo da insegurança que te oprimem e te fazem paralisar.</li>
          <li>Tomar consciência da importância de criar novos hábitos para interromper o processo de procrastinação.</li>
        </ol>
      </section>
      <section className="bodySection backgroundA">

        <h2>Segunda etapa – VALOR: A coragem para se recriar!</h2>

        <p>“O impossível pode acontecer”</p>

        <p>Intenção: A coragem para se recriar, se posicionar e fortalecer o seu projeto de vida.</p>

        <ol>
          <li>Reconhecer os seus potências, habilidades se conectando o seu valor intrínseco.</li>
          <li>Aprender a encarar o medo de errar para se lançar em novas oportunidades.</li>
          <li>Romper com uma imagem idealizada para restaurar sua autoestima.</li>
          <li>Criar um repertorio novo.</li>
          <li>Definindo a rota: para onde, como e para quê?</li>
        </ol>
      </section>
      <section className="bodySection backgroundB">
        <h2>Terceira etapa – VÍNCULO: A coragem para seguir em frente, comprometido com a vida!</h2>

        <p>“Sinto-me conectado com a vida”</p>

        <p>Intenção: Desenvolver a coragem para não desistir e seguir em frente reconhecendo a necessidade do momento, se conectando com o seu projeto e com a sua força, determinação e alegria de viver.</p>

        <ol>
          <li>Fortalecer o contato, conexão e intimidade consigo mesmo</li>
          <li>Estimular o sentido de cooperação, ver o sagrado na VIDA, em tudo que acontece</li>
          <li>Fortalecimento da autoconfiança e confiança no outro e na vida.</li>
          <li>Desenvolver atitude de dar e receber, buscando sintonia nas convivências.</li>
          <li>Despertar o sentido de união e solidariedade.</li>
        </ol>

        <p>Vamos fortalecer o Músculo da Coragem para que possamos encarar os desafios que a vida oferece com firmeza e leveza!</p>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bodySection">
        <h2>Depoimentos:</h2>
        <div className="depoimentoCol">
          <iframe className="depoimentos" src="https://player.vimeo.com/video/582183115?badge=0&amp;amp;autopause=0&amp;amp;player_id=0&amp;amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="depoimento1.mp4"></iframe>
        </div>
        <div className="depoimentoCol">
          <iframe className="depoimentos" src="https://player.vimeo.com/video/582184138?badge=0&amp;amp;autopause=0&amp;amp;player_id=0&amp;amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Depoimento Rebeca"></iframe>
        </div>
        <div className="depoimentoCol">
          <iframe className="depoimentos" src="https://player.vimeo.com/video/582184211?badge=0&amp;amp;autopause=0&amp;amp;player_id=0&amp;amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="depoimento3"></iframe>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bodySection backgroundA">
        <div className="precoDiv">
          <h1>Como funciona?</h1>
          <p>Escolha um plano que mais se encaixa no seu perfil e faça a sua inscrição:</p>
          <div className="precoBox">
            <p className="preco1">Apenas:</p>
            <p className="preco2">R$ 580,00</p>
          </div>
          <div style={{ clear: "both" }}></div>
          <a href="https://wa.me/5585996380213" className="chamadaBtn"><Image width="20px" height="20px" style={{ margin: "2px 6px 4px 2px" }} src={wpp} alt="Ícone whatsapp"></Image><span>Inscreva-se!</span></a>
          <p>Acesso a plataforma online: você terá acesso a todo conteúdo do treinamento, incluindo vídeo aulas, matérias complementares, atividades práticas.</p>
          <p>BÔNUS: caso você tenha um bom desempenho no treinamento seu currículo fará parte de um Banco de Talentos por 1 ano. Se você não for selecionada terá direito a uma entrevista de feedback.</p>
        </div>
      </section>

      {/* MÁRCIA CIPRIANO */}
      <section className="bodySection backgroundB">
        <a href="https://linktr.ee/marcia.cipriano">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Image
              width={150}
              height={150}
              className="marciaPerfil"
              src={perfil}
              alt="Foto Márcia Cipriano" />
            <h2>Márcia Cipriano</h2>
          </div>
        </a>
        <p>Trabalho com educação há mais de 30 anos e caminhei por muitos lugares profissionalmente. Sou licenciada em Filosofia e mestre em Educação, com especialização em Psicopedagogia e em Orientação Profissional.</p>
        <p>São mais de 20 anos atuando como psicóloga. Sou facilitadora de Biodança há quase 10 anos.</p>
        <p>Seja no papel de psicoterapeuta, palestrante, supervisora, mentora, professora ou facilitadora, me encanta este lugar de favorecer ao outro uma vivência consciente e transformadora nos processos de mudança.</p>
        <p>Hoje, sou especialista em fortalecer o músculo da CORAGEM. Afinal, foi necessário que eu alimentasse muito este sentimento para percorrer a minha caminhada. Sempre senti o medo pulsando na estrutura mente-corpo, mas o compromisso com a vida gritou mais alto. Na verdade, era apenas a própria vida ganhando o seu espaço.</p>
      </section>

    </Layout>
  )
}
