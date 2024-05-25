import config from '../config/config.js'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client=new Client()
    account;

    //since we want client to store endpoint and id when an obj is created so we use constructor bcoz its called at time of object creation
    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)//check which variables did we use for endpoint that is appwriteUrl and similarily for projectid
            .setProject(config.appwriteProjectId);
        this.account=new Account(this.client);//so jb ek client bn gya ideally then we should have access of an account
        //Our code is similar to snippet(code) with slight modification
    }
    //we create a method here and call all services of appwrite ,basically we don't let anyone know tha t we are using appwrite or firebase underthehood
    //we use async await because we want not to move ahead till account is created
    /*Steps:
        Async Function: createAccount is an asynchronous function declared with the async keyword.
        Try-Catch Block: Used for handling any errors that might occur during the user creation process.
        Await: Pauses the execution of createAccount until account.create resolves.
    */

     async createAccount({email,password,name}){//basically account creatio is a signup
        try{
           const userAccount= await this.account.create(ID.unique(),email
           ,password,name);//Unique userID is mandate
           //check if userAccount exists
           if(userAccount){
            //call another method : the flow is ki agar userAccount exists then usko login bhi krwa hi do or can display success message
            return this.login({email,password})
           
           }
           else{
            return userAccount;
           }

        }catch(error){
            throw error;
        }
     }

     //method for login: check documentation of login using email n password on appwrite
     async login({email,password}){
        try{
           return await this.account.createEmailPasswordSession(email,
                password);

        }catch(error){
            throw error;
        }
     }
//GET ACCOUNT documentation
     async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: errro",error);
        }
        return null;
     }
     //Delete session or log out read docs
     async logout(){
        try {
            await this.account.deleteSessions(); //since we are using delete Sessions so all session will be deleted but incase of just deleting a session we need to provide a session Id
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: errro",error);
        }
     }
}

//since we have created a class so whichever file uses this class needs to create a new obj of this class
//then only will able to all methods so why not make an obj and then export

const authService=new AuthService();//made an obj of class AuthService so if we want to use logut login createAccount we can use by dot operator

export default authService


//Plus point is if we change our baas from appwrite to anyother we just need to make changes in this file only and no changes in frontend code