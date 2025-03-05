import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AdminsModule } from './admins/admins.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { VideosModule } from './videos/videos.module';
import { LessonsModule } from './lessons/lessons.module';
import { StudentVideosModule } from './student-videos/student-videos.module';
import { StudentLessonsModule } from './student-lessons/student-lessons.module';
import { ActivitiesModule } from './activities/activities.module';
import { ResultsModule } from './results/results.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    AdminsModule,
    StudentsModule,
    TeachersModule,
    VideosModule,
    LessonsModule,
    StudentVideosModule,
    StudentLessonsModule,
    ActivitiesModule,
    ResultsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
