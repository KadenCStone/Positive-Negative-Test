import { expect } from '@wdio/globals'
import loggingIn from '../pageObjects/logins.js'

describe('First Automated Login Test', () => {
    it('should login with valid user along with one invalid and one valid password', async () => {
    await loggingIn.open()
    
    await loggingIn.getIn('standard_user', 'not_so_secret_sauce')
    await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    await loggingIn.getIn('standard_user', 'secret_sauce')
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')


    await loggingIn.open()

    await loggingIn.getIn('locked_out_user', 'incorrect')
    await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    await loggingIn.getIn('locked_out_user', 'secret_sauce')
    await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    
    await loggingIn.open()

    await loggingIn.getIn('problem_user', 'nope')
    await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    await loggingIn.getIn('problem_user', 'secret_sauce')
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

    
    await loggingIn.open()

    await loggingIn.getIn('performance_glitch_user', 'not today')
    await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    await loggingIn.getIn('performance_glitch_user', 'secret_sauce')
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')


    await loggingIn.open()

    await loggingIn.getIn('error_user', 'try again')
    await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    await loggingIn.getIn('error_user', 'secret_sauce')
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')


    await loggingIn.open()

    await loggingIn.getIn('visual_user', 'nope')
    await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    await loggingIn.getIn('visual_user', 'secret_sauce')
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')



    })
})