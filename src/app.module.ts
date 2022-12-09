import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { User } from "./user/entity/user.entity";
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
    controllers:[AppController],
    imports: [UserModule,
        TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'nestjs',
        entities: [User],
        synchronize: true,
      }),
        AuthModule,
        ProfileModule,],
})
export class AppModule{}