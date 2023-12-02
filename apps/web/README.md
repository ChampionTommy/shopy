# Shopy ![Mask group](https://github.com/ChampionTommy/shopy/assets/79994252/a998cf0d-46f3-4ee2-872e-efdbd425a062) 



## Приложение работает через Turborepo

Запуск все инфры -- `pnpm start` 🚀

### Turborepo: Запуск инфраструктуры и сервисов отдельно

1. Запуск базовой инфры в контейнерах Docker:

```bash
pnpm run infra
```

2. Запуск сервисов Turborepo

```bash
pnpm run turbo-start
```

## Запуск всего проекта на Docker

Запуск инфры и всех служб -- `npm run docker` 🚀

### Docker: Запуск инфраструктуры и служб отдельно

1. Запуск базовой инфры в контейнерах Docker:

```bash
pnpm run infra
```

2. front & back:

```bash
./bin/start.sh api web
```

Или запустить инфру отдельно как хочется через `./bin/start.sh` bash.
