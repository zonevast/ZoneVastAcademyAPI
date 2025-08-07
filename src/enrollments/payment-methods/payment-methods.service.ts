import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePaymentMethodDto } from './dtos/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dtos/update-payment-method.dto';

@Injectable()
export class PaymentMethodsService {
  constructor(private prisma: PrismaService) {}

  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.prisma.paymentMethod.create({ data: createPaymentMethodDto });
  }

  findAll() {
    return this.prisma.paymentMethod.findMany();
  }

  findOne(id: number) {
    return this.prisma.paymentMethod.findUnique({ where: { payment_method_id: id } });
  }

  update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.prisma.paymentMethod.update({ where: { payment_method_id: id }, data: updatePaymentMethodDto });
  }

  remove(id: number) {
    return this.prisma.paymentMethod.delete({ where: { payment_method_id: id } });
  }
}