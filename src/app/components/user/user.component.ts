import { Component } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    user: User;

    constructor() {
        this.user = {
            firstName: 'Shraddha',
            lastName: 'Halpati',
            email: 'shraddha@abc.com',
            isActive: true,
            registered: new Date('01/02/2018 08:30:00')
        }
    }
}