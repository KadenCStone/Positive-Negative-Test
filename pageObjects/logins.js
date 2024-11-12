import { $ } from '@wdio/globals'
import Site from './page.js';

class loggingIn extends Site {
    
    get user () {
        return $('.input_error.form_input');
    }
    
    get password () {
        return $('#password');
    }
    
    get submitBtn () {
        return $('#login-button'); 
    }
    
    async getIn (username, password) {
        
        await this.user.setValue(username);
        await this.password.setValue(password);
        await this.submitBtn.click();
    }
   
    open () {
        
        return super.open('getIn');
    }
}
export default new loggingIn();