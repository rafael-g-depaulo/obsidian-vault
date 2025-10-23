Eu entrei em contato com o suporte do heroku e pedi para re-estabelecerem o banco de dados que foi removido quando o plano gratuito foi excluído.

Depois de ter o banco de dados re-estabelecido, eu modifiquei o código do frontend do site principal para redirecionar a lógica de visualização para o servidor do backoffice em vez do backend do site principal. Com isso, foi possível remover completamente o servidor backend e o banco de dados relacionado que antes era usado para o site principal, o que vai reduzir custos em estimados 12 USD/mês.

Para ainda ter a funcionalidade de visualização eu adicionei um Single Type "Views", por onde o frontend faz o armazenamento e lógica de atualização de visualizações (se o usuário admin quiser ele pode modificar isso manualmente).

Com o antigo servidor do frontend removido, a hospedagem do frontend do site principal foi passada para o netlify, com a pipeline de deploy automático (CD/CI) adaptada para o netlify em vez do heroku anterior.

O DNS no godaddy foi atualizado para apontar o site principal (https//sdmrg.com.br) para a nova hospedagem do frontend no netlify.
