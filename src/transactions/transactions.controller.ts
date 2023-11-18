/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Get,
  UploadedFile,
  UseInterceptors,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TransactionService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    try {
      const fileContent = file.buffer.toString();
      await this.transactionService.processFile(fileContent);
      return 'File uploaded successfully!';
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('data')
  async GetData() {
    const data = await this.transactionService.getData();
    return data;
  }
}
