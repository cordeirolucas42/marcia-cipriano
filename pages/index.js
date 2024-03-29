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
        <a href="https://wa.me/5585996380213" className="grupoBtn"><Image width="20px" height="20px" style={{ margin: "2px 6px 4px 2px" }} src={wpp} alt="Ícone whatsapp"></Image><span>Inscreva-se!</span></a>
        </div>
      </section>

      {/* CHAMADA */}
      <section className="bodySection"> {/* todo em negrito */}
        <p>Qual é a coisa mais importante para você nesse momento? E o que você tem feito por isso?</p>
        <p>Eu te convido a beber de novas águas! Dizer SIM para a VIDA!</p>
        <h3>Você tem sede de quê?</h3>
        <br />
      </section>

      {/* CIRCUITO DA CORAGEM */}
      <section className="bodySection backgroundA">
        <h2>CIRCUITO DA CORAGEM?</h2>

        <p>É uma metodologia que tem como objetivo trabalhar o músculo da coragem das pessoas que estão vivenciado um processo de transição na vida afetiva ou profissional, ajudado-as a fortalecer a sua vontade para que tenham condição de assumir o compromisso com mudanças de posturas para seguir em frente.</p>

        <p>Serão 16 horas dedicados a você, uma imersão para desenvolver a coragem para ousar, despertando o entusiamo e evocando a determinação e a predisposição para a ação. </p>

        <p>Vamos nos abrir para um novo ciclo, e para isso eu te convido a trabalhar o músculo da coragem para cuidar do mais precioso que é a sua VIDA!</p>
      </section>

      {/* PARA QUEM É DESTINADO ESSE GRUPO */}
      <section className="bodySection backgroundB">
        <h2>PARA QUEM É DESTINADO ESSE GRUPO?</h2>

        <p>Para as pessoas que estão em crise, sentindo ansiedade, um certo cansaço emocional, desanimadas e com um sentimento de incapacidade mas, ao mesmo tempo, acreditam na mudança e estão cansados de viver nesse limbo.</p>

        <p>E o convite é para que você pare de duvidar e APRENDA A NÃO DESISTIR do que você verdadeiramente quer, e assim possa dar o PRÓXIMO PASSO e SEGUIR em frente.</p>
      </section>

      {/* CHEGA DE PROCRASTINAR */}
      <section className="bodySection">
        <h2>CHEGA DE PROCRASTINAR</h2>

        <p>Essa IMERSÃO funcionará como um campo de nutrição e suporte para que você possa avançar em novas realidades. Criaremos um ambiente propício para que as coisas aconteçam com dinamismo e respeito ao seu processo. A progressividade e a autorregulação serão categorias que estarão sempre presentes. Cada pessoa tem o seu ritmo e a sua vontade, suas dores e seus recursos que lhe são peculiares. Estarei  te convidando para que não desista, para que você tire o pé do freio e não se paralise mais nessa transição.</p>

        <p>Por ser uma caminhante mais experiente, com mais de vinte anos facilitando processos terapêuticos, eu posso ser seu suporte nessa trilha para que você vivencie essa transição com um pouco mais de segurança e menos desconforto. Mas não esqueça que grande parte do processo depende de você mesmo. Olhar para dentro de si é a tarefa mais importante da nossa vida e a melhor referência para nos conectarmos com o que verdadeiramente nos falta. Se você estiver aberto a receber todo o suporte e participar das vivências e desafios propostos, com certeza você irá desapegar de muitas "tralhas" que você carrega e não te servem mais, e que estão servindo como forças restritivas, te impedindo de vivenciar essa transição com mais coragem.</p>

        <p>Descartando esse excesso, você poderá começar a avançar, criando novas oportunidades em comunhão com a vida, aceitando a vulnerabilidade, se reorientando, se determinando e explorando novos caminhos apesar do medo. Mesmo que a confiança oscile e o pensamento negativo nos visite, vamos ser congruentes com os nossos princípios, objetivos e com bravura e perseverança vamos nos arriscando. Quanto mais nos comprometermos, mais aumentará a nossa intimidade e fé nessa força interior. E é essa força que nos dará a energia que precisamos para criarmos uma nova direção.</p>

        <p>Se você aceitar esse convite de corpo e alma, muitas mudanças acontecerão.</p>

        <p>Meu papel nessa jornada é te ajudar a trabalhar o músculo da coragem e te convidar sempre a dar o próximo passo, e o seu é começar a agir e confiar no processo.</p>
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
        <h2>Primeira etapa – VITALIDADE: A coragem para iniciar uma nova jornada.</h2>

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

        <h2>Segunda etapa – VALOR: A coragem para se recriar.</h2>

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

        <h2>Terceira etapa – VÍNCULO: A coragem para seguir em frente, comprometido com a vida.</h2>

        <p>“Sinto-me conectado com a vida”</p>

        <p>Intenção: Desenvolver a coragem para não desistir e seguir em frente reconhecendo a necessidade do momento, se conectando com o seu projeto e com a sua força, determinação e alegria de viver.</p>

        <ol>
          <li>Visão ampla e foco aguçado: qual é a prioridade agora?</li>
          <li>Criar uma rede de apoio para dias desafiadores.</li>
          <li>Empreendimento de tarefas: colocando em ação a sua vontade.</li>
          <li>Aprender a lidar com as armadilhas que impedem a sua jornada.</li>
          <li>Celebrar cada ato de realização.</li>
        </ol>

        <p>Seja corajosos se o medo chegar, e ele vai chegar, olhe para ele, acolha e siga o caminho do coração.</p>
      </section>

      {/* O IMPOSSÍVEL PODE ACONTECER */}
      <section className="bodySection">
        <h2>O IMPOSSÍVEL PODE ACONTECER!</h2>

        <p>Se dê essa chance e você verá que um novo caminho vai se abrir. Aceite o desafio e você vai descobrir todo um potencial de ação que mora no seu coração.</p>

        <p>E essa é a jornada que vamos percorrer nesse circuito. A partir dessa vinculação com a vida é que você vai deixando de dar poder ao mundo externo, para dar lugar a mudanças fundamentais que vão gerar grandes aprendizagens para que você descubra o que verdadeiramente é essencial na sua vida.</p>

        <p>A proposta é dar atenção ao que a vida está te pedindo agora e fazer um caminhar com garra e amor no coração.</p>

        <p></p>

        <p>Essa é a verdadeira missão que deveríamos alcançar! Que possamos nos fortalecer e deixar crescer em nós esse desejo genuíno de florescer, sendo a própria vida em movimento para aprendermos a acolher tudo que está acontecendo agora, olhando para a resistência, e soltando qualquer dor ou dificuldade que nos impede de abraçar a vida. Esse é o maior desafio da nossa existência.</p>
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

      {/* INVESTIMENTO */}
      <section className="bodySection backgroundA">
        <div className="precoDiv">
          <h1>Investimento</h1>
          <div className="precoBox">
            <p className="preco1">Apenas:</p>
            <p className="preco2">R$ 580,00</p>
          </div>
          <div style={{ clear: "both" }}></div>
          <a href="https://wa.me/5585996380213" className="grupoBtn"><Image width="20px" height="20px" style={{ margin: "2px 6px 4px 2px" }} src={wpp} alt="Ícone whatsapp"></Image><span>Inscreva-se!</span></a>
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
