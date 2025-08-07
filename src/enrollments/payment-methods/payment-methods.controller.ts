import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentMethodsService } from './payment-methods.service';
import { CreatePaymentMethodDto } from './dtos/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dtos/update-payment-method.dto';

@Controller('payment-methods')
export class PaymentMethodsController {
  constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

  @Post()
  create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodsService.create(createPaymentMethodDto);
  }

  @Get()
  findAll() {
    return this.paymentMethodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentMethodsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.paymentMethodsService.update(+id, updatePaymentMethodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentMethodsService.remove(+id);
  }
}