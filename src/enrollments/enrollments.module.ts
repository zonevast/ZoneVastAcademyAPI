import { Module } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { EnrollmentsController } from './enrollments.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { CertificatesModule } from './certificates/certificates.module';
import { LectureProgressModule } from './lecture-progress/lecture-progress.module';
import { PaymentMethodsModule } from './payment-methods/payment-methods.module';

@Module({
  imports: [PrismaModule, CertificatesModule, LectureProgressModule, PaymentMethodsModule],
  controllers: [EnrollmentsController],
  providers: [EnrollmentsService],
})
export class EnrollmentsModule {}