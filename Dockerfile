# Use a imagem oficial do Node.js como base
FROM node:latest

# Crie e defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação para o contêiner
COPY . .

# Exponha a porta em que a aplicação estará em execução
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]