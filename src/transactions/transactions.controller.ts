/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Get,
  UploadedFile,
  UseInterceptors,
  HttpException,
  HttpStatus,
  Delete,
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

  @Get('grouped-by-affiliate')
  async getTransactionsByAffiliate() {
    const transactionsByAffiliate =
      await this.transactionService.getTransactionsByAffiliate();
    return transactionsByAffiliate;
  }

  @Delete('delete-data')
  async deleteData() {
    try {
      await this.transactionService.deleteData();
      return 'Data deleted successfully';
    } catch (error) {
      throw new HttpException(
        'Error deleting data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
