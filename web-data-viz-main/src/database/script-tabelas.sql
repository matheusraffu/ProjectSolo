-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database Agape;
use agape;

-- Tabela de usuários
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,  -- ID do usuário
    nome VARCHAR(70),
    email VARCHAR(150),
    idade CHAR(2),
    senha CHAR(8),
    idLifeGroup char(5)  -- Relacionado ao grupo de vida
);
select * from usuario;
-- Tabela de eventos
CREATE INDEX idx_idLifeGroup ON usuario(idLifeGroup);

-- Tabela de eventos
CREATE TABLE evento (
    id_evento INT PRIMARY KEY AUTO_INCREMENT,  -- ID do evento
    fkLifeGroup CHAR(5),  -- Relacionado ao grupo de vida
    data_evento DATE NOT NULL,  -- Data do evento
    hora_evento TIME NOT NULL,  -- Hora do evento
    qtd_pessoas INT,  -- Quantidade de pessoas no evento
    CONSTRAINT fkLifeGroup FOREIGN KEY (fkLifeGroup) REFERENCES usuario(idLifeGroup)  -- Chave estrangeira
);

DELIMITER $$

CREATE TRIGGER atualiza_qtd_pessoas
AFTER INSERT ON participacao
FOR EACH ROW
BEGIN
    -- Aumenta a quantidade de pessoas no evento relacionado
    UPDATE evento
    SET qtd_pessoas = qtd_pessoas + 1
    WHERE id_evento = NEW.id_evento;
END$$

DELIMITER ;

INSERT INTO evento (fkLifeGroup, data_evento, hora_evento, qtd_pessoas) VALUES
('56789', '2024-12-01', '10:00:00', 20),
('12345', '2024-12-05', '14:00:00', 25);