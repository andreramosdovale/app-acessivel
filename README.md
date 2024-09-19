## Prova de Conceito: Landing Page Acessível

### Objetivo

Estou desenvolvendo uma landing page como parte de uma prova de conceito (POC) para demonstrar que é possível criar um site acessível. O objetivo é cumprir o maior número possível de critérios das WCAG (Web Content Accessibility Guidelines) 2.1 para provar que a acessibilidade pode ser integrada eficazmente em um projeto web. Além disso, um dos objetivos é provar a possibilidade de integrar os testes unitários com a validação dos itens de acessibilidade. Isso inclui a criação de testes que assegurem a conformidade com alguns critérios de acessibilidade, garantindo que o site não apenas esteja acessível, mas também que continue acessível ao longo do desenvolvimento.

### Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript, ajudando a detectar erros e melhorar a manutenção do código.
- **Styled Components**: Biblioteca para estilização de componentes em React, permitindo o uso de CSS dentro de arquivos JavaScript.
- **Jest**: Framework de testes para JavaScript, utilizado para garantir que o código funcione corretamente e detectar regressões durante o desenvolvimento.

### Abordagem

A landing page será projetada com foco na acessibilidade, seguindo as diretrizes das WCAG 2.1 para garantir que o site seja utilizável por todos, incluindo pessoas com deficiências. A implementação vai buscar atender aos critérios dos níveis A, AA e, se possível, AAA para criar um site inclusivo e acessível.

A documentação e os critérios de sucesso das WCAG 2.1 serão utilizados como guia durante o desenvolvimento para garantir a conformidade com as melhores práticas de acessibilidade.

### Design da Landing Page

O design da landing page será baseado no repositório público do Figma disponível [neste link](https://www.figma.com/community/file/1222060007934600841). A partir desse design, serão feitas adaptações para garantir que a página seja o mais acessível possível. O objetivo é seguir as diretrizes das WCAG e implementar melhorias que aumentem a acessibilidade, ajustando elementos de design para atender aos critérios necessários e proporcionar uma experiência inclusiva para todos os usuários.

## O que é WCAG?

As **WCAG** (Web Content Accessibility Guidelines) é um conjunto de diretrizes que visa tornar o conteúdo da web acessível para todos, incluindo pessoas com deficiências. A versão mais atual, **WCAG 2.1**, possui 78 critérios de sucesso. Ela inclui os 61 critérios da WCAG 2.0 e adiciona 17 novos. Uma futura versão **WCAG 3.0** está prevista para 2024, com mais requisitos para garantir acessibilidade.

## O que são critérios de sucesso?

Critérios de sucesso são declarações testáveis, não específicas de tecnologia, que devem ser cumpridas para garantir acessibilidade. Eles descrevem situações onde pessoas com deficiência enfrentariam desvantagens em comparação a outras.

## Níveis de Acessibilidade

Os critérios de sucesso estão divididos em três níveis:

- **Nível A**: São 30 critérios básicos, mais fáceis de cumprir, que têm pouco impacto no design do site. Ideal para quem está começando a implementar acessibilidade.
- **Nível AA**: Além dos 30 critérios do Nível A, inclui mais 20 critérios. Esse nível é mais complexo e pode exigir mudanças no design, como a melhoria no contraste de textos. Muitos sites buscam esse nível, e em alguns casos, ele é exigido por lei.
- **Nível AAA**: Adiciona mais 28 critérios. É o mais complexo e nem sempre aplicável a todos os tipos de conteúdo. Embora não seja obrigatório, seguir algumas dessas diretrizes torna o site ainda mais acessível.

Cumprir níveis mais altos de acessibilidade significa que seu site será acessível a um maior número de pessoas.

## Checklist de Acessibilidade WCAG 2.1

### Princípio 1: Perceptível

#### 1.1 Alternativas em Texto

- [ ] **1.1.1 Conteúdo Não Textual**: Fornecer alternativas em texto para qualquer conteúdo não textual.

#### 1.2 Mídia Baseada em Tempo

- [ ] **1.2.1 Apenas Áudio e Apenas Vídeo (Pré-gravado)**: Fornecer alternativa em texto para conteúdo de áudio e vídeo.
- [ ] **1.2.2 Legendas (Pré-gravadas)**: Fornecer legendas para todo o conteúdo de vídeo pré-gravado.
- [ ] **1.2.3 Audiodescrição ou Mídia Alternativa (Pré-gravado)**: Fornecer audiodescrição ou mídia alternativa para vídeo pré-gravado.
- [ ] **1.2.4 Legendas (Ao Vivo)**: Fornecer legendas para todo o conteúdo de vídeo ao vivo.
- [ ] **1.2.5 Audiodescrição (Pré-gravado)**: Fornecer audiodescrição para conteúdo de vídeo pré-gravado.
- [ ] **1.2.6 Legendas (Pré-gravadas, Apenas Áudio)**: Fornecer legendas para áudio pré-gravado que não esteja acompanhado de vídeo.
- [ ] **1.2.7 Audiodescrição Estendida (Pré-gravado)**: Fornecer audiodescrição estendida para vídeo pré-gravado, se necessário.
- [ ] **1.2.8 Alternativa para Mídia (Pré-gravado)**: Fornecer alternativa em texto para todo o conteúdo de mídia pré-gravado.
- [ ] **1.2.9 Apenas Áudio (Ao Vivo)**: Fornecer alternativa em texto para conteúdo de áudio ao vivo.

#### 1.3 Adaptável

- [ ] **1.3.1 Informações e Relacionamentos**: Garantir que informações e relacionamentos possam ser determinados programaticamente ou estejam disponíveis em texto.
- [ ] **1.3.2 Sequência Significativa**: Garantir que a sequência de leitura seja preservada.
- [ ] **1.3.3 Características Sensoriais**: Instruções não devem depender exclusivamente de características sensoriais.

#### 1.4 Distinguível

- [ ] **1.4.1 Uso de Cor**: Não use cor como única forma de transmitir informações.
- [ ] **1.4.2 Controle de Áudio**: Ofereça um mecanismo para controlar o áudio que começa automaticamente e dura mais de 3 segundos.
- [ ] **1.4.3 Contraste (Mínimo)**: Texto e imagens de texto devem ter uma taxa de contraste de pelo menos 4.5:1.
- [ ] **1.4.4 Redimensionamento de Texto**: O texto deve poder ser redimensionado até 200% sem perda de conteúdo ou funcionalidade.
- [ ] **1.4.5 Imagens de Texto**: Evite o uso de imagens de texto, exceto quando necessário.
- [ ] **1.4.10 Refluxo**: O conteúdo deve ser apresentado sem perder funcionalidade ou informação quando redimensionado para 320 pixels de largura.
- [ ] **1.4.11 Contraste Não Textual**: Componentes da interface de usuário e gráficos devem ter uma taxa de contraste de pelo menos 3:1.
- [ ] **1.4.12 Espaçamento de Texto**: Garantir que o espaçamento de texto possa ser ajustado sem perda de conteúdo ou funcionalidade.
- [ ] **1.4.13 Conteúdo ao Passar o Mouse ou ao Focar**: Qualquer conteúdo exibido ao passar o mouse ou ao focar deve ser descartável e permanecer visível.

### Princípio 2: Operável

#### 2.1 Acessível por Teclado

- [ ] **2.1.1 Teclado**: Todo o conteúdo e funcionalidade devem ser operáveis via teclado.
- [ ] **2.1.2 Sem Armadilha de Teclado**: Usuários devem ser capazes de navegar sem ficarem presos a um elemento de teclado.
- [ ] **2.1.4 Atalhos de Teclado**: Fornecer uma maneira de desligar ou remapear atalhos de teclado.

#### 2.2 Tempo Suficiente

- [ ] **2.2.1 Ajustável**: Oferecer aos usuários tempo suficiente para ler e usar o conteúdo.
- [ ] **2.2.2 Pausar, Parar, Ocultar**: Oferecer um mecanismo para pausar, parar ou ocultar qualquer conteúdo em movimento, piscando ou rolando.
- [ ] **2.2.3 Sem Limite de Tempo**: O usuário não deve ser obrigado a completar uma tarefa em tempo limitado, exceto em eventos ao vivo.
- [ ] **2.2.4 Interrupções**: O usuário pode adiar ou suprimir interrupções não essenciais.
- [ ] **2.2.5 Reautenticação**: Após a reautenticação, os usuários podem continuar de onde pararam sem perder dados.
- [ ] **2.2.6 Tempo Real Ajustável**: Para conteúdo que requer entrada de tempo real, garantir que haja meios de estender o tempo limite ou fornecer pausas.

#### 2.3 Convulsões e Reações Físicas

- [ ] **2.3.1 Três Flashes ou Abaixo do Limiar**: O conteúdo não deve piscar mais de três vezes por segundo, ou deve estar abaixo do limiar que pode causar convulsões.
- [ ] **2.3.2 Três Flashes ou Abaixo do Limiar (AAA)**: O conteúdo não deve piscar mais de três vezes por segundo, mesmo em casos extremos.

#### 2.4 Navegável

- [ ] **2.4.1 Evitar Armadilha de Teclado**: O conteúdo deve ser navegável sem causar bloqueios de teclado.
- [ ] **2.4.2 Páginas Sem Título**: As páginas devem ter títulos descritivos.
- [ ] **2.4.3 Ordem de Foco**: A ordem de foco deve ser lógica e intuitiva.
- [ ] **2.4.4 Propósito do Link (no Contexto)**: O propósito de um link deve ser claro a partir do texto do link ou de seu contexto.
- [ ] **2.4.5 Múltiplas Formas**: Fornecer mais de uma maneira de localizar uma página da Web em um conjunto de páginas da Web.
- [ ] **2.4.6 Cabeçalhos e Rótulos**: Use cabeçalhos e rótulos descritivos.
- [ ] **2.4.7 Foco Visível**: Qualquer interface de teclado deve ter um indicador de foco visível.
- [ ] **2.4.8 Localização**: Forneça informações sobre onde o usuário está dentro de um conjunto de páginas da Web.
- [ ] **2.4.9 Propósito do Link (somente link)**: O propósito de cada link deve ser determinado a partir do próprio link.
- [ ] **2.4.10 Cabeçalhos de Seção**: Use cabeçalhos para organizar o conteúdo em seções claras.

### Princípio 3: Compreensível

#### 3.1 Legível

- [ ] **3.1.1 Idioma da Página**: O idioma principal da página deve ser identificável.
- [ ] **3.1.2 Idioma das Partes**: O idioma de qualquer conteúdo que difere do idioma da página deve ser identificável.
- [ ] **3.1.3 Palavras Incomuns**: Ofereça definições de termos ou palavras incomuns.
- [ ] **3.1.4 Abreviações**: Forneça uma explicação para abreviações.
- [ ] **3.1.5 Nível de Leitura**: Conteúdo que requer nível de leitura superior ao ensino médio deve ter suporte adicional.
- [ ] **3.1.6 Pronúncia**: Forneça pronúncia para palavras cujo significado depende da pronúncia.

#### 3.2 Previsível

- [ ] **3.2.1 Ao Focar**: Nenhuma mudança de contexto deve ocorrer ao focar um elemento.
- [ ] **3.2.2 Ao Entrar em Dados**: Nenhuma mudança de contexto deve ocorrer ao inserir dados.
- [ ] **3.2.3 Navegação Consistente**: Componentes de navegação repetidos devem ser consistentes.
- [ ] **3.2.4 Identificação Consistente**: Componentes que têm a mesma funcionalidade devem ser identificados de forma consistente.
- [ ] **3.2.5 Mudança sob Solicitação**: Mudanças de contexto devem ocorrer apenas sob solicitação do usuário.

#### 3.3 Assistência na Entrada de Dados

- [ ] **3.3.1 Identificação de Erros**: Erros de entrada devem ser identificados automaticamente.
- [ ] **3.3.2 Etiquetas ou Instruções**: Ofereça etiquetas ou instruções quando o conteúdo exigir entrada do usuário.
- [ ] **3.3.3 Sugestão de Erros (AA)**: Quando o usuário comete um erro ao inserir dados, sugestões são oferecidas para corrigir o erro, quando apropriado.
- [ ] **3.3.4 Prevenção de Erros (Legais, Financeiros, Dados)**: Para páginas que causem compromissos legais ou financeiros, ou que enviem dados do usuário, deve ser oferecida a revisão, confirmação ou correção dos dados antes da submissão.
- [ ] **3.3.5 Ajuda de Erro (AAA)**: Se for detectado um erro de entrada, recomendações devem ser fornecidas para ajudar os usuários a corrigi-lo.
- [ ] **3.3.6 Prevenção de Erros (Todas as páginas)**: Para todas as páginas que requerem entradas do usuário, medidas devem ser tomadas para evitar erros, como validação dos dados ou confirmação.

### Princípio 4: Robusto

#### 4.1 Compatível

- [ ] **4.1.1 Análise Sintática**: Conteúdo deve ser criado de acordo com padrões de HTML e XML, de modo que possa ser interpretado corretamente por tecnologias assistivas e navegadores.
- [ ] **4.1.2 Nome, Função, Valor**: Para todos os componentes da interface do usuário, os nomes, funções, valores e mudanças devem ser identificáveis programaticamente e disponíveis para tecnologias assistivas.
- [ ] **4.1.3 Mensagens de Status (AAA)**: Mensagens de status (por exemplo, mensagens de sucesso ou erro) devem ser identificadas de forma programática, de modo que possam ser apresentadas ao usuário por tecnologias assistivas sem receber foco.

## Links de Apoio

- **WCAG 2.1 Quick Reference**: [Quick Reference Guide for WCAG 2.1](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1) - Um guia rápido das diretrizes e critérios de sucesso da WCAG 2.1.
- **Entendimento da WCAG 2.1**: [Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/) - Documentação detalhada para compreender os critérios de sucesso e suas implementações.
- **WCAG 2.1 Documentação Completa**: [WCAG 2.1 Full Document](https://www.w3.org/TR/WCAG21) - O documento completo das diretrizes WCAG 2.1, com todos os critérios e requisitos detalhados.
