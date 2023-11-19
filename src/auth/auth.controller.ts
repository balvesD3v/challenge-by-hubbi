/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: authService) {}

  @Post('login')
  async login(@Body() Body) {}
}
