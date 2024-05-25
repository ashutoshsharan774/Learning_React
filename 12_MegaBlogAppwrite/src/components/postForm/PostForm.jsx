import React from 'react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import {Button,Input,Select,RTE} from '../index'
import appwriteService from '../../appwrite/configuration'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {
    //useForm se ky ky chahiye hota h for eg: kisi bhi form k value set krna h so use setValue,watch->atching capability(field ko monitor krna h toh)
    const {register,handleSubmit,watch,setValue,control //yahi control hm pass krenge as it is rte mei wha se jo control h mujhe yaha mil jyega
    ,getValues}=useForm({ //useForm k andar object pass kr skte ha jiske andar jo values dena chahe de skte h
        //default values wo values h jo hm kaam mei lenge
        defaultValues:{
            //user suppose karo aayha h post (form ) ko edit krne k liye isiliye hmne query kiya ki agar post h then title rkhn do ni toh empty
            title:post?.title||'', //agar post h toh uska title use kr lijiye ni toh empty
            slug: post?.$id ||"",//A slug is a URL-friendly version of a string, typically all lowercase with spaces and special characters replaced by hyphens.
            content:post?.content||"",//post ke andar content h toh use kr lo else empty de do
            status:post?.status||'active' //status bydefault active 

        }
    })
    const navigate=useNavigate()
    const userData=useSelector((state)=>state.auth.userData) //state(store) ke andar se userData le aaye
    //aagr post ki value  h then update ni toh create new post
    const submit =async(data)=>{
        if(post){//agar post exists then
            //file bana rkha ha ,usko upload karo
            const file=data.image[0]? await appwriteService.uploadFile(data.image[0]):null
        
        //Just because we had a post already so purani image delete bhi toh krni hogi
        if(file){
            appwriteService.deleteFile(post.featuredImage)
        }
        //Now we need to update post 
        console.log("PostId",post.$id);
        console.log("Data",data);
        const dbPost=await appwriteService.updatePost(post.$id,{ //baki sb value spread krdo ,slug is post.$id and we have to override featuredImage(since image upload krke ek data aa chuka h apne paas) // appwriteService mei jakr dekh lo
            ...data, featuredImage:file ? file.$id: undefined,  //agar file h toh feild ki id dedo(unique image ki id hogi) if not then undefined    
        })
            if(dbPost){//user ko navigate kara do after post is updated
                navigate(`/post/${dbPost.$id}`)

            }
            //agar post update krne ko ni toh naya (post)form create krna chahta h
         } else{
                //pahela kaam file upload ka karo //todo ye h ki check karo if file exists then upload
                const file=await appwriteService.uploadFile(data.image[0]);

                if(file){
                    const fileId=file.$id
                    data.featuredImage=fileId
                   const dbPost= await appwriteService.createPost({
                        ...data, //spread out kiya h
                        userId:userData.$id//userdata jo useselector k use krke fetch kiya h

                    })
                    if(dbPost){
                        navigate(`/post/${dbPost.$id}`)
                    }
                }

            }
        

    }
    //We have two input fields title and slug so we have to watch title and generate slug (agar title mei space aata h then slug mei us jagah - aana chahiye )
    const slugTransform=useCallback((value)=>{
       // console.log("Checking slug",value);
        if(value && typeof value ==='string'){
            console.log("Checking slug",value);
            return value
            .trim()
            .toLowerCase()
            //jaise ! hota h js mei likewise ^ hota h rajex mei
            .replace(/[^a-zA-Z\d\s]+/g,'-') //(a tox , Ato Z   \d->digits  \s->space) ko chor ke kuch bhi aaye replace it with -  || (global match //g)
            .replace(/\s/g,'-')
        }
        return '' //agar ye sb ni ha then return empty string
    },[])

    React.useEffect(()=>{
        //subscription bnta h watch method se || in watch method also we get a callback
        const subscription =watch((value,{name})=>{
            if(name === 'title'){
                console.log("Checking title",name,value);
                setValue("slug",slugTransform(value.title),{shouldValidate:true})  //since value ek object h toh hover krke check kr skte ha (since hmne default value rkhi thi hookform mei)
                console.log("Verifying title",name,value);
            }
        })

        return ()=>{ //clean up basically taki wo khud mei hi ghum k na rah jai call hone ke liye
            subscription.unsubscribe()    /*The useEffect hook can return a cleanup function, which can be used to clean up any resources or subscriptions when the component unmounts or before the effect runs again */
        }

    },[watch,slugTransform,setValue])



    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            {/*form is divided in left and right part , left part ->w-2/3 takes 2/3rd and right takes 1/3rd */}
        <div className="w-2/3 px-2">
            <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register("title", { required: true })}
            />
            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug", { required: true })}
                onInput={(e) => {
                    setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                }}
            />
            {/*RTE hmne banaya th usko pass kr diya as it is */}
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>

        <div className="w-1/3 px-2">
            <Input
                label="Featured Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
            />
            {post && (
                <div className="w-full mb-4">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-lg"
                    />
                </div>
            )}
            <Select
                options={["active", "inactive"]}
                label="Status"
                className="mb-4"
                {...register("status", { required: true })}
            />
            <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                {post ? "Update" : "Submit"}
            </Button>
        </div>
    </form>

    )
}

export default PostForm
