/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { normalizeTransactions, parseFileContent } from './transaction.utils';

@Injectable()
export class TransactionService {
  constructor(private readonly prismaService: PrismaService) {}

  async processFile(fileContent: string) {
    try {
      const transaction = await parseFileContent(fileContent);
      console.log(transaction);

      const nomalizedTransactions = await normalizeTransactions(transaction);

      for (let data of nomalizedTransactions) {
        await this.prismaService.trasaction.create({
          data: data,
        });
      }

      return 'File processeced successfully.';
    } catch (error) {
      console.error('Error processing file:', error);
      throw new Error(
        'Failed to preccess the file. Check the format and try again.',
      );
    }
  }

  async getData() {
    const data = await this.prismaService.trasaction.findMany();

    return data;
  }
}
