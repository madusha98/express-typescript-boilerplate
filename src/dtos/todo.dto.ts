import { IsString } from "class-validator";

export class TodoDto {
    @IsString()
    title: string;
  }