import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ConfigModule.forRoot({
    isGlobal:true,
    envFilePath:'.env'
  })],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
