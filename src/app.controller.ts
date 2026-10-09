import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('tekup')
export class AppController {
  @Get('test')
  sayHello(@Req() req: Request) {
    console.log(req);
    return '<h2>Je suis Arij </h2>';
  }

  @Get('all')
  sayHello2(@Res() reponse: Response) {
    reponse.send('<h2>ALL  </h2>');
  }
  @Get('file')
  sayHello3(@Res() r: Response) {
    //console.log(__dirname);
    //r.sendFile(__dirname + '/index.html');
    r.sendFile('index.html', { root: 'src' });
    //r.send('<p> Fichier envoyé par Nest </p>');
  }

  @Post('new')
  sayHello4(@Body() corps: any) {
    console.log(corps);
  }
  // sayHello5(@Param() p) {
  //   console.log(p);
  //   return { parametres: p };
  // }
  @Get('book/:id/by/:categorie')
  sayHello5(@Param('id') bookId, @Param('categorie') cat) {
    console.log(bookId, cat);
    return { bookId: bookId };
  }

  @Get('stats')
  getStats(@Query('page') p1, @Query('annee') p2) {
    return { page: p1, annee: p2 };
  }
  // getStats(@Query() qp) {
  //   return { QueryParams: qp };
  // }
}
