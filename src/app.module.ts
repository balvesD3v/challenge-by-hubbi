/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { PrismaService } from 'prisma/prisma.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception.filter';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TransactionsModule, AuthModule],
  controllers: [AuthController],
  providers: [
    PrismaService,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    AuthService,
  ],
})
export class AppModule {}
