import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    user: User = {
        firstName: '',
        lastName: '',
        email: ''
    }
    users: User[];
    showExtended: boolean = true;
    loaded: boolean = false;
    enableAdd: boolean = false;
    showUserForm: boolean = false;
    @ViewChild('userForm') form: any;

    constructor() { }

    ngOnInit() {
        this.users = [
            {
                firstName: 'Shraddha',
                lastName: 'Halpati',
                email: 'shraddha@abc.com',
                isActive: true,
                registered: new Date('01/02/2018 08:30:00'),
                hide: true
            },
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@pqr.com',
                isActive: false,
                registered: new Date('01/28/2019 07:30:00'),
                hide: true
            },
            {
                firstName: 'Will',
                lastName: 'Smith',
                email: 'will@xyz.com',
                isActive: true,
                registered: new Date('05/21/2017 06:30:00'),
                hide: true
            }
        ];

        this.loaded = true;
    }

    onSubmit({value, valid}: {value: User, valid: boolean}) {
        if(valid) {
            value.isActive = true;
            value.registered = new Date();
            value.hide = true;
            this.users.unshift(value);
            this.form.reset();
        } else {
            console.log('Form is not valid');
        }
    }
}