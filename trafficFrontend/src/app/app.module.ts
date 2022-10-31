import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { AuthInterceptor } from './core/service/auth-interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule,ToastModule ],
    providers: [
        MessageService,
        { provide: LocationStrategy,
            useClass: HashLocationStrategy },
        {
            provide : HTTP_INTERCEPTORS,
            useClass : AuthInterceptor,
            multi : true
        }

    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
