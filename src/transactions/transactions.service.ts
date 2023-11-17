/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { normalizeTransactions, parseFileContent } from './transaction.utils';

@Injectable()
export class TransactionService {
  constructor(private readonly prismaService: PrismaService) {}

  async processFile(fileContent: string) {
    try {
      const transaction = parseFileContent(fileContent);
      const nomalizedTransactions = normalizeTransactions(transaction);

      await this.prismaService.transaction.createMany({
        data: nomalizedTransactions,
      });

      console.log('Arquivo processado com sucesso.');
    } catch (error) {
      console.error('Error processing file:', error);
      throw new Error('Failed to process file.');
    }
  }
}
