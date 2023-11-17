/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { TransactionsController } from './transactions.controller';
import { TransactionService } from './transactions.service';

@Module({
  imports: [PrismaModule],
  controllers: [TransactionsController],
  providers: [TransactionService],
})
export class TransitionsModule {}
