//major configuration of appwrite (appwrite database and custom query)
import config from '../config/config.js'
import { Client,ID,Databases,Storage,Query } from "appwrite"

export class Service{
    client =new Client();
    databases;
    bucket;//storage

    constructor(){
        this.client 
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);

    }
    //read documentation on create document in database
    //So basically in our post in db we need all these paramenters
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument( //what parameters to be passed in database createDocument
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,//ID.unique (document id : jo bhi slug value paas hogi will be considered as doc id)
                {
                    title,
                    content,
                    featuredImage,
                    status,userId
                }
            )
            
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: errro",error);
            
        }
    }

    //go through update post doc
    //Kis document id mei update krna h wo alag se le skte h therefore we took slug separately
    //we don't require userID in updatePost since jiska post h usi ko update krne k option provide krenge 
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            console.log("Slug",slug);
            return await this.databases.updateDocument(//parameters or essentials required for updateDocument method
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,//our doc id
                {
                    title,
                    content,featuredImage,status
                }

            )
            
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: errro",error);
            
        }

    }

    //how to delete document(go through delete documnet in databases documnetation )
    async deletePost(slug){//only requires slug value that is doc id to delete a doc
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )//deleteDocument is a method which requires db id,collection id and slug
            return true; //if document deleted return true rest is on front-end ki kaise us true ko handle kr rhe for eg: by displaying success msg
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: errro",error);
            return false;
        }
    }

    //Get document (agar koi ek post chaiye ho toh uske liye function)
    async getPost(slug){
        try {
            return await this.databases.getDocument(
               config.appwriteDatabaseId,
               config.appwriteCollectionId,
               slug 
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: errro",error);
            return false;
        }
    }

    //List Document(agar saare document chahiye then go through List Document documentation)
    //but hume saare documents mil jyenge even jiske status active ni h therefore we need to know how to
    //use queries in order to check out for those docs that are active(Go through quries in documentation)
    async getPosts(queries=[Query.equal("status","active")]){ //basically jin posts ke status active h therfore equal ke andar jo pass kr rhe i.e keys(jo hmne appwrite mei indexes bnayi thi)
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,//agar waha upar ni likhte queries toh wo [] portion as it is yaha bhi define kr skte h

            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: errro",error);
            return false;
        }
    }

    //file Upload services or method(Storage mei jakr documentation padho)
    async uploadFile(file){//jo actual file h wo deni pdegi instead of just file name
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),//unique id dena th
                file //file upload ho gyi ha
            )//ye return fileid krega toh upload file krne ke baad createPost mei featuredImage jo parameter wahi fileId pass krenge
            
        } catch (error) {
           console.log("Appwrite service :: getCurrentUser:: errro",error); 
           return false;
        }
    }

    //delete file(go through documentation)
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
               config.appwriteBucketId,
               fileId
            )
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser:: errro",error);
            return false
        }
    }
    //get file preview (documentation mei jake storage api) ye ek type ka service h jo mujhe chhiye hgi in my blog
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}


//ek obj bana lo Service class ka
const service =new Service()
export default service 