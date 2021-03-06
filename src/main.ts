import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';
import {API_PREFIX, DOC_PATH} from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(API_PREFIX);
  app.useGlobalPipes(new ValidationPipe({transform: true}));

  const config = new DocumentBuilder()
    .setTitle('Sixshop API docs')
    .setDescription('The Sixshop API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(DOC_PATH, app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
