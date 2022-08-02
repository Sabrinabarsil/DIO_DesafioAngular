import { Injectable, OnInit,  } from "@angular/core";
import { HttpHeaders, HttpClient  } from'@angular/common/http';
import { Book } from "./model/Book";

@Injectable()

export class BooksService implements OnInit {
    private url = "";
    books: Array<Book> = [];
 
    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private httpClient: HttpClient){};

    getBook(): any{
        console.log(this.url)
        return this.httpClient.get(this.url)
    }

    ngOnInit(): void {

    }

}