Feature: Cliente Online
  Como um Cliente Online
  Quero que o sistema mostre minhas compras
  Para eu poder controlar minhas despesas

  Scenario: Obter dados de uma API
    Given que o cliente tem conexão com a internet
    When o cliente solicitar carregar suas compras
    Then o sistema deve exibir suas compras vindo de uma API
    And substituir os dados do cache com os dados mais atuais


Feature: Cliente Offline
  Como um clinete Offline
  Quero que o sistema mostre minhas ultimas compras gravadas
  Para eu poder controlar minhas despesas mesmo offline

  Scenario: Obter dados do cache
    Given que o cliente não tem conexão com a internet
    And exista algum dado gravado no cache
    And os dados do cache forem mais novos que 3 dias
    When o cliente solicitar carregar suas compras
    Then o sistema deve exibir suas compras vindas do cache

  

