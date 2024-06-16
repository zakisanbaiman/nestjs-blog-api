import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostType } from './post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): PostType[] {
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() post: PostType): void {
    this.postsService.create(post);
  }

  @Get(':id')
  findById(@Param('id') id: string): PostType {
    return this.postsService.findById(id);
  }
}
