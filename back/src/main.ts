import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes();
  app.use(cookieParser());
  app.enableCors({origin:'http://localhost:4200'});
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();