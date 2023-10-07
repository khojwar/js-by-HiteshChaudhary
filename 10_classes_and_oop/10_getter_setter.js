class User {
    constructor(email, password){
        this.email = email;     // property
        this.password = password        // property
    }

    get email(){        // getter or setter ko name property kai name huna parxa
        return this._email.toUpperCase()        // variable ko name "_email" lekhne natra race condition suru hunxa, constructor ra getter ra setter ko bich maa
    }
    set email(value){           // getter or setter ko name property kai name huna parxa
        this._email = value
    }

    get password(){         // getter or setter ko name property kai name huna parxa
        return `${this._password}hitesh`
    }

    set password(value){                // getter or setter ko name property kai name huna parxa
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")       
console.log(hitesh.email);

// Note:
// getter and setter ko perspective class bahira bata herna parxa. 
// class bahira bata value get garna khojiraaxa bhane getter use hunxa
// kunai value class bhitra set garna khojiraako xa bhane setter use garna parxa
// getter ra setter dubai lekhnai parxa.

// **************************************** get *****************************
// memory bata liyara aaune, override garne ra xodera jaane