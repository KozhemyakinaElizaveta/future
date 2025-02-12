# Используем легковесный образ Node.js
FROM node:18-alpine AS builder
FROM --platform=linux/amd64 node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Копируем исходный код и билдим
COPY . .
RUN yarn build

# Финальный образ с Nginx
FROM nginx:alpine

# Копируем собранные файлы в Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем кастомный конфиг для Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]