/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TransactionService } from './transactions.service';

@Controller('transictions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    const fileContent = file.buffer.toString();
    await this.transactionService.processFile(fileContent);
    return { message: 'Arquivo enviado e processado com sucesso!' };
  }
}
