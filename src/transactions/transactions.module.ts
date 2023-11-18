/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { PrismaService } from 'prisma/prisma.service';
import { TransactionService } from './transactions.service';

@Module({
  imports: [],
  controllers: [TransactionsController],
  providers: [PrismaService, TransactionService],
})
export class TransactionsModule {}
