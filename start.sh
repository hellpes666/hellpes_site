#!/bin/bash

# Установка Next.js с TypeScript
npx create-next-app@latest site --typescript

# Переход в директорию проекта
cd site

# Создание файловой структуры FSD
mkdir -p src/{app,features,entities,shared}

# Пример создания файлов в каждой директории
mkdir -p src/app/{components,pages,styles}
touch src/app/pages/index.tsx
touch src/app/styles/global.css

mkdir -p src/features/{feature1,feature2}
touch src/features/feature1/Feature1.tsx
touch src/features/feature2/Feature2.tsx

mkdir -p src/entities/{entity1,entity2}
touch src/entities/entity1/Entity1.tsx
touch src/entities/entity2/Entity2.tsx

mkdir -p src/shared/{components,utils,styles}
touch src/shared/components/SharedComponent.tsx
touch src/shared/utils/helpers.ts
touch src/shared/styles/sharedStyles.css

# Создание директории для ассетов
mkdir -p src/assets/{images,fonts}

echo "Проект Next.js с TypeScript успешно создан и файловая структура FSD настроена!"
