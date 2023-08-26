# BCB-BigChatBrasil

Premissas Assumidas

Segurança: Implementaremos medidas de segurança para proteger os dados dos clientes, como autenticação e autorização adequadas.

Escalabilidade: O sistema deve ser escalável para acomodar um grande número de clientes e mensagens.

Redundância de Dados: Os dados críticos dos clientes e mensagens devem ser mantidos em redundância para evitar a perda de informações.

Notificações: O envio de notificações pode ser implementado usando serviços de notificação push, como Firebase Cloud Messaging (FCM) para dispositivos móveis.

Logs e Monitoramento: Implementaremos registro de atividades e monitoramento para identificar problemas rapidamente.

O sistema terá autenticação de usuário para garantir que apenas usuários autorizados possam acessar as funcionalidades do backoffice.

As operações financeiras serão realizadas apenas por funcionários autorizados após autenticação.

As informações sensíveis dos clientes, como CPF e CNPJ, serão armazenadas com segurança no banco de dados.

O banco de dados Postgres será executado em um contêiner Docker para fins de desenvolvimento.

O sistema usará NestJS como estrutura de backend.

A lógica de verificação do tipo de plano do cliente e o consumo de SMS será implementada.

